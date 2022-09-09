export function reducer(state, { type, payload }) {
  switch (type) {
    case 'SET_GOODS':
      return {
        ...state,
        goods: payload || [],
        loading: false,
      };
    case 'TOGGLE_BASKET':
      return {
        ...state,
        isBasketShow: !state.isBasketShow,
      };
    case 'INC_QUANTITY':
      state.order.map((el) => {
        if (el.mainId === payload) {
          const newQuantitiy = el.quantity + 1;
          return {
            ...el,
            quantity: newQuantitiy,
          };
        } else {
          return el;
        }
      });
      return {
        ...state,
      };

    case 'DEC_QUANTITY':
      state.order.map((el) => {
        if (el.mainId === payload) {
          const newQuantitiy = el.quantity - 1;
          return {
            ...el,
            quantity: newQuantitiy >= 0 ? newQuantitiy : 0,
          };
        } else {
          return el;
        }
      });
      return {
        ...state,
      };
    case 'ADD_TO_BASKET':
      const itemIndex = state.order.findIndex((orderItem) => orderItem.mainId === payload.mainId);

      let newOrder = null;
      if (itemIndex < 0) {
        const newItem = {
          ...payload,
          quantity: 1,
        };
        newOrder = [...state.order, newItem];
      } else {
        newOrder = state.order.map((orderItem, index) => {
          if (index === itemIndex) {
            return {
              ...orderItem,
              quantity: orderItem.quantity + 1,
            };
          } else {
            return orderItem;
          }
        });
      }

      return {
        ...state,
        order: newOrder,
        alertName: payload.displayName,
      };

    case 'REMOVE_FROM_BASKET':
      return {
        ...state,
        order: state.filter((el) => el.mainId !== payload),
      };
    case 'CLOSE_ALERT':
      return {
        ...state,
        alertName: '',
      };

    default:
      return state;
  }
}
