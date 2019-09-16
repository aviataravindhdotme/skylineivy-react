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
  const [custName, setCustName] = useState("");
  const [custEmail, setCustEmail] = useState("");
  const [cardNumber, setcardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [cardCVC, setCardCVC] = useState("");
  const [cardZip, setCardZip] = useState("");

  const handleTextFocus = (values, action) => {
    console.log("text");
  };
  return (
    <div css={checkoutContainer}>
      <div css={titleRow}>
        <div css={linkBack}>
          <Link css={linkText} to="/Cart">
            Back to Cart
          </Link>
        </div>
        <div css={checkoutHeader}>
          <h1>Checkout</h1>
        </div>
      </div>
      <div css={checkoutArea}>
        <div css={formContainer}>
          <hr css={formSeparator} />
          <h2>1. Your Basic Information </h2>
          <Formik
            initialValues={{
              name: custName,
              email: custEmail
            }}
            onSubmit={(values, actions) => {
              console.log("submit");
              console.log(values);
            }}
            validationSchema={userInformationSchema}
            render={props => (
              <Form css={formContainer} onSubmit={props.handleSubmit}>
                <div css={formInput}>
                  <Field
                    css={formField}
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                <div css={formInput}>
                  <ErrorMessage
                    name="name"
                    render={msg => <div css={inputError}>{msg}</div>}
                  />
                </div>
                <div css={formInput}>
                  <Field
                    css={formField}
                    name="email"
                    placeholder="Enter your email "
                  />
                </div>

                <div css={formInput}>
                  <ErrorMessage
                    name="email"
                    render={msg => <div css={inputError}>{msg}</div>}
                  />
                </div>
              </Form>
            )}
          />
          <hr css={formSeparator} />
          <h2>2. Shipping Address </h2>

          <div css={algoliaContainer}>
            <AlgoliaPlaces
              placeholder="Shipping Address"
              options={{ type: "address" }}
              onChange={({ suggestion }) => {
                // handleBillAddressChange(suggestion);
              }}
            />
          </div>
          <hr css={formSeparator} />
          <h2>3. Payment Information </h2>
          <Formik
            initialValues={{
              cardNumber: cardNumber,
              nameOnCard: nameOnCard,
              cardCVC: cardCVC,
              cardZip: cardZip
            }}
            onSubmit={(values, actions) => {
              console.log("submit");
              console.log(values);
            }}
            validationSchema={userInformationSchema}
            render={props => (
              <Form css={formContainer} onSubmit={props.handleSubmit}>
                <div css={formInput}>
                  <Field
                    css={formField}
                    name="cardNumber"
                    placeholder="Card #"
                  />
                </div>
                <div css={formInput}>
                  <ErrorMessage
                    name="cardNumber"
                    render={msg => <div css={inputError}>{msg}</div>}
                  />
                </div>
                <div css={formInput}>
                  <Field
                    css={formField}
                    name="nameOnCard"
                    placeholder="Name on card "
                  />
                </div>

                <div css={formInput}>
                  <ErrorMessage
                    name="nameOnCard"
                    render={msg => <div css={inputError}>{msg}</div>}
                  />
                </div>
                <div css="cardDetailsRow">
                  <div css={formInput}>
                    <Field
                      css={[formField, formFieldShort]}
                      name="cardCVC"
                      placeholder="CVC"
                    />
                  </div>

                  {/*<div css={formInput}>*/}
                  {/*  <ErrorMessage*/}
                  {/*    name="CVC"*/}
                  {/*    render={msg => <div css={inputError}>{msg}</div>}*/}
                  {/*  />*/}
                  {/*</div>*/}

                  <div css={formInput}>
                    <Field
                      css={[formField, formFieldShort]}
                      name="cardZip"
                      placeholder="Card Zip"
                    />
                  </div>

                  {/*<div css={formInput}>*/}
                  {/*  <ErrorMessage*/}
                  {/*    name="cardZip"*/}
                  {/*    render={msg => <div css={inputError}>{msg}</div>}*/}
                  {/*  />*/}
                  {/*</div>*/}
                </div>
              </Form>
            )}
          />
        </div>
        <div css={summaryContainer}>
          <div css={summaryInformation}>
            <div css={summaryHeader}>Order Summary</div>

            <div css={summaryDesc}>
              <div css={summaryItemTitle}>Subtotal</div>
              <div css={summaryItemValue}>$1241.49</div>
            </div>
            <div css={summaryDesc}>
              <div css={summaryItemTitle}>Shipping</div>
              <div css={summaryItemValue}>$1241.49</div>
            </div>
            <div css={summaryDesc}>
              <div css={summaryItemTitle}>Est. Tax</div>
              <div css={summaryItemValue}>$1241.49</div>
            </div>
            <div css={summaryDesc}>
              <div css={[summaryItemTitle, summaryHeader]}>Total</div>
              <div css={[summaryItemValue, summaryHeader]}>$1241.49</div>
            </div>
          </div>
          <button css={productButton}>Place order</button>
        </div>
      </div>
    </div>
  );
};

const cardDetailsRow = css`
  display: grid;
  grid-template-columns: 30% 30% 30%;
`;

const algoliaContainer = css`
  width: 80%;
  margin-left: 40px;
  margin-top: 25px;
`;

const formInput = css``;

const formField = css`
  height: 40px;
  border: 1px solid #999999;
  border-radius: 4px;
  width: 60%;
  margin-left: 40px;
  margin-top: 20px;
  padding-left: 10px;
`;

const formFieldShort = css`
  width: 30%;
`;

const inputError = css`
  color: red;
  font-size: 0.75rem;
  margin-left: 40px;
  margin-top: 10px;
`;

const formSeparator = css`
  border: 1px solid #ccc;
  margin: 30px 0;
`;

const productButton = css`
    background-color:#d96528;
    margin-top:20px;
    color:white;
    display:flex;
    justify-content:center;
    text-transform:uppercase;
    align-items:center;
    border:none;
    height:40px;
    width:100%;
    :hover{
    background-color:#c14103;
    text-decoration:none;
    `;

const summaryHeader = css`
  color: #333333;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 900;
`;

const summaryInformation = css`
  width: 100%;
  padding: 5px 0;
  background: #efefef;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  * {
    width: 80%;
    margin: 5px 0;
  }
`;

const summaryDesc = css`
  display: grid;
  grid-template-columns: 60% 40%;
`;

const summaryItemTitle = css``;

const summaryItemValue = css``;

const summaryContainer = css``;

const formContainer = css``;

const checkoutArea = css`
  width: 90%;

  display: grid;
  grid-template-columns: 70% 28%;
  grid-column-gap: 20px;
`;

const checkoutContainer = css`
  width: 70vw;
  margin-left: 20vw;
`;

const titleRow = css`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const linkBack = css`
  width: 40%;
  font-size: 0.75rem;
  color: #d96529;
`;

const linkText = css`
  font-size: 0.75rem;
  color: #d96529;
`;

const checkoutHeader = css`
  width: 50%;
`;

export default Checkout;
