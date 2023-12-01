import { groupBy } from "../../../src/utils.js";
import BasketItem from "../BasketItems/BasketItem.jsx";
import "./Basket.scss";

const Basket = (props) => {
  const { orderedProducts, onProductRemove } = props;

  const orderCount = orderedProducts.length;

  const totalCost = orderedProducts.reduce(
    (acc, orderedProduct) => acc + orderedProduct.price,
    0
  );

  const groupedOrderProduts = Object.entries(
    groupBy(orderedProducts, (product) => product.id)
  );

  console.log(groupedOrderProduts);

  const handleProductRemove = (orderedProduct) => {
    onProductRemove(orderedProduct);
  };

  return (
    <div className="basket">
      <header>
        <h5>
          <span>Basket</span>
          <span>({orderCount} products)</span>
        </h5>
        <button>X</button>
      </header>
      <div>
        <ul>
          {groupedOrderProduts.map(([name, orderedProducts]) => (
            <BasketItem
            orderCount={orderedProducts.length}
              orderedProduct={orderedProducts[0]}
              onProductRemove={handleProductRemove}
            />
          ))}
        </ul>
      </div>
      <footer>
        <button>Order and Pay ({totalCost.toFixed(2)})</button>
      </footer>
    </div>
  );
};

export default Basket;
