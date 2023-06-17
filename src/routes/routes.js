import { Routes, Route } from "react-router-dom";
//pages
import Home from "../pages/home/home";
import Posts from "../pages/posts/userPosts";
import MostPopularity from "../pages/animes/mostPopular";
import DetailsAnime from "../pages/animes/detailsAnime";
import AnimeInBroadcast from "../pages/animes/animeBroadcast";
import AnimeUpcoming from "../pages/animes/animeUpcoming";

const LinksRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-posts" element={<Posts />} />
      <Route path="/most-popularity" element={<MostPopularity />} />
      <Route path="/details-anime/:id" element={<DetailsAnime />} />
      <Route path="/in-broadcast" element={<AnimeInBroadcast />} />
      <Route path="/in-upcoming" element={<AnimeUpcoming />} />
    </Routes>
  );
};

export default LinksRoutes;
