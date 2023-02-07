import { Grid, Skeleton, Stack } from "@mui/material";
import React from "react";

const SkeletonProduct = () => {
  return (
    <Grid item xs={12 / 5}>
      <Skeleton
        variant="rectangular"
        width="100%"
        height="35rem"
        sx={{ borderRadius: "4px" }}
      />
    </Grid>
  );
};
const SkeletonProducts = () => {
  return (
    <Stack
      data-value="Loading..."
      direction="column"
      spacing={3}
      alignItems="center"
      sx={{
        mb: 3,
        position: "relative",
        "&:after": {
          content: `attr(data-value)`,
          color: "black",
          display: "block",
          position: "absolute",
          textAlign: "center",
          top: "30%",
          left: "0",
          width: "100%",
          height: "100%",
        },
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        spacing={4}
      >
        <SkeletonProduct />
        <SkeletonProduct />
        <SkeletonProduct />
        <SkeletonProduct />
        <SkeletonProduct />
      </Grid>
      <Skeleton
        variant="rectangular"
        width="24%"
        height="4rem"
        sx={{ borderRadius: "2%" }}
      />
    </Stack>
  );
};

export default SkeletonProducts;
