import React, { useState } from 'react';
import './Product.scss'; 
import ProductModal from '../ProductModal/ProductModal';

const Product = (props) => {
  const { product, orderedProducts, onProductSelect } = props;
  const { name, price, description, imageUrl } = product;

  const [modalVisible, setModalVisible] = useState(false);

  const handleButtonClick = () => {
    onProductSelect(product);
    setModalVisible(true);
  };

  const isOrdered = orderedProducts.some((orderedProduct) => orderedProduct.id === product.id);
  const orderCount = orderedProducts.filter((orderedProduct) => orderedProduct.id === product.id).length;

  return (
    <div className="product">
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <header>
          <h4>{name}</h4>
          <p>{description}</p>
        </header>
        <footer>
          <strong>{price}</strong>
          <button
            onClick={handleButtonClick}
            style={{
              color: isOrdered ? 'white' : undefined,
              background: isOrdered ? '#8ea604' : undefined,
              fontSize: isOrdered ? '1rem' : undefined,
            }}
          >
            {isOrdered ? orderCount : '+'}
          </button>
        </footer>
      </div>
      {modalVisible && <ProductModal closeModal={() => setModalVisible(false)} product={product} />}
    </div>
  );
};

export default Product;