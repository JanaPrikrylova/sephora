import { useSephoraContext } from '../../context/SephoraContext';
import './search.css';

const Search: React.FC = () => {
  const { searchName, setSearchName } = useSephoraContext();

  return (
    <div className="search__box">
      <h3 className="search__title">Search by name</h3>
      <div className="search__card">
        <input
          className="input"
          value={searchName}
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchName(e.target.value.toLowerCase())}
        />
        <div className="btn">
          <i className="fa-solid fa-magnifying-glass search_glass"></i>
        </div>
      </div>
    </div>
  );
};

export default Search;
