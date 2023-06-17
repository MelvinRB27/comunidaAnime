import * as reactComponent from "@mui/material";
import "../../css/cards/card-details.css";

const CardDetails = ({ data }) => {
  console.log("meele", data);

  let ratingStars = data.averageRating / 20;
  ratingStars = Math.round(ratingStars);

  let urlBackground = data.coverImage ? data.coverImage.tiny : "none";
  return (
    <>
      <div
        className="container-card-details"
        style={{
          backgroundImage: `url(${urlBackground})`,
        }}
      >
        <div className="rectangle-cover">
          <div className="ellipse-rating">
            <h4 className="number-rating-popularity">{data.averageRating}</h4>
          </div>

          <reactComponent.Rating
            className="rating-popularity"
            name="read-only"
            value={ratingStars}
            precision={0.5}
            readOnly
          ></reactComponent.Rating>

          <div className="div-cover-title">
            <img
              alt="cover"
              src={data.posterImage.original}
              className="avatar-card-details"
            />

            <div className="div-title">
              <h3>{data.canonicalTitle}</h3>
              <ul>
                <li>
                  <span>Género: </span>
                  {data.ageRatingGuide}
                </li>
                <li>
                  <span>Tipo: </span>
                  {data.subtype}
                </li>
                <li>
                  <span>Estado: </span>
                  {data.status}
                </li>
                <li>
                  <span>Espisodios: </span>
                  {data.episodeCount}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <h3 className="description-details">{data.description}</h3>
    </>
  );
};

export default CardDetails;
