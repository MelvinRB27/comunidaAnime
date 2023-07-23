import * as reactComponent from "@mui/material";

//components
import Spinner from "../../components/spinner/spinner";
import CardPremiere from "../../components/cards/card-premiere";

import { GetAnime } from "../../api/apiAxios";
const MostPopularity = () => {
  const [data, error] = GetAnime("https://kitsu.io/api/edge/trending/anime");
  return (
    <>
      <h3 className="title-grop-premiere">Los animes más populares</h3>
      <reactComponent.Grid
        container
        columns={{ xs: 4, sm: 10, md: 18, xl: 15 }}
      >
        {error === null ? (
          <h3> ERROR</h3>
        ) : data.length === 0 ? (
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
                  resumeAnime={attributes.description.substring(0, 40) + "..."}
                  id={id}
                  date={attributes.createdAt.substring(0, 10)}
                />
              </reactComponent.Grid>
            );
          })
        )}
      </reactComponent.Grid>
    </>
  );
};

export default MostPopularity;
