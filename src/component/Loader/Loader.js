import { Bars } from "react-loader-spinner";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="Loader">
      <Bars
        heigth="100"
        width="100"
        color="#3f51b5"
        arialLabel="loading-indicator"
      />
    </div>
  );
};

export default Loader;
