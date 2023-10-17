import { useState } from 'react';
import { useSephoraContext } from '../../context/SephoraContext';
import ProductItem from '../productItem/ProductItem';
import './productsList.css';

const ProductsList: React.FC = () => {
  const { sephoraProducts, sort, searchName } = useSephoraContext();
  const [visible, setVisible] = useState(12);

  const showMoreItems = () => {
    setVisible((items) => items + 3);
  };

  const showProducts = () => {
    if (sort === 'Asc') {
      return [...sephoraProducts]
        .filter((p) =>
          searchName ? p.name.toLowerCase().includes(searchName) : true,
        )
        .sort((a, b) => b.price - a.price);
    }
    if (sort === 'Desc') {
      return [...sephoraProducts]
        .filter((p) =>
          searchName ? p.name.toLowerCase().includes(searchName) : true,
        )
        .sort((a, b) => a.price - b.price);
    }
    return sephoraProducts.filter((p) =>
      searchName ? p.name.toLowerCase().includes(searchName) : true,
    );
  };

  return (
    <div className="productslist__container">
      {showProducts()
        ?.slice(0, visible)
        ?.map((product, index) => (
          <ProductItem
            id={product.id}
            name={product.name}
            price={product.price}
            url={product.img[0]}
            key={product.id + index}
          />
        ))}
      <div className="products__btn">
        <button onClick={showMoreItems}>Load more</button>
      </div>
    </div>
  );
};

export default ProductsList;
