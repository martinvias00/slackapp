import "./Loading.css";
const Loading = () => {
  return (
    <div v-show="show" className="overlay">
      <div className="dialog">
        <div class="w-16 h-16 border-b-2 border-gray-900 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loading;
