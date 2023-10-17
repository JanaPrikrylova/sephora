import { useParams } from 'react-router-dom';
import ProductDetail from '../../components/productDetail.tsx/ProductDetail';
import Tabs from '../../components/tabs/Tabs';
import './product.css';

type IParams = {
  id: string | undefined;
};

const Product: React.FC = () => {
  const { id } = useParams<IParams>();

  if (!id) return null;
  

  return (
    <>
      <section className="container">
        <ProductDetail id={id} />
        <Tabs id={id} />
      </section>
    </>
  );
};

export default Product;
