import "../../css/buttons/buttons.css";
import Button from "../../components/buttons/buttons";

import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

import { setCurrentPage } from "../../redux/GlobalReduxValue";

const Pagination = () => {
  const totalPages = useSelector((state) => state.globalValue.totalPages);
  const currentPage = useSelector((state) => state.globalValue.currentPage);

  return (
    <>
      {totalPages > 0 ? (
        <div className="container-pagination">
          {parseInt(currentPage) !== 1 ? <ButtonBack /> : <div></div>}

          <div className="container-totalPages">
            <h3>
              {currentPage} / {totalPages}
            </h3>
          </div>

          {parseInt(totalPages) !== parseInt(currentPage) ? (
            <ButtonNext />
          ) : (
            <div></div>
          )}
        </div>
      ) : null}
    </>
  );
};

const HandleClick = (sum, navigate, currentPage, dispatch, location) => {
  const routeMap = {
    "/all-anime/page/": "/all-anime/page/",
    "/in-broadcast/page/": "/in-broadcast/page/",
    "/in-upcoming/page/": "/in-upcoming/page/",
  };

  sum
    ? dispatch(setCurrentPage(currentPage + 1))
    : dispatch(setCurrentPage(currentPage - 1));
  let page = sum ? parseInt(currentPage) + 1 : parseInt(currentPage) - 1;

  for (const route in routeMap) {
    if (location.pathname.includes(route)) {
      navigate(routeMap[route] + page);
      break; // Terminar el bucle una vez que se encuentre la coincidencia
    }
  }
};

const ButtonBack = () => {
  const navigate = useNavigate();
  const currentPage = useSelector((state) => state.globalValue.currentPage);
  const dispatch = useDispatch();
  let location = useLocation();

  const handleClick = () => {
    HandleClick(false, navigate, currentPage, dispatch, location);
  };

  return (
    <Button
      nameButton="Atras"
      sizeWidth="auto"
      colorText="rgb(238, 236, 236)"
      background="red"
      onClick={() => handleClick()}
    />
  );
};

const ButtonNext = () => {
  const navigate = useNavigate();
  const currentPage = useSelector((state) => state.globalValue.currentPage);
  const dispatch = useDispatch();
  let location = useLocation();

  const handleClick = () => {
    HandleClick(true, navigate, currentPage, dispatch, location);
  };

  return (
    <Button
      nameButton="Siguiente"
      sizeWidth="auto"
      colorText="rgb(238, 236, 236)"
      background="green"
      onClick={() => handleClick()}
    />
  );
};

export default Pagination;
