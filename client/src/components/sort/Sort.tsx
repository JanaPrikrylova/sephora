import { useSephoraContext } from '../../context/SephoraContext';
import './sort.css';

const Sort: React.FC = () => {
  const { setSort } = useSephoraContext();

  const handleSort = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value === 'PriceAsc') {
      setSort('Asc');
    }
    if (e.target.value === 'PriceDes') {
      setSort('Desc');
    }
    if (e.target.value === 'Reset') {
      setSort('None');
    }
  };

  return (
    <div className="sort__box">
      <h3 className="sort__title">Sort by</h3>
      <select onChange={handleSort}>
        <option value="PriceAsc">Price asc</option>
        <option value="PriceDes">Price des</option>
        <option value="Reset">Reset</option>
      </select>
    </div>
  );
};

export default Sort;
