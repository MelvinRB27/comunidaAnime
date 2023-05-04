import "./App.css";
import { Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/home/home";
import Posts from "./pages/posts/userPosts";
import MostPopularity from "./pages/animes/mostPopular";
//components
import Nav from "./components/design/Nav";
import NavLeft from "./components/design/NavLeft";
import YourComunity from "./components/cards/your-comunity";
const App = () => {
  return (
    <div className="containerApp">
      <Nav />
      <div style={{display: 'flex'}}>
        <div style={{/*background: 'red',*/ width: '17%'}}>
          <NavLeft />
          <YourComunity />
        </div>
        <div style={{/*background: 'green',*/ width: '70%'}}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/user-posts" element={<Posts />} />
            <Route path="/most-popularity" element={<MostPopularity />} />
          </Routes>
        </div>
        <div style={{/*background: 'black',*/ width: '13%'}}>
          <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
