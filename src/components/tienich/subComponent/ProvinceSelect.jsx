import React, { useState, useEffect } from "react";
// APi
import { province } from "../../../apis/countryApi";
// Material UI
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const ProvinceSelect = (props) => {
  const { handleChange, province } = props;
  const [countries, setCountries] = useState([]);
  // Country
  useEffect(() => {
    province()
      .then((data) => {
        setCountries(data.data.data);
      })
      .catch((e) => {
        console.log({
          message: "Cant get country list with :" + e.message,
        });
      });
  }, []);
  return (
    <div className="col l-5 c-10 m-10 sc__select">
      <FormControl fullWidth>
        <InputLabel
          id="selectProvince-label"
          style={{ fontSize: "16px", lineHeight: "unset" }}
        >
          Tỉnh thành
        </InputLabel>
        <Select
          MenuProps={{
            classes: {
              list: "sc__list",
            },
          }}
          labelId="selectProvince-label"
          id="selectProvince"
          value={province}
          label="Province"
          onChange={handleChange}
        >
          {countries.map((v, i) => {
            return (
              <MenuItem key={i} classes="sc__item" value={v.ProvinceName}>
                {v.ProvinceName}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
};

export default ProvinceSelect;
