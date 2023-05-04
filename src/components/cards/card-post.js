import * as reactComponent from "@mui/material";
import "../../css/cards/card-post.css";

const CardPost = ({ user, message, imageUser}) => {
    return (
        <div className="container-card-post">
            <div className="card-post-children">
                <reactComponent.Avatar src={imageUser} className="avatar-card-post"/>
                <h4 className="nameUser-card-post">{user}</h4>
                <h4 className="message-card-post">{message}</h4>
                
            </div>
        </div>
    )
}

export default CardPost;