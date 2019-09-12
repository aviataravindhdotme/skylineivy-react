/** @jsx jsx */
import React, { useContext, useState } from "react";
import { css, jsx } from "@emotion/core";
import { CartContext } from "../Context";
import StoreData from "../../storedata";
import StarRating from "react-svg-star-rating";
import { Link } from "@reach/router";

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);
  const [storeData, setStoreData] = useState(StoreData);
  const [itemCount, setItemCount] = useState(0);
  const [countUpdated, setCountUpdated] = useState(false);

  function decreaseCartCount(id) {
    document.getElementById(id).value--;
    dispatch({
      type: "update",
      payload: { id: id, count: Number(document.getElementById(id).value) }
    });
  }

  function increaseCartCount(id) {
    document.getElementById(id).value++;
    dispatch({
      type: "update",
      payload: { id: id, count: Number(document.getElementById(id).value) }
    });
  }

  function tempCountChange(e) {}

  function updateCart() {
    dispatch({ type: "update", payload: { id: id, count: itemCount } });
  }

  let tempItem,
    tempCount,
    tempTotal = 0,
    tempShipping = 0;
  const imgApi =
    "https://res.cloudinary.com/du7a4xfua/image/upload/v1567100881/";
  console.log(storeData);

  console.log(JSON.stringify(state));
  return (
    <div>
      <div css={cartContainer}>
        <div css={headerRow}>
          <h1>Your Cart</h1>
          <p>You have {state.cartTotal} items in your cart</p>
        </div>
        <div css={titleRow}>
          <div>Product</div>
          <div>Quantity</div>
          <div>Sub-Total</div>
        </div>
        {state.cartTotal === 0 && <h3>No Items to display</h3>}
        {state.cartTotal > 0 &&
          state.cartItems.map(item => {
            [tempItem] = storeData.filter(i => i.id === item.id);
            tempTotal += item.count * tempItem.price;
            return (
              <div key={item.id}>
                <div css={cartRow}>
                  <div css={itemContainer}>
                    <div css={imageContainer}>
                      <img
                        height="50px"
                        src={imgApi + tempItem.img}
                        alt="Product Image"
                      />
                    </div>
                    <div>
                      <h5>{tempItem.name}</h5>
                      <p>{tempItem.color}</p>
                      <div css={priceText}>${tempItem.price}</div>
                    </div>
                  </div>

                  <div css={qtyContainer}>
                    <div css={counterContainer}>
                      <button
                        css={counterButton}
                        onClick={() => decreaseCartCount(item.id)}
                      >
                        -
                      </button>

                      <input
                        id={tempItem.id}
                        type="text"
                        value={
                          state.cartItems.find(x => x.id == tempItem.id).count
                        }
                        css={counterInput}
                        onChange={e => tempCountChange(e)}
                      />
                      <button
                        css={counterButton}
                        onClick={() => increaseCartCount(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div css={totalContainer}>
                    <h5>${(item.count * tempItem.price).toFixed(2)}</h5>
                  </div>
                </div>
              </div>
            );
          })}

        <div css={totalRow}>
          <div>Sub-Total: </div>
          <div>${tempTotal.toFixed(2)}</div>
        </div>

        <div css={totalRow}>
          <div>Shipping: </div>
          <div>${tempShipping.toFixed(2)}</div>
        </div>

        <div css={[totalRow, grandTotal]}>
          <div>Total: </div>
          <div>${(tempTotal + tempShipping).toFixed(2)}</div>
        </div>
        <div css={buttonRow}>
          <Link to="/Checkout">
            {" "}
            <button css={productButton} onClick={updateCart}>
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

const cartContainer = css`
  width: 80vw;
  margin-left: 10vw;
  margin-top: 50px;
`;

const headerRow = css`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
  font-weight: bold;
  * {
    width: 100%;
    margin-bottom: 20px;
    text-align: center;
  }
`;

const titleRow = css`
  width: 80%;
  margin-left: 10%;
  margin-bottom: 50px;

  display: grid;
  grid-template-columns: 45% 30% 10%;
  grid-column-gap: 50px;
  border-bottom: 1px solid #eee;
  * {
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  }
`;

const cartRow = css`
  width: 80%;
  margin-left: 10%;
  margin-bottom: 30px;
  display: grid;
  grid-template-columns: 45% 30% 10%;
  grid-column-gap: 50px;
`;

const itemContainer = css`
  height: 100px;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-column-gap: 20px;
`;

const priceText = css`
  color: #d96528;
`;

const imageContainer = css`
  height: 100px;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #eee;
`;

const qtyContainer = css`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const totalContainer = css`
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const counterContainer = css`
  display: flex;
`;

const counterButton = css`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 400;
  background-color: #000;
  border: none;
`;

const counterInput = css`
  width: 45px;
  height: 30px;
  margin: 0px 10px;
  text-align: center;
`;

const totalRow = css`
  width: 85%;
  margin-bottom: 10px;
  display: grid;
  grid-template-columns: 10% 10%;
  justify-content: flex-end;
  * {
    text-align: end;
  }
`;

const grandTotal = css`
  font-weight: bold;
  font-size: 1.17rem;
  letter-spacing: 1.4;
`;

const productButton = css`
    background-color:#d96528;
    color:white;
    display:flex;
    justify-content:center;
    text-transform:uppercase;
    
    align-items:center;
    border:none;
    height:40px;
    width:120px;
    :hover{
    background-color:#c14103;
    text-decoration:none;
    `;

const buttonRow = css`
  width: 85%;
  margin: 40px 0px;
  display: flex;
  justify-content: flex-end;
`;
export default Cart;
