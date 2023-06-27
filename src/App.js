import "./App.css";

//components
import Nav from "./components/design/Nav";
import NavLeft from "./components/design/NavLeft";
import NavRigth from "./components/design/NavRigth";
import YourComunity from "./components/cards/your-comunity";
//Routes
import LinksRoutes from "./routes/routes";

import ScrollToTop from "react-scroll-to-top";

//helper
import RedirectResutl from "./helpers/redirects/redirectResults";

const App = () => {
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Regresa";
  });

  window.addEventListener("focus", () => {
    document.title = docTitle;
  });

  RedirectResutl();

  return (
    <div className="containerApp">
      <Nav />
      <div style={{ display: "flex" }}>
        <div className="container-left">
          <NavLeft />
          <YourComunity />
        </div>
        <div className="container-center">
          <LinksRoutes />
        </div>
        <div className="container-right">
          <NavRigth />
        </div>
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default App;
