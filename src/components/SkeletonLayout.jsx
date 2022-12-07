import { Stack } from "@mui/material";
import React from "react";
import Skeleton from "react-loading-skeleton";

const SkeletonLayout = () => {
  return (
    <React.Fragment>
      {/* // HEADER */}
    <Stack width="100%" alignItems="center" justifyContent="center">

      <Skeleton style={{ width: "1200px" }}></Skeleton>
      <Skeleton circle style={{ width: "60px",height:"60px" }}></Skeleton>

      <Skeleton style={{ width: "1200px", borderRadius:"8px" }}></Skeleton>

    </Stack>

      {/* // BODY */}
      {/* // FOOTER */}
    </React.Fragment>
  );
};

export default SkeletonLayout;
