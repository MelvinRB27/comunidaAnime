import CardComunity from "./card-comunity";

import { Get4AnimeTrending } from "../../api/apiAxios";
import Spinner from "../spinner/spinner";

const YourComunity = () => {
  const [data, error] = Get4AnimeTrending(
    "https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=6"
  );

  return (
    <div className="father-card-comunity">
      {error === null ? (
        <h3> ERROR</h3>
      ) : data.length === 0 ? (
        <Spinner />
      ) : (
        data.map(({ id, attributes }, index) => {
          return (
            <CardComunity
              key={index}
              nameComunity={attributes.canonicalTitle}
              imageComunity={attributes.posterImage.original}
              id={id}
            />
          );
        })
      )}
      {/* <CardComunity
        nameComunity="Naruto"
        imageComunity="https://m.media-amazon.com/images/M/MV5BMDI3ZDY4MDgtN2U2OS00Y2YzLWJmZmYtZWMzOTM3YWFjYmUyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_FMjpg_UX1000_.jpg"
        members="27"
      />
      <CardComunity
        nameComunity="FullMetal"
        imageComunity="https://m.media-amazon.com/images/M/MV5BMmI5NmFlZjItOTBhOC00NGI0LWIyNDAtODJhOTJjZDEyMTYyXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg"
        members="27"
      />
      <CardComunity
        nameComunity="Black Clover"
        imageComunity="https://www.crunchyroll.com/imgsrv/display/thumbnail/640x360/catalog/crunchyroll/0273e80242d80b0218f640e038269c18.jpe"
        members="27"
      /> */}
    </div>
  );
};

export default YourComunity;
