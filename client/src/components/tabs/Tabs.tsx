import { useState } from 'react';
import { useSephoraContext } from '../../context/SephoraContext';
import Reviews from '../reviews/Reviews';
import './tabs.css';

type TabProps = {
  id: string;
};

const Tabs: React.FC<TabProps> = ({ id }) => {
  const { sephoraProducts } = useSephoraContext();
  const [toggleState, setToggleState] = useState(1);
  const { reviews } = useSephoraContext();
  const currentProduct = sephoraProducts.find((product) => product.id === id);

  const numberOfReviews = reviews.length;

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <div className="productdetail__tab-container">
      <div className="tab__items">
        <div
          className={toggleState === 1 ? 'tab__item active-tab' : 'tab__item'}
          onClick={() => toggleTab(1)}
        >
          How to use
        </div>

        <div
          className={toggleState === 2 ? 'tab__item active-tab' : 'tab__item'}
          onClick={() => toggleTab(2)}
        >
          Reviews ({numberOfReviews})
        </div>
      </div>

      <div className="tabs__content">
        <div
          className={
            toggleState === 1 ? 'content__item active-content' : 'content__item'
          }
        >
          <p className="content__item-description">
            {currentProduct?.howtotext.replace(/<[^>]*>|[*]/g, '')}
          </p>
        </div>

        <div
          className={
            toggleState === 2 ? 'content__item active-content' : 'content__item'
          }
        >
          <Reviews id={id} />
        </div>
      </div>
    </div>
  );
};

export default Tabs;
