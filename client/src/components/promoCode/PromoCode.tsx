import { observer } from 'mobx-react';
import { useSephoraContext } from '../../context/SephoraContext';
import { useState } from 'react';
import './promoCode.css';

const PromoCode: React.FC = observer(() => {
  const { cart } = useSephoraContext();
  const [promoCode, setPromoCode] = useState('');

  const handlePromoCode = (): void => {
    cart.setDiscount(promoCode);
    setPromoCode('');
  };

  return (
    <div className="cartdetail__promo">
      <label className="cartdetail__promo-text">Have a Promo Code?</label>
      <div className="cartdetail__promo-code">
        <input
          type="text"
          value={promoCode}
          placeholder="Enter your code"
          onChange={(e) => setPromoCode(e.target.value)}
          className="cartdetail__promo-code"
        ></input>
        <button
          type="button"
          className="cartdetail__promo-btn"
          onClick={handlePromoCode}
        >
          Check
        </button>
      </div>
    </div>
  );
});

export default PromoCode;
