import React, {useReducer} from 'react';
function useReducer (state, action) {
    switch(action.type){
        case 'add': return {...state, count:state.count+1};

        case "remove":
            return {...state, count:state.count-1};


        default:
            return;
    }

}
const cartState = {count:5};

const CartContext= React.createContext(cartState);

function CartProvider(props){

    return(
      <CartContext.Provider value={cartState}>
          {props.children}
      </CartContext.Provider>
    );
}

export {CartContext, CartProvider}
