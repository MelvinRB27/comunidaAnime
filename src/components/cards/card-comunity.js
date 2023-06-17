import "../../css/cards/card-comunity.css";
import { Link } from "react-router-dom";

const CardComunity = ({ nameComunity, imageComunity, id }) => {
  return (
    <div className="container-card-comunity">
      <Link to={"/details-anime/" + id}>
        <div className="container-children-card-comunity">
          <img
            alt="cover"
            src={imageComunity}
            className="avatar-card-comunity"
          />
          <h4 className="nameComunity-card-comunity">{nameComunity}</h4>
        </div>
      </Link>
    </div>
  );
};

export default CardComunity;
