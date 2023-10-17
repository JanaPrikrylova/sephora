import { useSephoraContext } from '../../context/SephoraContext';
import ProductsList from '../../components/productsList/ProductsList';
import ErrorMessage from '../../components/errorMessage/ErrorMessage';
import Loader from '../../components/loader/Loader';
import ProductsHeader from '../../components/productsHeader/ProductsHeader';
import './products.css';

const Products: React.FC = () => {
  const { isLoading, error } = useSephoraContext();

  return (
    <section className="container">
      <div className="products__container">
        <ProductsHeader />
        {isLoading && <Loader />}
        {!isLoading && !error && <ProductsList />}
        {error && <ErrorMessage message={error} />}
      </div>
    </section>
  );
};

export default Products;
