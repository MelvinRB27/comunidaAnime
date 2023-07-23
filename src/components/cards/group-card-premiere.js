import CardPremiere from "../../components/cards/card-premiere";
import * as reactComponent from "@mui/material";
import GetAnime from "../../api/apiAxios";
import Spinner from "../spinner/spinner";
// const list = [
//     {
//       title: "Naruto Shippuden",
//       resumeAnime:
//         "Nuevos capítulos El regreso de Sasuke a la aldea, en busca de venganza.",
//       date: "Gran estreno este 20/05/23",
//       imagePremiere:
//         "https://m.media-amazon.com/images/M/MV5BMDI3ZDY4MDgtN2U2OS00Y2YzLWJmZmYtZWMzOTM3YWFjYmUyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg",
//     },
//     {
//       title: "Jujutsu Kaisen",
//       resumeAnime:
//         "Nuevos capítulos El regreso de Sasuke a la aldea, en busca de venganza.",
//       date: "Gran estreno este 20/05/23",
//       imagePremiere:
//         "https://f.ptcdn.info/714/079/000/rpe1wu3xrz138GtjLrST-o.jpg",
//     },
//     {
//       title: "Fullmetal",
//       resumeAnime:
//         "Nuevos capítulos El regreso de Sasuke a la aldea, en busca de venganza.",
//       date: "Gran estreno este 20/05/23",
//       imagePremiere:
//         "https://m.media-amazon.com/images/M/MV5BMmI5NmFlZjItOTBhOC00NGI0LWIyNDAtODJhOTJjZDEyMTYyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
//     },
//     {
//       title: "Demon Slayer",
//       resumeAnime:
//         "Nuevos capítulos El regreso de Sasuke a la aldea, en busca de venganza.",
//       date: "Gran estreno este 20/05/23",
//       imagePremiere:
//         "https://demonslayer-hinokami.sega.com/img/purchase/digital-standard.jpg",
//     },
//     {
//       title: "Attack on Titan",
//       resumeAnime:
//         "Nuevos capítulos El regreso de Sasuke a la aldea, en busca de venganza.",
//       date: "Gran estreno este 20/05/23",
//       imagePremiere:
//         "https://lh3.googleusercontent.com/aqj6yPxuv3G0smvRK82ZjdUPB3CmNoWc57BiQ478V8BzFJeGejxnN2AjMFcu_tm7Us-da3UPmH-sW6lYjjOS6yx6Ui0f4FtdZkUk-hKXx5DCiQA4vVZ32p3eDgtfVsTw8fzD37zWNRQRHNL5FnJJ3eo",
//     },
//     {
//       title: "Bleach",
//       resumeAnime:
//         "Nuevos capítulos El regreso de Sasuke a la aldea, en busca de venganza.",
//       date: "Gran estreno este 20/05/23",
//       imagePremiere:
//         "https://www.mundodeportivo.com/alfabeta/hero/2021/08/bleach.jpg?width=768&aspect_ratio=16:9&format=nowebp",
//     },
// ];

const GroupCardPremiere = () => {
  const [data, error] = GetAnime("https://kitsu.io/api/edge/trending/anime");
  console.log("|", data);
  return (
    <>
      <h3 className="title-grop-premiere">
        Entérate de los nuevos estrenos de estas semanas
      </h3>
      <reactComponent.Grid
        container
        columns={{ xs: 4, sm: 10, md: 18, xl: 15 }}
      >
        {error === null ? (
          <h3> ERROR</h3>
        ) : data.length === 0 ? (
          <Spinner leftColor="#5aada8" rightColor="white" />
        ) : (
          data.map(({ attributes }, index) => {
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
                  resumeAnime={attributes.description.substring(0, 100) + "..."}
                  date={attributes.createdAt}
                  imagePremiere={attributes.coverImage.original}
                />
              </reactComponent.Grid>
            );
          })
        )}
      </reactComponent.Grid>
    </>
  );
};

export default GroupCardPremiere;
