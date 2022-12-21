import React, { useEffect } from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import styled from "styled-components";
const ButtonPayPalWrap = ({ currency, amount, handlerOrder }) => {
  const StyleWrap = styled.div`
    & div {
        display:flex;
        justify-content:center;
        align-items:center;
    }
  `;
  // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  // This is the main reason to wrap the PayPalButtons in a new component
  const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  useEffect(() => {
    dispatch({
      type: "resetOptions",
      value: {
        ...options,
        currency: currency,
      },
    });
  }, [currency]);

  return (
    <StyleWrap>
      <PayPalButtons
        disabled={false}
        forceReRender={[amount, currency]}
        fundingSource={undefined}
        createOrder={(data, actions) => {
          return actions.order
            .create({
              purchase_units: [
                {
                  amount: {
                    currency_code: currency,
                    value: amount,
                  },
                },
              ],
            })
            .then((orderId) => {
              console.log(orderId);
              console.log(data);

              return orderId;
            });
        }}
        onApprove={function (data, actions) {
          return actions.order.capture().then((res) => {
            handlerOrder(res);
          });
        }}
      />
    </StyleWrap>
  );
};

export default ButtonPayPalWrap;
