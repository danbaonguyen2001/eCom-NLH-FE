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
import "../sass/layout/_layout.scss";
import LoadingPage from "../pages/LoadingPage";
//
import { store } from "../redux/stores";
import { Provider } from "react-redux";
import ChatBot from "./ChatBot";
import AddCompareProduct from "./AddCompareProduct";
import AuthMiddleware from "../routes/middleware/Auth";
//
let persistor = persistStore(store);
const Layout = () => {
  return (
    <React.Suspense fallback={<LoadingPage />}>
      <Provider store={store}>
        <PersistGate  persistor={persistor}>
          {/* <LoadingPage /> */}
          <BrowserRouter>
            <ToastContainer />
            <Route
              render={(props) => (
                <div>
                  <Header {...props} />
                  <div className="container grid">
                    <div className="main">
                      <AuthMiddleware>
                      <Routes />
                      </AuthMiddleware>
                    </div>
                  </div>
                  <ChatBot />
                  <AddCompareProduct />
                  <Footer />
                </div>
              )}
            />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </React.Suspense>
  );
};

export default Layout;
