//css
import "../../css/selects/CustomSelect.css";

import { useState } from "react";

const CustomSelect = ({ options, title }) => {
  const [selectValue, setSelectValue] = useState("");

  const handleChange = (event) => {
    console.log("sss", event.target.value);
    setSelectValue(event.target.value);
  };
  return (
    <>
      <h3 className="title-select">{title}</h3>
      <select
        id="select-custom-1"
        value={selectValue}
        label="Género"
        onChange={handleChange}
        className="select-custom"
      >
        {options.map(({ value, label }, index) => {
          return (
            <option value={value} key={index}>
              {label}
            </option>
          );
        })}
      </select>
    </>
  );
};

export default CustomSelect;
