import axios from "axios";
import { useEffect, useState } from "react";
//helpers
import { useDispatch, useSelector } from "react-redux";
import {
  setLoading,
  setAnimeSearch,
  setTotalPages,
} from "../redux/GlobalReduxValue";

export const GetAnime = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    const getAnimes = async () => {
      dispatch(setLoading(true));
      await axios
        .get(url)
        .then((resp) => {
          setData(resp.data.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    };
    getAnimes();
  }, [url, dispatch]);

  return [data, error];
};

export const GetAllAnime = (url, page, limit) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  const genderSelected = useSelector(
    (state) => state.globalValue.genderSelected
  );
  useEffect(() => {
    const params = {
      "filter[genres]": genderSelected === "null" ? null : genderSelected,
      "page[limit]": limit,
      "page[offset]": (page - 1) * limit,
    };
    const getAllAnime = async () => {
      dispatch(setLoading(true));
      await axios
        .get(url, { params })
        .then((resp) => {
          setData(resp.data.data);
          let numer = Math.round(resp.data.meta.count / 20);
          numer = numer % 2 === 1 ? numer + 1 : numer; //VALIDA SI EL NUMERO ES IMPAR, SI LO ES LE SUMA 1, SI NO PUES SE QUEDA IGUAL
          dispatch(setTotalPages(numer));
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    };
    getAllAnime();
  }, [url, page, limit, dispatch, genderSelected]);

  return [data, error];
};

export const GetAnimeById = (url, id) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  useEffect(() => {
    const getAnimesById = async () => {
      await axios
        .get(url + "/" + id)
        .then((resp) => {
          setData(resp.data.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally();
    };
    getAnimesById();
  }, [url, id]);

  return [data, error];
};

export const GetAnimeByParamas = (url, page, search, limit = 20) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const dispatch = useDispatch();
  useEffect(() => {
    // let params = `?filter[text]=${param}`;

    const params = {
      "filter[text]": search,
      "page[limit]": limit,
      "page[offset]": (page - 1) * limit,
    };

    const getAnimesByParamas = async () => {
      dispatch(setLoading(true));
      await axios
        .get(url, { params })
        .then((resp) => {
          setData(resp.data.data);
          // dispatch(setAnimeSearch(resp.data.data));
          let numer = Math.round(resp.data.meta.count / 20);
          numer = numer % 2 === 1 ? numer + 1 : numer; //VALIDA SI EL NUMERO ES IMPAR, SI LO ES LE SUMA 1, SI NO PUES SE QUEDA IGUAL
          dispatch(setTotalPages(numer));
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    };
    getAnimesByParamas();
  }, [url, page, search, limit, dispatch]);

  return [data, error];
};

export const GetAnimeInBroadcast = (url, page, limit) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    const params = {
      "filter[status]": "current",
      "page[limit]": limit,
      "page[offset]": (page - 1) * limit,
    };
    const getAnimeCurrent = async () => {
      dispatch(setLoading(true));
      await axios
        .get(url, { params })
        .then((resp) => {
          setData(resp.data.data);
          let numer = Math.round(resp.data.meta.count / 20);
          numer = numer % 2 === 1 ? numer + 1 : numer; //VALIDA SI EL NUMERO ES IMPAR, SI LO ES LE SUMA 1, SI NO PUES SE QUEDA IGUAL
          dispatch(setTotalPages(numer));
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    };
    getAnimeCurrent();
  }, [url, page, limit, dispatch]);

  return [data, error];
};

export const GetAnimeInUpcoming = (url, page, limit) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true));
    const params = {
      "filter[status]": "upcoming",
      "page[limit]": limit,
      "page[offset]": (page - 1) * limit,
    };

    const getAnimeInUpcoming = async () => {
      await axios
        .get(url, { params })
        .then((resp) => {
          setData(resp.data.data);
          let numer = Math.round(resp.data.meta.count / 20);
          numer = numer % 2 === 1 ? numer + 1 : numer; //VALIDA SI EL NUMERO ES IMPAR, SI LO ES LE SUMA 1, SI NO PUES SE QUEDA IGUAL
          dispatch(setTotalPages(numer));
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    };
    getAnimeInUpcoming();
  }, [url, page, limit, dispatch]);

  return [data, error];
};

export const Get4AnimeTrending = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const get4AnimeTrending = async () => {
      await axios
        .get(url)
        .then((resp) => {
          setData(resp.data.data);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    };
    get4AnimeTrending();
  }, [url, dispatch]);

  return [data, error];
};

export const GetAllGenders = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const getAllGenders = async () => {
      await axios
        .get("https://kitsu.io/api/edge/genres")
        .then((resp) => {
          let Genders = [];
          resp.data.data.forEach((element) => {
            Genders.push({
              label: element.attributes.name,
              value: element.attributes.name,
            });
          });
          setData(Genders);
        })
        .catch((err) => {
          setError(err);
        })
        .finally(() => {
          dispatch(setLoading(false));
        });
    };
    getAllGenders();
  }, [dispatch]);

  return [data, error];
};
