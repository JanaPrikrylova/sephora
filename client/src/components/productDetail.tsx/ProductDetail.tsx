import { useSephoraContext } from '../../context/SephoraContext';
import { useState } from 'react';
import { observer } from 'mobx-react';
import './productDetail.css';

type ProductDetailProps = {
  id: string;
};

const ProductDetail: React.FC<ProductDetailProps> = observer(({ id }) => {
  const { sephoraProducts, cart } = useSephoraContext();
  const [selectedImg, setSelectedImg] = useState(0);
  const currentProduct = sephoraProducts.find((product) => product.id === id);

  if (!currentProduct) {
    return <></>;
  }

  //console.log(JSON.stringify(currentProduct));
  return (
    <div className="productdetail__container">
      <div className="productdetail__left">
        <img
          className="image-big"
          src={currentProduct.img[selectedImg]}
          alt=""
        />
      </div>
      <div className="productdetail__right">
        <h1 className="productdetail__title">{currentProduct.name}</h1>
        <span className="productdetail__price">{`${currentProduct.price} CZK`}</span>
        <p className="productdetail__description">
          {currentProduct.description}
        </p>
        <div className="productdetail__quantity">
          <button
            className="btn__quantity"
            onClick={() =>
              currentProduct.setQuantity(
                currentProduct.quantity === 1 ? 1 : currentProduct.quantity - 1,
              )
            }
          >
            -
          </button>
          {currentProduct.quantity}
          <button
            className="btn__quantity"
            onClick={() =>
              currentProduct.setQuantity(currentProduct.quantity + 1)
            }
          >
            +
          </button>
          <button
            className="btn__add"
            onClick={() => cart.addProduct(currentProduct)}
          >
            Add to Cart
          </button>
        </div>
        <div className="productdetail__images">
          <img
            className="image-small"
            src={currentProduct.img[0]}
            alt=""
            onClick={() => setSelectedImg(0)}
          />
          <img
            className="image-small"
            src={currentProduct.img[1]}
            alt=""
            onClick={() => setSelectedImg(1)}
          />
          <img
            className="image-small"
            src={currentProduct.img[2]}
            alt=""
            onClick={() => setSelectedImg(2)}
          />
        </div>
      </div>
    </div>
  );
});

export default ProductDetail;
