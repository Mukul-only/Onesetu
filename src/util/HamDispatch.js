import { useDispatch } from "react-redux";
import { hamburgerAction } from "../store/hamburger-slice";
const HamDispatch = () => {
  const dispatch = useDispatch();
  const ClickHandler = {
    toogleActive: () => {
      dispatch(hamburgerAction.toogleActive());
    },
    notActive: () => {
      dispatch(hamburgerAction.notActive());
    },
  };
  return ClickHandler;
};
export default HamDispatch;
