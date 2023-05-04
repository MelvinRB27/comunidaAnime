import axios from "axios";
import { useEffect, useState } from "react";

const GetAnime = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const getAnimes = async () => {
      await axios
        .get(url)
        .then((resp) => {
          setData(resp.data.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally();
    };
    getAnimes();
  }, [url]);

  return [data, error];
};

export default GetAnime;

// axios.get()
// .then()
// .catch()
// .finally()
