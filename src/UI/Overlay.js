import ReactDOM from "react-dom";
import cross from "../assets/cross.svg";
const Modal = (props) => {
  return (
    <div className="fixed flex top-0 bottom-0 right-0 left-0 justify-center items-center bg-black bg-opacity-30 z-30 p-4">
      <div
        className={`relative ${props.className ? props.className : ""} div `}
      >
        <img
          src={cross}
          className="absolute w-7 h-7 lg:w-10 lg:h-10 rounded-full p-2 top-4 right-4 bg-Blue-500 cursor-pointer"
          onClick={() => {
            props.setState(false);
          }}
        />
        {props.children}
      </div>
    </div>
  );
};
const Overlay = (props) => {
  const overlay = document.getElementById("overlays");

  return ReactDOM.createPortal(<Modal {...props} />, overlay);
};
export default Overlay;
