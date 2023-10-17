import { makeObservable, observable, action, computed } from 'mobx';

class Product {
  id: string;
  name: string;
  price: number;
  description: string;
  img: string[];
  howtotext: string;
  quantity: number;
  favourite: boolean;
  

  constructor({
    id,
    name,
    price,
    description,
    img,
    howtotext,
    quantity = 1,
  }: {
    id: string;
    name: string;
    price: number;
    description: string;
    img: string[];
    howtotext: string;
    quantity?: number;
  }) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.description = description;
    this.img = img;
    this.howtotext = howtotext;
    this.quantity = quantity;
    this.favourite = false;
    makeObservable(this, {
      id: observable,
      name: observable,
      price: observable,
      description: observable,
      img: observable,
      howtotext: observable,
      quantity: observable,
      setQuantity: action,
      total: computed,
      favourite: observable,
      setFavourite: action,
    });
  }
  setQuantity(value: number): void {
    this.quantity = value;
  }

  setFavourite(value: boolean): void {
    this.favourite = value;
  }

  get total(): number {
    return this.price * this.quantity;
  }

  clone(): Product {
    const newProduct = new Product({
      id: this.id,
      name: this.name,
      price: this.price,
      description: this.description,
      img: this.img,
      howtotext: this.howtotext,
      quantity: this.quantity,
    });

    return newProduct;
  }
}

export { Product };
