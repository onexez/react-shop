import { BasketItem } from './BasketItem';

export function BasketList(props) {
  const {
    order = [],
    handleBasketShow = Function.prototype,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.finalPrice * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active">Корзина</li>
      {order.length ? (
        order.map((item) => (
          <BasketItem
            key={item.mainId}
            removeFromBasket={removeFromBasket}
            incQuantity={incQuantity}
            decQuantity={decQuantity}
            {...item}
          />
        ))
      ) : (
        <li className="collection-item ">Корзина пуста</li>
      )}

      <button className="secondary-content btn">Оформить</button>
      <li className="collection-item active">Общая стоимость: {totalPrice} Руб.</li>
      <i className="material-icons basket-close " onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}
