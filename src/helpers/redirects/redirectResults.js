import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RedirectResutl = () => {
  const animeSearch = useSelector((state) => state.globalValue.animeSearch);
  const navigate = useNavigate();

  useEffect(() => {
    animeSearch.length > 0 && animeSearch !== "empty"
      ? navigate("/result", { replace: true })
      : animeSearch === "empty"
      ? navigate("/all-anime/page/1", { replace: true })
      : navigate();
  }, [navigate, animeSearch]);
};

export default RedirectResutl;
