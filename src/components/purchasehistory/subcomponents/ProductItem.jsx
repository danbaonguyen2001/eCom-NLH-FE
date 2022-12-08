import {
  Box,
  Divider,
  List,
  Stack,
  Accordion,
  AccordionSummary,
  Typography,
  Grid,
} from "@mui/material";
import { ExpandMore as ExpandMoreIcon } from "@material-ui/icons";
import React from "react";
import { toVND } from "../../../utils/format";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ListOrderInfo = React.lazy(() =>
  import("../../cart/subComponent/OrderInfo/ListOrderInfo")
);

const ProductItem = ({ item, index }) => {
  const textSx = {
    margin: "0 auto",
    textAlign: "center",
    width: "140px",
    "& .MuiListItemText-root": {},
    "& .MuiListItemText-primary": {},
    "& .MuiListItemText-secondary": {},
  };
  const GridItem = (props) => (
    <Grid justifyContent="center" alignItems="center" flexShrink={1} item xs>
      <ListOrderInfo wrapSx={props.wrapSx} {...props} />
    </Grid>
  );
  return (
    <Accordion defaultExpanded={true} >
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6" fontWeight="bold">
          {item?.name || "Đang cập nhật"}
        </Typography>
      </AccordionSummary>

      <Stack mr={2} pb={2} justifyContent="space-between" direction="row">
        <Stack direction="row" spacing={2}>
        {/* LEFT */}
        {/* IMAGE */}
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            minWidth={"30%"}
          >
            <LazyLoadImage
              style={{ width: "140px" }}
              src={item?.image}
              alt="loading"
            />
          </Box>

          {/* PRODUCT INFO */}
          <Grid
            sx={{ minWidth:"70%",minHeight:"200px", border: "1px solid #ccc", borderRadius: "4px", mr: 2 }}
            container
            wrap="wrap"
          >
            <GridItem
              wrapSx={textSx}
              primary="Màu: "
              secondary={item?.info?.colorName || "Đang cập nhật"}
            />
            <GridItem
              wrapSx={textSx}
              primary="Loại: "
              secondary={item?.info?.optionName || "Đang cập nhật"}
            />{" "}
            <GridItem
              wrapSx={textSx}
              primary="Số lượng: "
              secondary={item?.qty || "Đang cập nhật"}
            />{" "}
            <GridItem
              wrapSx={textSx}
              primary="Giá niêm yết: "
              secondary={toVND(item?.price) || "Đang cập nhật"}
            />
            <GridItem
              wrapSx={textSx}
              primary="Thương hiệu: "
              secondary={item?.manufacturer?.name || "Đang cập nhật"}
            />
            <GridItem
              wrapSx={textSx}
              primary="Hệ điều hành: "
              secondary={item?.subcategory?.categoryName || "Đang cập nhật"}
            />
            <Grid
              item
              width="100%"
              justifyContent="space-between"
              alignItems="center"
              display="flex"
            >
              <Typography ml={2} variant="subtitle1">
                {item?.promoteDescription || "Không có khuyến mãi"}
              </Typography>
              {/* RIGHT */}
              {/* ITEM PRICE */}
              <Typography color="blue" variant="body" mr={2} textAlign="right" minWidth="200px" fontWeight="bold">
                {toVND(item?.price) || "Đang cập nhật"}
              </Typography>
            </Grid>
          </Grid>
        </Stack>
      </Stack>
    </Accordion>
  );
};

export default ProductItem;
