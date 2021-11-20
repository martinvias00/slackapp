import "./Loading.css";
import { GiConfirmed } from "react-icons/gi";
const Success = () => {
  return (
    <div v-show="show" className="overlay">
      <div className="dialog">
        <GiConfirmed
          style={{ color: "#2d3038", fontSize: "8em", fontWeight: "bold" }}
        />
      </div>
    </div>
  );
};

export default Success;
