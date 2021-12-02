import "./Loading.css";
import { DiReact } from "react-icons/di";
const Loading = () => {
  return (
    <div v-show="show" className="overlay">
      <div className="dialog">
        <DiReact
          style={{ color: "#2d3038", fontSize: "8em", fontWeight: "bold" }}
        />
      </div>
    </div>
  );
};

export default Loading;
