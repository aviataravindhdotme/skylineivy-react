/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import AlgoliaPlaces from "algolia-places-react";
import { Link } from "@reach/router";

const userInformationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required")
});

const cardSchema = Yup.object().shape({
  cardNumber1: Yup.number()
    .min(4, "Enter 4 digits here")
    .max(4, "Enter 4 digits here")
    .required("Required"),
  cardNumber2: Yup.number()
    .min(4, "Enter 4 digits here")
    .max(4, "Enter 4 digits here")
    .required("Required"),
  cardNumber3: Yup.number()
    .min(4, "Enter 4 digits here")
    .max(4, "Enter 4 digits here")
    .required("Required"),
  cardNumber4: Yup.number()
    .min(4, "Enter 4 digits here")
    .max(4, "Enter 4 digits here")
    .required("Required"),
  cardCVC: Yup.number()
    .min(3, "Invalid CVC")
    .max(4, "Invalid CVC")
    .required("Required"),
  cardMonth: Yup.number()
    .min(2, "Invalid Month")
    .max(2, "Invalid Month")
    .required("Required"),
  cardYear: Yup.number()
    .min(4, "Invalid Year")
    .max(2, "Invalid Year")
    .required("Required")
});

const Checkout = () => {
  const [loadAddress, setLoadAddress] = useState(false);
  const [loadShippingAddress, setLoadShippingAddress] = useState(false);
  const [loadPaymentInfo, setLoadPaymentInfo] = useState(false);
  const [shippingAddressDifferent, setShippingAddressDifferent] = useState(
    false
  );
  const [billName, setBillName] = useState("");
  const [billEmail, setBillEmail] = useState(" ");
  const [billAddress, setBillAddress] = useState({
    street: "",
    city: "",
    state: "",
    zip: ""
  });

  const handleBillAddressChange = ({
    name,
    administrative,
    city,
    postcode
  }) => {
    setBillAddress({
      street: name,
      city: city,
      state: administrative,
      zip: postcode
    });
    setShippingAddressDifferent(true);

    console.log(billAddress);
  };

  const handleShippingAddress = value => {
    // setLoadShippingAddress(value);
  };

  return (
    <div css={checkoutContainer}>
      <div css={titleRow}>
        <div css={backToCart}>
          <Link to="cart">Back to cart</Link>
        </div>
        <div>
          <h1>Checkout</h1>
        </div>
      </div>
      <div css={userInputsContainer}>
        <Formik
          initialValues={{
            name: billName,
            email: " "
          }}
          onSubmit={(values, actions) => {
            console.log("submit");
            console.log(values);
            setBillName(values.name);
            setBillEmail(values.email);
            setLoadAddress(true);
          }}
          // validationSchema={userInformationSchema}
          render={props => (
            <Form css={formContainer} onSubmit={props.handleSubmit}>
              <div css={formInput}>
                <div css={inputLabel}>Name</div>
                <Field css={formField} name="name" />
              </div>

              <div css={formInput}>
                <div css={inputLabel}>Email</div>
                <Field css={formField} name="email" />
              </div>

              <div css={formInput}>
                <ErrorMessage
                  name="name"
                  render={msg => <div css={inputError}>{msg}</div>}
                />
              </div>

              <div css={formInput}>
                <ErrorMessage
                  name="email"
                  render={msg => <div css={inputError}>{msg}</div>}
                />
              </div>

              <button css={productButton} type="submit">
                Next
              </button>
            </Form>
          )}
        />

        <div css={cartSummary}>
          <div css={summaryHeader}>
            <h2>Order Summary</h2>
          </div>
          <div css={summaryItem}>
            <div css={itemHeader}>Subtotal</div>
            <div css={itemPrice}>$276.00</div>
          </div>
          <div css={summaryItem}>
            <div css={itemHeader}>Shipping</div>
            <div css={itemPrice}>$276.00</div>
          </div>
          <div css={summaryItem}>
            <div css={itemHeader}>Est. Tax</div>
            <div css={itemPrice}>$276.00</div>
          </div>
        </div>

        {loadAddress && (
          <div css={algoliaContainer}>
            <AlgoliaPlaces
              placeholder="Billing Address"
              options={{ type: "address" }}
              onChange={({ suggestion }) => {
                handleBillAddressChange(suggestion);
              }}
            />

            {shippingAddressDifferent && (
              <div css={shippingContainer}>
                Is your shipping address different?{" "}
                <button
                  css={shippingButton}
                  onClick={() => {
                    setLoadShippingAddress(true);
                    setLoadPaymentInfo(false);
                  }}
                >
                  Yes
                </button>
                <button
                  css={shippingButton}
                  onClick={() => {
                    setLoadShippingAddress(false);
                    setLoadPaymentInfo(true);
                  }}
                >
                  No
                </button>
              </div>
            )}

            {loadShippingAddress && (
              <div css={algoliaContainer}>
                <AlgoliaPlaces
                  placeholder="Shipping Address"
                  options={{ type: "address" }}
                  onChange={({ suggestion }) => {
                    handleBillAddressChange(suggestion);
                    setLoadPaymentInfo(true);
                  }}
                />
              </div>
            )}
          </div>
        )}

        {loadPaymentInfo && <div css={formContainer}>Payment Fields</div>}
      </div>
    </div>
  );
};

const checkoutContainer = css`
  width: 80vw;
  margin-left: 10vw;
`;

const titleRow = css`
  margin-top: 50px;
  display: grid;
  grid-template-columns: 40% 60%;
  justify-content: flex-start;
  align-items: center;
`;

const backToCart = css`
  color: #d96529;
  font-size: 0.75rem;
`;

const userInputsContainer = css`
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 10px;
  justify-content: center;
`;

const formContainer = css`
  width: 100%;
  margin-left: 10%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-row-gap: 20px;
  justify-content: center;
  align-content: center;
  font-size: 1.17rem;
`;
const formInput = css`
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 10px;
  align-items: center;
  transition: * 1s;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
`;

const inputLabel = css``;

const requiredField = css``;

const formField = css`
  width: 75%;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 5px;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
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

const inputError = css`
  color: red;
  font-size: 0.75rem;
`;

const algoliaContainer = css`
  width: 80%;
  margin-left: 10%;
  margin-top: 25px;
`;

const shippingContainer = css`
  width: 100%;
  margin-top: 25px;
  display: grid;
  grid-template-columns: 45% 15% 15% 1fr;
  align-items: center;
  font-size: 1.25rem;
`;

const shippingButton = css`
  width: 120px;
  height: 80px;
  margin-right: 25px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: none;
  border: 1px solid #eee;
  font-weight: bold;
  :hover {
    background: #eee;
  }
`;

const cartSummary = css`
  background: #efefef;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  * {
    width: 80%;
  }
`;

const summaryHeader = css`
  text-transform: uppercase;
`;

const summaryItem = css`
  display: grid;
  grid-template-columns: 75% 25%;
`;

const itemHeader = css``;

const itemPrice = css``;

export default Checkout;
