import "./App.css";

//components
import Nav from "./components/design/Nav";
import NavLeft from "./components/design/NavLeft";
import YourComunity from "./components/cards/your-comunity";
// import CustomSelect from "./components/selects/CustomSelect";
//Routes
import LinksRoutes from "./routes/routes";

import ScrollToTop from "react-scroll-to-top";

const App = () => {
  let docTitle = document.title;
  window.addEventListener("blur", () => {
    document.title = "Regresa";
  });

  window.addEventListener("focus", () => {
    document.title = docTitle;
  });

  // const options = [
  //   { value: "action", label: "Acción" },
  //   { value: "violence", label: "Violencia" },
  //   { value: "children", label: "Children" },
  //   // Agrega más opciones según tus necesidades
  // ];
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
          <div>{/* <CustomSelect options={options} title="Género" /> */}</div>
        </div>
      </div>
      <ScrollToTop smooth />
    </div>
  );
};

export default App;
