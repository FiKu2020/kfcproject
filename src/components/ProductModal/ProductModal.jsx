import React, { useState } from 'react';
import './ProductModal.scss'; 
import Product from '../Product/Product';


const ProductModal = ({ closeModal, product, onAddToBasket }) => {
  const { name, price, description, imageUrl } = product;
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addingToBasket = () => {
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close" onClick={closeModal}>x</button>
        <h2>{name}</h2>
        <img src={imageUrl} alt={name} />
        <p>{description}</p>
        <p>Price: {price}</p>
        <div className="zmiana-ilosci">
          <button onClick={decreaseQuantity}>-</button>
          <span>{quantity}</span>
          <button onClick={increaseQuantity}>+</button>
        </div>
        <button onClick={addingToBasket}>Add to Basket</button>
      </div>
    </div>
  );
};

export default ProductModal;