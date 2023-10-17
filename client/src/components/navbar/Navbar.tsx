import { NavLink } from 'react-router-dom';
import { useSephoraContext } from '../../context/SephoraContext';
import { observer } from 'mobx-react';
import { useState } from 'react';
import CartPopUp from '../cartPopUp/CartPopUp';
import './navbar.css';

const Navbar: React.FC = observer(() => {
  const { cart, sephoraProducts } = useSephoraContext();
  const [open, setOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  const favourtieProducts = sephoraProducts.filter(
    (product) => product.favourite,
  );

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <header className="header">
      <nav className="wrapper">
        <div className="nav__logo">
          <NavLink to="/">Sephora</NavLink>
        </div>
        <div className={open ? 'nav__menu nav__menu-open' : 'nav__menu'}>
          <i className="fa-solid fa-xmark" onClick={handleClick}></i>
          <div className="nav__item">
            <NavLink to="/products">Products</NavLink>
          </div>
          <div className="nav__item">
            <NavLink to="#">Stores</NavLink>
          </div>
          <div className="nav__item">
            <NavLink to="#">Contact</NavLink>
          </div>
        </div>
        <div className="nav__icons">
          <NavLink to="#" className="">
            <i className="fa-regular fa-user"></i>
          </NavLink>
          <NavLink to="/favourite" className="nav__icon-favourite">
            <i className="fa-regular fa-heart"></i>
            <span className="nav__icon-amount">{favourtieProducts.length}</span>
          </NavLink>
          <NavLink to="/cart" className="nav__icon-cart">
            <i
              className="fa-solid fa-cart-shopping"
              onMouseEnter={() => setCartOpen(!cartOpen)}
              onMouseLeave={() => setCartOpen(!cartOpen)}
            ></i>
            <span className="nav__icon-amount">{cart.totalQuantity}</span>
          </NavLink>
          <i className="fa-solid fa-bars" onClick={handleClick}></i>
        </div>
      </nav>

      {cartOpen && <CartPopUp />}
    </header>
  );
});

export default Navbar;
