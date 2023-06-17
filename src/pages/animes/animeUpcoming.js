import * as reactComponent from "@mui/material";

//components
import Spinner from "../../components/spinner/spinner";
import CardPremiere from "../../components/cards/card-premiere";
import Pagination from "../../components/pagination/Pagination";

import { GetAnimeInUpcoming } from "../../api/apiAxios";

import { useSelector } from "react-redux";

const AnimeUpcoming = () => {
  const currentPage = useSelector((state) => state.globalValue.currentPage);
  const loading = useSelector((state) => state.globalValue.loading);

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
        columns={{ xs: 4, sm: 10, md: 18, xl: 15 }}
      >
        {error === null ? (
          <h3> ERROR</h3>
        ) : loading ? (
          <Spinner />
        ) : (
          data.map(({ id, attributes, index }) => {
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
                  resumeAnime={attributes.description.substring(0, 100) + "..."}
                  id={id}
                  //   date={attributes.createdAt}
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
