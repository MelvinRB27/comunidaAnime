import "../../css/spinner/spinner.css";

const Spinner = ({ leftColor, rightColor }) => (
  <div className="containerSpinner">
    <div
      className="spinner"
      style={{ borderLeftColor: leftColor, borderRightColor: rightColor }}
    >
      {" "}
    </div>
    {/* <h6>CARGANDO...</h6> */}
  </div>
);

export default Spinner;
