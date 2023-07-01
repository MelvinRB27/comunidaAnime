import CustomSelect from "../selects/CustomSelect";
import { GetAllGenders } from "../../api/apiAxios";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGenderSelecte } from "../../redux/GlobalReduxValue";
const NavRigth = () => {
  const [genders, error] = GetAllGenders();
  const dispatch = useDispatch();
  let location = useLocation();

  return (
    <div className="nav-right-btns">
      {error ? (
        <h3> ERROR </h3>
      ) : (
        <CustomSelect
          options={genders}
          title="Género"
          disabled={
            location.pathname.includes("/all-anime/page/") ? false : true
          }
          onChange={(v) => dispatch(setGenderSelecte(v))}
        />
      )}
    </div>
  );
};

export default NavRigth;
