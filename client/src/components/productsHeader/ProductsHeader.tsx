import Sort from '../sort/Sort';
import Search from '../search/Search';
import './productsHeader.css';

const ProductsHeader: React.FC = () => {
  return (
    <div className="search__container">
      <Search />
      <Sort />
    </div>
  );
};

export default ProductsHeader;
