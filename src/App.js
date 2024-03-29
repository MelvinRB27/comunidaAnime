import "./App.css";

//components
import Nav from "./components/design/Nav";
import NavBar from "./components/design/NavBar";
import NavRigth from "./components/design/NavRigth";
import YourComunity from "./components/cards/your-comunity";
//Routes
import LinksRoutes from "./routes/routes";

import ScrollToTop from "react-scroll-to-top";
import { useLocation } from "react-router-dom";

//helper
// import RedirectResutl from "./helpers/redirects/redirectResults";

const App = () => {
  let location = useLocation();

  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Regresa";
  });

  window.addEventListener("focus", () => {
    document.title = docTitle;
  });

  const ScreenWidth = window.screen.width <= 1000;
  // RedirectResutl();

  const isPageAll = location.pathname.includes("/all-anime/page/");
  return (
    <div className="containerApp">
      <Nav />
      {ScreenWidth ? <NavBar nameClass={"nav-cell-btns"} /> : null}

      <div className="containerApp-children">
        {!ScreenWidth ? (
          <div className="container-left">
            <NavBar nameClass={"nav-left-btns"} />
            <YourComunity />
          </div>
        ) : null}

        <div className="container-center">
          <LinksRoutes />
        </div>

        {isPageAll ? (
          <div className="container-right">
            <NavRigth />
          </div>
        ) : null}
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default App;
