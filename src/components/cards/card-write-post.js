import * as reactComponent from "@mui/material";
import Button from "../buttons/buttons";
import "../../css/cards/card-write-post.css";

const CardWritePost = () => {
  return (
    <div className="container-card-write">
      <div className="container-input">
        <h3 className="text-input-post">
          Qué deseas compartir con la comunidad hoy?
        </h3>
        <reactComponent.TextareaAutosize
          minRows="5"
          maxRows="5"
          className="input-post"
        ></reactComponent.TextareaAutosize>
        <div className="btn-post">
          <Button nameButton="Publicar" />
        </div>
      </div>
    </div>
  );
};

export default CardWritePost;
