import "../../css/buttons/buttons.css";
import * as reactComponent from "@mui/material";
const Button = ({
  nameButton,
  background,
  colorText,
  sizeWidth,
  sizeHeight,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <div className="div-buttons">
      <reactComponent.Button
        className="btn-main"
        style={{
          background: background,
          color: colorText,
          width: sizeWidth,
          height: sizeHeight,
        }}
        variant="contained"
        onClick={handleClick}
      >
        {nameButton}
      </reactComponent.Button>
    </div>
  );
};

export default Button;
