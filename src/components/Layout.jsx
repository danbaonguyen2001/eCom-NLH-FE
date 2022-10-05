import React from "react";

import { BrowserRouter, Route } from "react-router-dom";
import Routes from "../routes/Routes";
import Footer from "./Footer";
import Header from "./Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

//
import { store } from "../redux/stores";
import { Provider } from "react-redux";
//
let persistor = persistStore(store);
const Layout = () => {
  return (
    <React.Suspense fallback={<h1>Loading ....</h1>}>
      <Provider store={store}>
        <PersistGate loading={<h1>Loading ...</h1>} persistor={persistor}>
          <BrowserRouter>
            <ToastContainer />
            <Route
              render={(props) => (
                <div>
                  <Header {...props} />
                  <div className="container grid">
                    <div className="main wide">
                      <Routes />
                    </div>
                  </div>
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
