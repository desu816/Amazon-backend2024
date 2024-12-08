import { Type } from './actiontype';

export const initialState = {
  basket: [],
  user:null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find((item) => item.id === action.item.id);

      if (!existingItem) {
        // Add a new item to the basket
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        // Update the amount of an existing item in the basket
        const updatedBasket = state.basket.map((item) =>
          item.id === action.item.id ? { ...item, amount: item.amount + 1 } : item
        );
        return {
          ...state,
          basket: updatedBasket,
        };
      }

    case Type.REMOVE_FROM_BASKET:
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          // Reduce the amount of an item
          newBasket[index] = { ...newBasket[index], amount: newBasket[index].amount - 1 };
        } else {
          // Remove the item from the basket
          newBasket.splice(index, 1);
        }
      }
      return {
        ...state,
        basket: newBasket,
      };
 case Type.SET_USER:
  return  {
  ...state, 
  user:action.user,
  };
    default:
      return state;
  }
};
