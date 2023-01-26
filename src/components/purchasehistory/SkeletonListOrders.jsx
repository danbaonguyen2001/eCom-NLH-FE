import { Grid, Stack, Skeleton, Divider, Typography } from "@mui/material";
import React from "react";

const SkeletonOrderItem = (props) => {
  const GridCenter = ({ children, ...props }) => (
    <Grid
      {...props}
      item
      sx={{ display: "flex", textAlign: "center", m: "0.5rem 0" }}
      justifyContent="center"
      alignItems="center"
    >
      {children}
    </Grid>
  );
  return (
    <>
      <Grid
        sx={{ opacity: props.variant === "declined" ? "0.5" : "1" }}
        container
        alignItems="center"
        justifyContent="center"
      >
        <GridCenter xs={2}>
          <Skeleton variant="text" width="12rem" />
        </GridCenter>
        <GridCenter xs={4}>
          <Stack
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Stack>
              <Skeleton
                variant="rectangular"
                sx={{ borderRadius: "4px" }}
                width="8rem"
                height="8rem"
              />
            </Stack>
            <Stack>
              <Skeleton variant="text" width="9rem" />
              <Skeleton variant="text" width="7rem" />
            </Stack>
          </Stack>
        </GridCenter>
        <GridCenter xs={2}>
          <Skeleton
            variant="text"
            width="7rem"
          />
        </GridCenter>
        <GridCenter xs={3}>
          <Skeleton variant="text" width="10rem" />
        </GridCenter>
        <GridCenter xs={1}>
          <Typography
            variant="h6"
            sx={{
              color: props.variant !== "declined" ? "green" : "red",
              textTransform: "capitalize",
            }}
          >
            {props.variant}
          </Typography>
        </GridCenter>
      </Grid>
      <Divider />
    </>
  );
};
const SkeletonListOrders = () => {
  return (
    <Stack>
      <SkeletonOrderItem variant="accepted" />
      <SkeletonOrderItem variant="accepted" />
      <SkeletonOrderItem variant="declined" />
      <SkeletonOrderItem variant="declined" />
    </Stack>
  );
};

export default SkeletonListOrders;
