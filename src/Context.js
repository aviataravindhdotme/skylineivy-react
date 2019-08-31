import React, {useReducer} from 'react';
const reducer = (state, action) => {
    switch (action.type) {
        case "Add":{
            const newState = Object.assign({},
                state,
                {cartTotal:state.cartTotal+1},
                {cartItems: state.cartItems.push({id:payload.id, state.cartTotal+1})};

            return newState;
        }

        case "Remove":{
            const newState = Object.assign({},
                state, {cartTotal:state.cartTotal>0? state.cartTotal-1: 0});
            return newState;
        }
        default:
            return;
    }
};

const initialCart = {cartTotal: 5, cartItems:[{
    id:"fa86b1c-9ebf-4555-987f-7b8bf7d27be7",
        count:5
    }]};

const CartContext= React.createContext(initialCart);

function CartProvider(props){
    const [state, dispatch] = useReducer(reducer, initialCart);

    return(
      <CartContext.Provider value={{state, dispatch}}>
          {props.children}
      </CartContext.Provider>
    );
}

export {CartContext, CartProvider};
