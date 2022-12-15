import React from "react";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const RadioPickup = ({ setPickup }) => {
  return (
    <FormControl
      fullWidth
      sx={{ "& .MuiFormControlLabel-label": { fontSize: 14 }}}
    >
      <FormLabel id="demo-radio-buttons-group-label"
      sx={{fontSize:"1em"}}
       >
        Chọn cách thức nhận hàng
      </FormLabel>
      <RadioGroup
        sx={{
          "& .MuiSvgIcon-root": { fontSize: 22 },

          justifyContent: "space-evenly",
        }}
        row
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue={true}
        name="radio-buttons-group"
        onChange={(e) => {
          setPickup(e.target.value === "true" ? true : false);
        }}
      >
        <FormControlLabel
          value={true}
          control={<Radio />}
          label="Giao hàng tận nơi"
        />
        <FormControlLabel
          value={false}
          control={<Radio />}
          label="Nhận tại cửa hàng"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioPickup;
