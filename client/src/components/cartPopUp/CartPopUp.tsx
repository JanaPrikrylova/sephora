import { useSephoraContext } from '../../context/SephoraContext';
import { observer } from 'mobx-react';
import './cartPopUp.css';

const CartPopUp: React.FC = observer(() => {
  const { cart } = useSephoraContext();

  if (!cart.products.length) return null;

  return (
    <div className="cart">
      {cart.products.map((item, index) => (
        <div className="cart__popup" key={item.id + index}>
          <div className="cart__popup-image">
            <img className="cart__popup-image" src={item.img[0]} alt="" />
          </div>
          <div className="cart__popup-description">
            <h4>{item.name}</h4>
            <p>{item.description}</p>
            <div className="cart__popup-quantity">
              <span>{`${item.quantity} ks`}</span>
              <span className="cart__popup-price">{`${item.total} CZK`}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
});

export default CartPopUp;
