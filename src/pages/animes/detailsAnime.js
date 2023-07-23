//components
import Spinner from "../../components/spinner/spinner";
import CardDetails from "../../components/cards/card-details";
//functions
import { useParams } from "react-router-dom";
import { GetAnimeById } from "../../api/apiAxios";

const DetailsAnime = () => {
  const { id } = useParams();
  const [data, error] = GetAnimeById("https://kitsu.io/api/edge/anime", id);

  // console.log("Details", data);

  return (
    <>
      <div>
        {error === null ? (
          <h3> ERROR</h3>
        ) : data.length === 0 ? (
          <Spinner leftColor="#5aada8" rightColor="white" />
        ) : (
          <>
            <CardDetails data={data.attributes} />
            <div className="container-iframe-trailer">
              <h3 className="text-trailer">TRAILER</h3>
              <iframe
                className="iframe-video"
                title="Preview"
                src={
                  "https://www.youtube.com/embed/" +
                  data.attributes.youtubeVideoId
                }
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                width="50%"
                height="350px"
              ></iframe>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default DetailsAnime;
