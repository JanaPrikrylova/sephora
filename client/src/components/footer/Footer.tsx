import { Link } from 'react-router-dom';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__row">
        <div className="footer__col">
          <h4 className="footer__title">Company</h4>
          <ul>
            <li>
              <Link to="#">About us</Link>
            </li>
            <li>
              <Link to="#">Our services</Link>
            </li>
            <li>
              <Link to="#">Privacy policy</Link>
            </li>
            <li>
              <Link to="#">Affiliate program</Link>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__title">Get Help</h4>
          <ul>
            <li>
              <Link to="#">FAQ</Link>
            </li>
            <li>
              <Link to="#">Shipping</Link>
            </li>
            <li>
              <Link to="#">Returns</Link>
            </li>
            <li>
              <Link to="#">Payment options</Link>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__title">Online Shop</h4>
          <ul>
            <li>
              <Link to="#">Make up</Link>
            </li>
            <li>
              <Link to="#">Hair</Link>
            </li>
            <li>
              <Link to="#">Body</Link>
            </li>
            <li>
              <Link to="#">Skin care</Link>
            </li>
          </ul>
        </div>
        <div className="footer__col">
          <h4 className="footer__title">Follow us</h4>
          <div className="social-links">
            <Link to="#">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to="#">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link to="#">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to="#">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
