/** @jsx jsx */
import React, { useEffect, useState, useContext } from "react";
import { css, jsx } from "@emotion/core";
import StarRating from "react-svg-star-rating";
import Featured from "./Shared/Featured";
import { CartContext } from "../Context";

const ViewItem = props => {
  const { state, dispatch } = useContext(CartContext);
  const [countUpdated, setCountUpdated] = useState(false);
  const [itemCount, setItemCount] = useState(0);
  const imgApi =
    "https://res.cloudinary.com/du7a4xfua/image/upload/v1567100881/";
  const {
    id,
    img,
    name,
    description,
    color,
    starrating,
    price,
    review
  } = props.location.state;

  useEffect(() => {
    window.scroll(0, 0);
  }, [state]);

  useEffect(() => {
    setItemCount(
      state.cartItems.find(x => x.id == id)
        ? state.cartItems.find(x => x.id == id).count
        : 0
    );
  }, []);

  function decreaseCartCount() {
    setItemCount(itemCount - 1 > 0 ? itemCount - 1 : 0);
    setCountUpdated(true);

  }

  function increaseCartCount() {
    setItemCount(itemCount + 1);
    setCountUpdated(true);

  }

  function tempCountChange(e) {}

  function updateCart() {
    dispatch({ type: "update", payload: { id: id, count: itemCount } });
    setCountUpdated(false);
  }

  return (
    <div>
      <div css={viewItemContainer}>
        <div css={imageContainer}>
          <img src={imgApi + img} alt="Product Image" />
        </div>
        <div css={detailsContainer}>
          <h1>{name}</h1>
          <StarRating
            size={15}
            count={5}
            innerRadius={20}
            activeColor={"#000"}
            isReadOnly
            initialRating={starrating}
          />
          <h5 css={productPrice}>${price}</h5>
          <p>{description}</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
            velit dolores repudiandae animi quidem, eveniet quod dolor facilis
            dicta eligendi ullam error. Assumenda in fugiat natus enim similique
            nam itaque.
          </p>

          <div css={counterContainer}>
            <button css={counterButton} onClick={decreaseCartCount}>
              -
            </button>

            <input
              type="text"
              value={itemCount}
              css={counterInput}
              onChange={e => tempCountChange(e)}
            />
            <button css={counterButton} onClick={increaseCartCount}>
              +
            </button>
          </div>
          <p>
            Available in additional colors:<strong> {color}</strong>
          </p>

          <button disabled={!countUpdated} css={productButton} onClick={updateCart}>
            Update Cart
          </button>
        </div>
      </div>
      <div css={reviewContainer}>
        <h2>Reviews</h2>
        <StarRating
          size={15}
          count={5}
          innerRadius={20}
          activeColor={"#000"}
          isReadOnly
          initialRating={starrating}
        />
        <p>{review}</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iusto
          placeat consequatur voluptas sit mollitia ratione autem, atque sequi
          odio laborum, recusandae quia distinctio voluptatibus sint, quae
          aliquid possimus exercitationem.
        </p>
      </div>
      <Featured />
    </div>
  );
};

const viewItemContainer = css`
  width: 80vw;
  margin-left: 7vw;
  margin-top: 75px;
  display: grid;
  grid-template-columns: 20% 50%;
  grid-column-gap: 5%;
  justify-content: center;
`;

const imageContainer = css``;

const detailsContainer = css`
  * {
    margin-bottom: 20px;
  }
`;
const productPrice = css`
  line-height: 1.4;
  word-spacing: 1px;
  color: #d96528;
`;

const productButton = css`
    background-color:#d96528;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    border:none;
    height:40px;
    width:120px;
    :hover{
    background-color:#c14103;}
    :disabled{
    background-color:#eee;
    }
    `;

const reviewContainer = css`
  width: 80vw;
  margin-left: 10vw;
  * {
    margin-bottom: 20px;
  }
`;

const counterContainer = css`
  display: flex;
`;

const counterButton = css`
  width: 45px;
  height: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-weight: 700;
  background-color: #000;
  border: none;

`;

const counterInput = css`
  width: 65px;
  height: 45px;
  margin: 0px 10px;
  text-align: center;
  font-size: 1.5rem;
`;

export default ViewItem;
