import "../../css/design/NavLeft.css"
import ButtonNavLeft from "../buttons/ButtonNavLeft";

const NavLeft = () => {
    return (
        <div className="nav-left-btns">
            <ButtonNavLeft nameButton="HOME" router="/"/>
            <ButtonNavLeft nameButton="PUBLICACIONES" router="/user-posts"/>
            <ButtonNavLeft nameButton="ESTRENOS" />
            <ButtonNavLeft nameButton="POPULARES" router="/most-popularity" />
            <ButtonNavLeft nameButton="EN EMISIÓN" />
            <ButtonNavLeft nameButton="PERFIL" />
            <ButtonNavLeft nameButton="LOGOUT" />
        </div>
    )
}

export default NavLeft;