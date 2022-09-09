import { useContext } from 'react';

import { ShopContext } from '../context';

function GoodsItem(props) {
  const {
    mainId,
    displayName,
    displayDescription,
    price: { finalPrice },
    displayAssets: [{ full_background }],
  } = props;

  const { addToBasket } = useContext(ShopContext);

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={displayName} />
      </div>
      <div className="card-content">
        <span className="card-title">{displayName}</span>
        <p>{displayDescription}</p>
      </div>
      <div className="card-action">
        <button
          className="btn"
          onClick={() =>
            addToBasket({
              mainId,
              displayName,
              finalPrice,
            })
          }
        >
          Купить
        </button>
        <span className="right">{finalPrice} Руб.</span>
      </div>
    </div>
  );
}

export { GoodsItem };
