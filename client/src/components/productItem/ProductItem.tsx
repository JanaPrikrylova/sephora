import { useSephoraContext } from '../../context/SephoraContext';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import './productItem.css';

interface ProductItemProps {
  url: string;
  name: string;
  price: number;
  id: string;
}

const ProductItem: React.FC<ProductItemProps> = observer(
  ({ url, name, price, id }) => {
    const { sephoraProducts } = useSephoraContext();
    const currentProduct = sephoraProducts.find((product) => product.id === id);

    return (
      <div className="productitem__card">
        <i
          className="fa-regular fa-heart heart__icon"
          onClick={() => currentProduct?.setFavourite(true)}
        ></i>
        <Link to={`/product/${id}`}>
          <img
            className="productitem__image"
            src={url}
            alt="Product item image"
          />
          <h3 className="productitem__name">{name}</h3>
          <p className="productitem__price">{`${price} CZK`}</p>
        </Link>
      </div>
    );
  },
);

export default ProductItem;
