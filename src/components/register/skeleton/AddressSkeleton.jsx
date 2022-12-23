import { Stack, Skeleton } from "@mui/material";
import React from "react";

const AddressSkeleton = () => {
  return (
    <Stack spacing={3} justifyContent="space-evenly" direction="row" mt={2} mb={2}>
      <Skeleton variant="rectangular" width="11em" height="2.2em" />
      <Skeleton variant="rectangular" width="11em" height="2.2em" />
      <Skeleton variant="rectangular" width="11em" height="2.2em" />
    </Stack>
  );
};

export default AddressSkeleton;
