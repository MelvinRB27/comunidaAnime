import { Routes, Route } from "react-router-dom";
//pages
import Home from "../pages/home/home";
import Posts from "../pages/posts/userPosts";
import AllAnime from "../pages/animes/allAnime";
import MostPopularity from "../pages/animes/mostPopular";
import DetailsAnime from "../pages/animes/detailsAnime";
import AnimeInBroadcast from "../pages/animes/animeBroadcast";
import AnimeUpcoming from "../pages/animes/animeUpcoming";
import ResultSearch from "../pages/animes/resultsSearch";
const LinksRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user-posts" element={<Posts />} />
      <Route path="/all-anime/page/:page" element={<AllAnime />} />
      <Route path="/most-popularity" element={<MostPopularity />} />
      <Route path="/details-anime/:id" element={<DetailsAnime />} />
      <Route path="/in-broadcast/page/:page" element={<AnimeInBroadcast />} />
      <Route path="/in-upcoming/page/:page" element={<AnimeUpcoming />} />
      <Route path="/result" element={<ResultSearch />} />
    </Routes>
  );
};

export default LinksRoutes;
