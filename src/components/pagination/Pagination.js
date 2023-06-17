import "../../css/buttons/buttons.css";
import Button from "../../components/buttons/buttons";

import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { setCurrentPage } from "../../redux/GlobalReduxValue";

const Pagination = () => {
  const totalPages = useSelector((state) => state.globalValue.totalPages);
  const currentPage = useSelector((state) => state.globalValue.currentPage);

  return (
    <div className="container-pagination">
      {currentPage !== 1 ? <ButtonBack /> : <div></div>}

      <div className="container-totalPages">
        <h3>
          {currentPage} / {totalPages}
        </h3>
      </div>

      {totalPages !== currentPage ? <ButtonNext /> : <div></div>}
    </div>
  );
};

const ButtonBack = () => {
  const currentPage = useSelector((state) => state.globalValue.currentPage);
  const dispatch = useDispatch();

  return (
    <Button
      nameButton="Atras"
      sizeWidth="auto"
      colorText="rgb(238, 236, 236)"
      background="red"
      onClick={() => dispatch(setCurrentPage(currentPage - 1))}
    />
  );
};

const ButtonNext = () => {
  const currentPage = useSelector((state) => state.globalValue.currentPage);
  const dispatch = useDispatch();

  return (
    <Button
      nameButton="Siguiente"
      sizeWidth="auto"
      colorText="rgb(238, 236, 236)"
      background="green"
      onClick={() => dispatch(setCurrentPage(currentPage + 1))}
    />
  );
};

export default Pagination;
