import { useEffect, useContext } from 'react';
import { API_KEY, API_URL } from '../config';
import { Preloader } from './Preloader';
import { ShopContext } from '../context';
import { GoodsList } from './GoodsList';
import { Cart } from './Cart';
import { BasketList } from './BasketList';
import { Alert } from './Alert';

function Shop() {
  const { goods, setGoods, loading, order, isBasketShow, AlertName } = useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        data.shop && setGoods(data.shop);
        data.price && setGoods(data.price);
        data.displayAssets && setGoods(data.displayAssets);
      });
    //eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
      {isBasketShow && <BasketList />}
      {AlertName && <Alert />}
    </main>
  );
}

export { Shop };
