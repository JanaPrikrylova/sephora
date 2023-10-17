import { makeObservable, observable, action, computed } from 'mobx';
import { Product } from './product';
import { PROMOTIONS } from '../data';

class CartStore {
  products: Array<Product>;
  discountPercent: number;

  constructor() {
    this.products = [];
    this.discountPercent = 0;

    makeObservable(this, {
      products: observable,
      discountPercent: observable,
      addProduct: action,
      removeProduct: action,
      totalPrice: computed,
      totalQuantity: computed,
      setDiscount: action,
      discount: computed,
    });
  }
  setDiscount(value: string): void {
    if (value === '') {
      this.discountPercent = 0;
    } else {
      for (let i = 0; i < PROMOTIONS.length; i++) {
        if (value === PROMOTIONS[i].code) {
          this.discountPercent = PROMOTIONS[i].discountValue;
          return;
        }
      }
    }
  }

  addProduct(product: Product): void {
    const item = this.products.find((item) => item.id === product.id);
    if (item) {
      item.setQuantity(item.quantity + product.quantity);
    } else {
      this.products.push(product.clone());
    }
  }

  removeProduct(product: Product): void {
    const item = this.products.find((item) => item.id === product.id);
    if (item) {
      this.products = this.products.filter((item) => item.id !== product.id);
    }
  }

  get totalPrice(): number {
    let total = 0;
    this.products.forEach((item) => (total += item.total));
    return total;
  }

  get discount(): number {
    return (this.totalPrice * this.discountPercent) / 100;
  }

  get totalQuantity(): number {
    let totalQuantity = 0;
    this.products.forEach((item) => (totalQuantity += item.quantity));
    return totalQuantity;
  }
}

export { CartStore };
