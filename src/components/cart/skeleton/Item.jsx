import {  Stack, Skeleton } from "@mui/material";
import React from "react";

const Item = () => {
  return (
      <Stack sx={{ width: "100%", padding: 2 }} direction="row" spacing={4}>
        <Skeleton
          component="div"
          variant="rectangular"
          width="140px"
          height="140px"
        />
        <Stack sx={{ width: "60%",justifyContent:"space-around" }}>
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Skeleton variant="text" />
          <Stack
            sx={{ width: "60%" }}
            direction="row"
            spacing={3}
          >
            <Skeleton
              component="div"
              variant="rectangular"
              width="106px"
              height="30px"
            />
            <Skeleton
              component="div"
              variant="rectangular"
              width="61px"
              height="30px"
            />
          </Stack>
        </Stack>
      </Stack>
  );
};

export default Item;
