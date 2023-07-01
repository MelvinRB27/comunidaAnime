import * as reactComponent from "@mui/material";
import { Link } from "react-router-dom";

import CardPremiere from "./card-premiere";
import { GetAnime } from "../../api/apiAxios";
import Spinner from "../spinner/spinner";
import Button from "../../components/buttons/buttons";

//helpers
import { useSelector } from "react-redux";

const GroupCardPremiereHome = ({ title, countCard, url, path }) => {
  const loading = useSelector((state) => state.globalValue.loading);
  const [data, error] = GetAnime(url);

  return (
    <>
      <h3 className="title-grop-premiere">{title}</h3>
      <reactComponent.Grid
        container
        columns={{ xs: 4, sm: 10, md: 18, xl: 15 }}
      >
        {error === null ? (
          <h3> ERROR</h3>
        ) : loading === 0 ? (
          <Spinner />
        ) : (
          data.map(({ id, attributes }, index) => {
            if (index < countCard) {
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
                      attributes.description.substring(0, 40) + "..."
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
            }
            return <></>;
          })
        )}
      </reactComponent.Grid>
      <Link to={path}>
        <Button
          className="btnSeen"
          nameButton="Ver más"
          background="#5aada8"
          colorText="black"
          sizeWidth="110px"
        />
      </Link>
    </>
  );
};

export default GroupCardPremiereHome;
