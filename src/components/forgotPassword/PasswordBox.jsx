import React from "react";
const PrimaryPassword = React.lazy(() =>
  import("../forgotPassword/subcomponent/PrimaryPassword")
);
const SecondPassword = React.lazy(() =>
  import("../forgotPassword/subcomponent/SecondPassword")
);
const PasswordBox = ({
  password,
  setPassword,
  secure,
  setSecure,
  rePassword,
  setRePassword,
}) => {
  return (
    <>
      <PrimaryPassword
        password={password}
        setPassword={setPassword}
        setSecure={setSecure}
        secure={secure}
      />
      <SecondPassword
        password={password}
        rePassword={rePassword}
        setRePassword={setRePassword}
      />
    </>
  );
};

export default PasswordBox;
