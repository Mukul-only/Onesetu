import Card from "../../UI/Card";
import { userButtons } from "../navigation/Navigation";
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";
import HamDispatch from "../../util/HamDispatch";
const MobileNav = (props) => {
  const hr = "border-b-1";
  const dispatch = HamDispatch();
  const blogsClickHandler = () => {
    dispatch.toogleActive();
  };
  return (
    <Card className={`flex flex-col  text-lg font-semibold ${props.className}`}>
      <NavLink
        to="/blogs"
        className={({ isActive }) => (isActive ? classes.active : "")}
        end
        onClick={blogsClickHandler}
      >
        Blogs
      </NavLink>
      <hr className={hr} />
      <NavLink
        to="/help"
        className={({ isActive }) => (isActive ? classes.active : "")}
        end
        onClick={blogsClickHandler}
      >
        Help
      </NavLink>
      <hr className={hr} />
      <NavLink
        to="/aboutus"
        className={({ isActive }) => (isActive ? classes.active : "")}
        end
        onClick={blogsClickHandler}
      >
        About Us
      </NavLink>
      <hr className={hr} />
      {userButtons}
    </Card>
  );
};
export default MobileNav;
