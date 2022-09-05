export function BasketItem(props) {
  const {
    mainId,
    displayName,
    finalPrice,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item ">
      {displayName}{' '}
      <i className="material-icons basket-quantity" onClick={() => decQuantity(mainId)}>
        remove
      </i>{' '}
      X {quantity}{' '}
      <i className="material-icons basket-quantity" onClick={() => incQuantity(mainId)}>
        add
      </i>{' '}
      = {finalPrice * quantity}
      <span class="secondary-content" onClick={() => removeFromBasket(mainId)}>
        <i class="material-icons basket-delete">close</i>
      </span>
    </li>
  );
}
