import React from "react";

const Select = ({ name, id, options }) => {
  console.log(options);
  return (
    <div style={{ align: "center" }}>
      <label class="select" for={id}>
        <select id={id} required="required">
          {/* <option value="none" disabled="disabled" selected="selected">
            {name}
          </option> */}
          <option value="none" selected="selected">
            {name}
          </option>

          {options.map((option, i) => (
            <option key={i} value={option.name}>
              {option.name}
            </option>
          ))}
        </select>

        <svg>
          <use href="#select-arrow-down"></use>
        </svg>
      </label>

      <svg class="sprites">
        <symbol id="select-arrow-down" viewbox="0 0 10 6">
          <polyline points="1 1 5 5 9 1"></polyline>
        </symbol>
      </svg>
    </div>
  );
};

export default Select;
