import FavouriteItems from '../../components/favouriteItems/FavouriteItems';
import './favourite.css';

const Favourite: React.FC = () => {
  return (
    <section className="container">
      <h3 className="favourite__title">Favourite Products</h3>
      <hr></hr>
      <FavouriteItems />
    </section>
  );
};

export default Favourite;
