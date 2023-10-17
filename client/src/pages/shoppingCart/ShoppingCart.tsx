import { useSephoraContext } from '../../context/SephoraContext';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import PromoCode from '../../components/promoCode/PromoCode';
import './shoppingCart.css';

const ShoppingCart: React.FC = observer(() => {
  const { cart } = useSephoraContext();

  const handelRemoveDiscount = (): void => {
    cart.setDiscount('');
  };

  return (
    <section className="container">
      <div className="cartdetail__header">
        <h3>Your Cart</h3>
        <div className="cartdetail__header-totalamount">
          <p>Total price:</p>
          <span>{` ${cart.totalPrice - cart.discount} CZK`}</span>
        </div>
      </div>

      <hr></hr>
      {cart.products.length > 0 ? (
        <div className="cartdetail__container">
          {cart.products.map((product, index) => (
            <div className="cartdetail__card" key={product.id + index}>
              <div className="cartdetail__card-img">
                <Link to={`/product/${product.id}`}>
                  <img src={product.img[0]} alt="" />
                </Link>
              </div>
              <div className="cartdetail__card-text">
                <p className="cartdetail__card-name">{product.name}</p>
                <p className="cartdetail__card-description">
                  {product.description}
                </p>
              </div>
              <div className="cartdetail__card-quantity">
                <button
                  onClick={() =>
                    product.setQuantity(
                      product.quantity === 1 ? 1 : product.quantity - 1,
                    )
                  }
                >
                  -
                </button>
                {product.quantity}
                <button
                  onClick={() => product.setQuantity(product.quantity + 1)}
                >
                  +
                </button>
              </div>
              <p className="cartdetail__card-totalprice">{`${product.total} CZK`}</p>
              <p
                onClick={() => cart.removeProduct(product)}
                className="cartdetail__card-delete"
              >
                remove
              </p>
            </div>
          ))}
          <hr></hr>
          {cart.discount > 0 && (
            <div className="cartdetail__discount">
              <p>Discount</p>
              <div className="cartdetail__discount-total">
                <span>{` - ${cart.discount} CZK`}</span>
                <button onClick={handelRemoveDiscount}>
                  <i className="fa-regular fa-trash-can"></i>
                </button>
              </div>
            </div>
          )}

          <PromoCode />

          <div className="cartdetail__buttons-next">
            <Link to="/products">
              <button className="cartdetail__btn-1">Continue shopping</button>
            </Link>
            <button className="cartdetail__btn">Checkout</button>
          </div>
        </div>
      ) : (
        <div className="cartdetail__empty">
          <p>You don´t have any product in shopping bag 🛒.</p>
        </div>
      )}
    </section>
  );
});

export default ShoppingCart;
