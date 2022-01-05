import icon from "../assets/cryptocurrency.png";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="lds-circle logo">
      <img src={icon} alt="Cryptoverse" className="logo-icon" />
    </div>
  );
};

export default Loader;
