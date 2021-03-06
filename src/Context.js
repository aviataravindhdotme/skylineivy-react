import React, { useReducer } from "react";

const reducer = (state, action) => {
  let newCartItems = state.cartItems;

  switch (action.type) {
    case "Add": {
      if (!state.cartItems.find(x => x.id === action.payload.id)) {
        let newItem = { id: action.payload.id, count: action.payload.count };
        newCartItems.push(newItem);
      } else {
        newCartItems.map(x => {
          if (x.id === action.payload.id) {
            x.count = x.count + action.payload.count;
          }
        });
      }

      return Object.assign({}, state, {
        cartTotal: state.cartTotal + action.payload.count,
        cartItems: newCartItems
      });
    }
    case "Remove": {
      newCartItems.map(x => {
        if (x.id === action.payload.id) {
          x.count = x.count - action.payload.count;
        }
      });
      newCartItems = newCartItems.filter(x => x.count > 0);

      return Object.assign({}, state, {
        cartTotal:
          state.cartTotal - action.payload.count > 0
            ? state.cartTotal - action.payload.count
            : 0,
        cartItems: newCartItems
      });
    }

    case "update": {
      let newTotal = state.cartTotal;
      newCartItems.map(x => {
        if (x.id === action.payload.id) {
          if (x.count > action.payload.count) {
            newTotal -= action.payload.count;
          } else {
            newTotal += action.payload.count;
          }

          x.count = action.payload.count;
        }
      });

      if (!newCartItems.find(x => x.id === action.payload.id)) {
        let newItem = { id: action.payload.id, count: action.payload.count };
        newCartItems.push(newItem);
        newTotal = newTotal + action.payload.count;
      }

      newCartItems = newCartItems.filter(x => x.count > 0);
      newTotal = newCartItems.reduce((prev, cur) => prev + cur.count, 0);

      return Object.assign({}, state, {
        cartTotal: newTotal,
        cartItems: newCartItems
      });
    }

    default:
      return;
  }
};

const initialCart = {
  cartTotal: 8,
  cartItems: [
    { id: "9d436e98-1dc9-4f21-9587-76d4c0255e33", count: 3 },
    { id: "bfa86b1c-9ebf-4555-987f-7b8bf7d27be7", count: 5 }
  ]
};

const CartContext = React.createContext(initialCart);

function CartProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialCart);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {props.children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
