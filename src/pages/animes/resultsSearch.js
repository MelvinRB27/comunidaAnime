import * as reactComponent from "@mui/material";

//components
import Spinner from "../../components/spinner/spinner";
import CardPremiere from "../../components/cards/card-premiere";
import Pagination from "../../components/pagination/Pagination";

//helpers
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { setCurrentPage } from "../../redux/GlobalReduxValue";

import { GetAnimeByParamas } from "../../api/apiAxios";

const ResultSearch = () => {
  //tomar el parametro de la URL
  const { page } = useParams();
  const { search } = useParams();
  const dispatch = useDispatch();
  dispatch(setCurrentPage(page)); //Camniar el currentPage

  const currentPage = useSelector((state) => state.globalValue.currentPage);
  const [valorGlobal] = GetAnimeByParamas(
    "https://kitsu.io/api/edge/anime",
    currentPage,
    search
  );

  // const valorGlobal = useSelector((state) => state.globalValue.animeSearch);
  const loading = useSelector((state) => state.globalValue.loading);

  // let val = valorGlobal.length > 0 ? valorGlobal : null;

  // useEffect(() => {
  //   setDateAnime(val);
  // }, [val]);

  return (
    <>
      <h3 className="title-grop-premiere">Resultado</h3>
      <reactComponent.Grid
        container
        columns={{ xs: 4, sm: 10, md: 18, xl: 15 }}
      >
        {loading ? (
          <Spinner leftColor="#5aada8" rightColor="white" />
        ) : valorGlobal.length > 0 ? (
          valorGlobal.map(({ id, attributes }, index) => {
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
                  titleAnime={attributes.canonicalTitle}
                  resumeAnime={
                    attributes.description
                      ? attributes.description.substring(0, 40) + "..."
                      : "..."
                  }
                  date={attributes.createdAt.substring(0, 10)}
                  imagePremiere={
                    attributes.posterImage
                      ? attributes.posterImage.original
                      : attributes.coverImage.original
                  }
                  id={id}
                />
              </reactComponent.Grid>
            );
          })
        ) : (
          <h3 style={{ width: "100%", textAlign: "center", color: "white" }}>
            Sin resultados
          </h3>
        )}
      </reactComponent.Grid>
      {loading ? <></> : <Pagination />}
    </>
  );
};

export default ResultSearch;
