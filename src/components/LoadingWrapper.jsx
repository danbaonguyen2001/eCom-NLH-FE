import React from "react";
import "../sass/_loader.scss";
import logo from "../assets/images/icon.png";
import { LinearProgress, Box, Typography } from "@material-ui/core";
import { useState } from "react";
// Loader
function Loader(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
// Children
const Children = ({ children }) => <>{children}</>;
const LoadingWrapper = ({ children }) => {
  const [isFinished, setIsFinished] = useState(false);
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev > 0) {
          setIsFinished(true);
          clearInterval(timer);
          return 100;
        } else return prev + 50;
      });
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return isFinished ? (
    <Children>{children}</Children>
  ) : (
    <Loader value={progress} />
  );
};

export default LoadingWrapper;
