import React from "react";
import ReactDOM from "react-dom";
import { Container } from "react-bootstrap";
import Header from "./components/header";
import { Global, css } from "@emotion/core";
import NavBar from "./components/navigation";
import Jumbotron from "react-bootstrap/Jumbotron";
import Main from "./components/main";
import Banner from "./components/banner";
import Footer from "./components/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import { CartProvider } from "../src/Context";

class App extends React.Component {
  render() {
    return (
      <CartProvider>
        <div>
          <Global
            styles={css`
              html,
              body {
                margin: 0;
                padding-top: 25px;
                width: 100vw;
                // overflow-x:hidden;
                font-family: Montserrat, -apple-system, BlinkMacSystemFont,
                  Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
                font-size: 16px;
                line-height: 1.4;
                word-spacing: 1px;
              }
              h1,
              h2,
              h3 {
                font-family: "PT Serif", -apple-system, BlinkMacSystemFont,
                  Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
                font-weight: 400;
                font-size: 1.17rem;
              }

              h1 {
                font-size: 40px;
              }
              h2 {
                font-size: 1.5rem;
              }
              .center-align {
                display: flex;
                justify-content: center;
                align-items: center;
              }
              link,
              a {
                font-family: Montserrat, -apple-system, BlinkMacSystemFont,
                  Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif;
                text-decoration: none;
                text-transform: uppercase;
                color: black;
                font-size: 0.75rem;
              }
              .navItemActive {
                color: #d96528;
              }
              .aviStuff {
                width: 100vw;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 40px;
                color: white;
                background: black;
                font-size: 1rem;
              }
            `}
          />
          <div>
            <Header />
            <NavBar />
            <ErrorBoundary>
              <Main />
            </ErrorBoundary>
            <Banner />
            <Footer />
            <div className="aviStuff">Demo built by avi@aravindh.me</div>
          </div>
        </div>
      </CartProvider>
    );
  }
}

export default App;
