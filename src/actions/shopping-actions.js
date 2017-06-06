import * as types from './action-types';

export const addBasketItem = (item) => {
  return {
    type: types.ADD_BASKET_ITEM,
    item: item,
  };
}

export const getItems = () => {
  //@TODO: call a REST service to get this data
  return {
    type: types.GET_ITEMS,
    items: [
      {
        name: "Apples",
        price: 0.25,
        currency: "$"
      },
      {
        name: "Bananas",
        price: 0.15,
        currency: "$"
      },
      {
        name: "Oranges",
        price: 0.30,
        currency: "$"
      },
      {
        name: "Papaya",
        price: 0.50,
        currency: "$",
        offer: {
          name: "3 for 2 Offer",
          calculation: (item, numberOfUnits) => {
            let discountUnits = 0;
            if (numberOfUnits) {
              if (numberOfUnits / 3 >= 1) {
                discountUnits = Math.floor(numberOfUnits / 3);
              }
              return {
                  total: (numberOfUnits - discountUnits) * item.price,
                  appliedDiscount: discountUnits ? discountUnits : false
              }
            }
            return {
              total: 0,
              appliedDiscount: false
            };
          }
        }
      }
    ]
  };
}