import { useSephoraContext } from '../../context/SephoraContext';
import Carousel from 'react-multi-carousel';
import ProductItem from '../../components/productItem/ProductItem';
import Loader from '../../components/loader/Loader';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import 'react-multi-carousel/lib/styles.css';
import './home.css';
import { responsive } from '../../data';

const Home: React.FC = () => {
  const { sephoraProducts, isLoading, error } = useSephoraContext();

  const product = sephoraProducts.map((product, index) => (
    <ProductItem
      id={product.id}
      name={product.name}
      price={product.price}
      url={product.img[0]}
      key={product.id + index}
    />
  ));

  return (
    <section className="home__container">
      <div className="home__image"></div>
      <div className="carrousel__container">
        <h1 className="carrousel__title">Best sellers</h1>
        {isLoading && <Loader />}

        {!isLoading && !error && (
          <Carousel responsive={responsive}>{product}</Carousel>
        )}
        {error && <ErrorMessage message={error} />}
      </div>
    </section>
  );
};

export default Home;
