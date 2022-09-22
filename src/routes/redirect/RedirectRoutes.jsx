import React from "react";
import { Switch, Route } from "react-router-dom";
import OrderSuccess from "../../components/cart/OrderSuccess";
//
const RedirectRoutes = () => {
  return (
    <Switch>
      {/* Order success */}
      <Route exact path={["/redirect/order*","/redirect/order*"]} component={OrderSuccess} />
    </Switch>
  );
};

export default RedirectRoutes;
