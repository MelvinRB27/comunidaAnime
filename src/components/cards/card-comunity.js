import "../../css/cards/card-comunity.css";
import * as reactComponent from "@mui/material";

const CardComunity = ({ nameComunity, imageComunity, members }) => {
  return (
    <div className="container-card-comunity">
        <div className="container-children-card-comunity">
            <reactComponent.Avatar src={imageComunity} className="avatar-card-comunity"/>
            <h4 className="nameComunity-card-comunity">{nameComunity}</h4>
            <h4 className="members-card-comunity">{members}</h4>
        </div>
    </div>
  );
};

export default CardComunity;
