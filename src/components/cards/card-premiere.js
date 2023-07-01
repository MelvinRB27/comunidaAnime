// import * as reactComponent from "@mui/material";
import "../../css/cards/card-premiere.css";

import { Link } from "react-router-dom";

const CardPremiere = ({ titleAnime, resumeAnime, date, imagePremiere, id }) => {
  return (
    <div className="container-card-premiere">
      <div className="card-premiere">
        <Link to={"/details-anime/" + id}>
          <img
            alt="cover"
            src={imagePremiere}
            className="avatar-card-premiere"
            variant="square"
          />
        </Link>
        <div style={{ textAlign: "center", margin: "auto", padding: "5px" }}>
          <h3 className="title-premiere">{titleAnime}</h3>
          <h3 className="resume-premiere">{resumeAnime}</h3>
          <h3 className="date-premiere">{date}</h3>
        </div>
      </div>
    </div>
  );
};

export default CardPremiere;
