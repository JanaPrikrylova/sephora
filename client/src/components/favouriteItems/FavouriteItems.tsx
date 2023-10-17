import { useSephoraContext } from '../../context/SephoraContext';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import './favouriteitems.css';

const FavouriteItems: React.FC = observer(() => {
  const { sephoraProducts } = useSephoraContext();
  const favourtieProducts = sephoraProducts.filter(
    (product) => product.favourite,
  );

  return (
    <div className="favouritelist__container">
      {favourtieProducts.length > 0 ? (
        <>
          {favourtieProducts.map((item, index) => (
            <div key={item.id + index} className="favouriteitem__card">
              <i
                className="fa-regular fa-heart favouriteitem_heart"
                onClick={() => item.setFavourite(false)}
              ></i>
              <Link to={`/product/${item.id}`}>
                <img
                  className="favouriteitem__image"
                  src={item.img[0]}
                  alt=""
                />
                <h3 className="favouriteitem__name">{item.name}</h3>
                <p className="favouriteitem__price">{`${item.price} CZK`}</p>
              </Link>
            </div>
          ))}
        </>
      ) : (
        <div className="favourite__empty">
          <p>You don´t have any favourite products yet 💓.</p>
        </div>
      )}
    </div>
  );
});
export default FavouriteItems;
