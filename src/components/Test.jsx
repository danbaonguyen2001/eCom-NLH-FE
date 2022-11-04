import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../routes/Routes";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { Audio } from "react-loader-spinner";

//
import { store } from "../redux/stores";
import { Provider } from "react-redux";
import ChatBot from "./ChatBot";
import AddCompareProduct from "./AddCompareProduct";
import ProductDetail from "../pages/ProductDetail";
//
let persistor = persistStore(store);
const Layout = () => {
  return (
    <React.Suspense fallback={<h1>Loading ....</h1>}>
      <Provider store={store}>
        <PersistGate loading={<h1>Loading ...</h1>} persistor={persistor}>
          <BrowserRouter>
            <ToastContainer />
            <ProductDetail />
            <ChatBot />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.Suspense>
  );
};

export default Layout;
