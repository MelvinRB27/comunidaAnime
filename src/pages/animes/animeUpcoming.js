import * as reactComponent from "@mui/material";

//components
import Spinner from "../../components/spinner/spinner";
import CardPremiere from "../../components/cards/card-premiere";
import Pagination from "../../components/pagination/Pagination";

import { GetAnimeInUpcoming } from "../../api/apiAxios";

import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setCurrentPage } from "../../redux/GlobalReduxValue";

const AnimeUpcoming = () => {
  const currentPage = useSelector((state) => state.globalValue.currentPage);
  const loading = useSelector((state) => state.globalValue.loading);

  //tomar el parametro de la URL
  const { page } = useParams();
  const dispatch = useDispatch();
  dispatch(setCurrentPage(page)); //Camniar el currentPage

  const [data, error] = GetAnimeInUpcoming(
    "https://kitsu.io/api/edge/anime",
    currentPage,
    20
  );
  return (
    <>
      <h3 className="title-grop-premiere">En Estreno</h3>
      <reactComponent.Grid
        container
        columns={{ xs: 6, sm: 10, md: 25, xl: 17 }}
      >
        {error === null ? (
          <h3> ERROR</h3>
        ) : loading ? (
          <Spinner leftColor="#5aada8" rightColor="white" />
        ) : (
          data.map(({ id, attributes }, index) => {
            return (
              <reactComponent.Grid
                item
                xs={3}
                sm={4}
                md={6}
                xl={4}
                key={index}
                className="container-grop-premiere"
              >
                <CardPremiere
                  imagePremiere={attributes.posterImage.original}
                  titleAnime={attributes.canonicalTitle}
                  resumeAnime={
                    attributes.description
                      ? attributes.description.substring(0, 40) + "..."
                      : "..."
                  }
                  id={id}
                  date={attributes.createdAt.substring(0, 10)}
                />
              </reactComponent.Grid>
            );
          })
        )}
      </reactComponent.Grid>
      {loading ? <></> : <Pagination />}
    </>
  );
};

export default AnimeUpcoming;
