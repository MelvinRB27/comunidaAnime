import "../../css/design/NavLeft.css";
import ButtonNavLeft from "../buttons/ButtonNavLeft";
// import { useSelector } from "react-redux";
const NavBar = ({ nameClass }) => {
  // const currentPage = useSelector((state) => state.globalValue.currentPage);

  return (
    <div className={nameClass}>
      <ButtonNavLeft nameButton="HOME" router="/" />
      {/* <ButtonNavLeft nameButton="PUBLICACIONES" router="/user-posts" /> */}
      <ButtonNavLeft nameButton="TODOS" router={"/all-anime/page/1"} />
      <ButtonNavLeft nameButton="ESTRENOS" router={"/in-upcoming/page/1"} />
      <ButtonNavLeft nameButton="POPULARES" router={"/most-popularity"} />
      <ButtonNavLeft nameButton="EN EMISIÓN" router={"/in-broadcast/page/1"} />
      {/* <ButtonNavLeft nameButton="PERFIL" /> */}
      {/* <ButtonNavLeft nameButton="LOGOUT" /> */}
    </div>
  );
};

export default NavBar;
