import "../../css/buttons/ButtonNavLeft.css";
import * as reactComponent from "@mui/material";
import { Link, useLocation } from "react-router-dom";

const ButtonNavLeft = ({ nameButton, router }) => {
  let location = useLocation();
  return (
    <Link to={router}>
      <div className="container-btn-nav-left">
        <reactComponent.Button className="btn-nav-left" variant="contained">
          {nameButton}
          <div
            className="circle-btn-nav-left"
            style={{
              background: location.pathname === router ? "red" : "black",
            }}
          ></div>
        </reactComponent.Button>
      </div>
    </Link>
  );
};

export default ButtonNavLeft;
