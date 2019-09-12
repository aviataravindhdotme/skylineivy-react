/** @jsx jsx */
import React from "react";
import { css, jsx } from "@emotion/core";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const checkOutSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email"),
  street1: Yup.string().required("Required"),
  street2: Yup.string(),
  city: Yup.string().required("Required"),
  zipCode: Yup.number()
    .min(5, "Invalid zip code")
    .max(5, "Invalid zip code")
    .required("Required"),

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
  return (
    <div css={checkoutContainer}>
      <Formik
        initialValues={{ firstName: "First Name" }}
        onSubmit={() => {
          console.log("Submitted");
        }}
        validationSchema={checkOutSchema}
        render={props => (
          <Form css={formContainer} onSubmit={props.handleSubmit}>
            <div css={formInput}>
              <div css={[inputLabel]}>Your Name </div>
              <Field css={formField} name="name" />
              <ErrorMessage name="name" render={msg => <div>{msg}</div>} />
            </div>

            <div css={formInput}>
              <div css={inputLabel}>Your Email </div>
              <Field css={formField} name="email" />
              <ErrorMessage name="email" render={msg => <div>{msg}</div>} />
            </div>



            <button css={productButton} type="submit">Pay</button>
          </Form>
        )}
      />

      <div>you have 2 items in your cart sub-total shipping total</div>
    </div>
  );
};

const checkoutContainer = css`
  width: 80vw;
  margin-left: 10vw;
  display: grid;
  grid-template-columns: 70% 30%;
  grid-column-gap: 10px;
  justify-content: center;
`;

const formContainer = css`
  width: 80%;
  margin-left: 10%;
  margin-top: 50px;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 20px;
  justify-content: center;
  align-content: center;
  font-size: 1.17rem;
`;
const formInput = css`
margin-bottom:10px;
  display: grid;
  grid-template-columns: 100%;
  grid-row-gap: 10px;
  align-items: center;
  font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    Helvetica Neue, Arial, sans-serif;
`;

const inputLabel = css`
 ;
`;

const requiredField=css`


`

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

export default Checkout;
