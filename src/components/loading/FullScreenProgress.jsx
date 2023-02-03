import { Box, CircularProgress } from "@mui/material";
import React from "react";

const FullScreenProgress = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        overflow: "hidden",
        "&::after": {
          content: `'""'`,
          display: "block",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 98,
          background: "white",
          opacity: 0.6,
        },
      }}
    >
      <CircularProgress style={{width: "70px", height: "70px"}} sx={{ zIndex: 99  }} />
    </Box>
  );
};

export default FullScreenProgress;
