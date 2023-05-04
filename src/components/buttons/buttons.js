import "../../css/buttons/buttons.css";
import * as reactComponent from "@mui/material";
const Button = ({ nameButton, background, colorText }) => {
  return (
    <div className="div-buttons">
      <reactComponent.Button
        className="btn-main"
        style={{
          background: background, color: colorText
        }}
        variant="contained"
      >
        {nameButton}
      </reactComponent.Button>
    </div>
  );
};

export default Button;
