import * as types from '../actions/action-types';

const initialState = {
  items: [],
  basketItems: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_BASKET_ITEM:
      return {
        ...state,
        basketItems: Object.assign({[action.item]: ++state.basketItems[action.item] }, state.basketItems)
      }
    case types.GET_ITEMS:
      return Object.assign({}, state, {
          items: action.items,
          basketItems: action.items.reduce(function(acc, cur) {
            acc[cur.name] = 0;
            return acc;
          }, {})
      });
    default:
      return state;
  }
};
