import "../../css/design/NavLeft.css";
import ButtonNavLeft from "../buttons/ButtonNavLeft";

const NavLeft = () => {
  return (
    <div className="nav-left-btns">
      <ButtonNavLeft nameButton="HOME" router="/" />
      {/* <ButtonNavLeft nameButton="PUBLICACIONES" router="/user-posts" /> */}
      <ButtonNavLeft nameButton="ESTRENOS" router="/in-upcoming" />
      <ButtonNavLeft nameButton="POPULARES" router="/most-popularity" />
      <ButtonNavLeft nameButton="EN EMISIÓN" router="/in-broadcast" />
      {/* <ButtonNavLeft nameButton="PERFIL" /> */}
      {/* <ButtonNavLeft nameButton="LOGOUT" /> */}
    </div>
  );
};

export default NavLeft;
