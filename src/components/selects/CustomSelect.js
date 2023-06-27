//css
import "../../css/selects/CustomSelect.css";

const CustomSelect = ({ options, title, disabled = false, onChange }) => {
  const handleChange = (event) => {
    if (onChange) {
      onChange(event.target.value);
    }
  };
  return (
    <>
      <h3 className="title-select">{title}</h3>
      <select
        disabled={disabled}
        id="select-custom-1"
        label="Género"
        onChange={handleChange}
        className="select-custom"
      >
        <option value="null">Todos</option>;
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
