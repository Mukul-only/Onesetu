import React from "react";
import Card from "../../UI/Card";
import brandLogo from "../../assets/brandLogo.svg";
import brandName from "../../assets/brandName.svg";
import classes from "./Navigation.module.css";
import Button from "../../UI/Button";
import HamburgerMenu from "../../UI/Hamburger";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileNav from "./MobileNav";
import HamDispatch from "../../util/HamDispatch";
export const userButtons = (
  <>
    <Button className={`${classes.btn} px-10`}>Login</Button>
    <Button className={`${classes.btn} px-2`}>Create Account</Button>
  </>
);

const Navigation = (props) => {
  const dispatch = HamDispatch();
  const active = useSelector((state) => state.hamburger.isActive);
  const brandClickHandler = () => {
    dispatch.notActive();
  };
  return (
    <>
      <div className="shadow-nav bg-white">
        <Card className="flex  items-center justify-between md:py-4 ">
          <Link to="/" onClick={brandClickHandler}>
            <div className="flex space-x-3 ">
              <img src={brandLogo} alt="brand logo" className="w-8 md:w-10" />
              <img src={brandName} alt="onesetu" className="w-24 md:w-32" />
            </div>
          </Link>

          <div className="hidden md:flex space-x-8 text-deepBlue">
            <div className="group">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? classes.active : "")}
                end
              >
                Home
              </NavLink>
              <span
                className={`${classes["nav-item-hover"]} group-hover:w-5/6`}
              />
            </div>

            <div className="group">
              <NavLink
                to="/aboutus"
                className={({ isActive }) => (isActive ? classes.active : "")}
                end
              >
                About Us
              </NavLink>
              <span
                className={`${classes["nav-item-hover"]} group-hover:w-5/6`}
              />
            </div>

            <div className="group">
              <NavLink
                to="/blogs"
                className={({ isActive }) => (isActive ? classes.active : "")}
                end
              >
                Blogs
              </NavLink>
              <span
                className={`${classes["nav-item-hover"]} group-hover:w-5/6`}
              />
            </div>
            <div className="group">
              <NavLink
                to="/help"
                className={({ isActive }) => (isActive ? classes.active : "")}
                end
              >
                Help
              </NavLink>
              <span
                className={`${classes["nav-item-hover"]} group-hover:w-5/6`}
              />
            </div>
          </div>
          <div className="hidden md:flex space-x-3">{userButtons}</div>
          <HamburgerMenu className="md:hidden block" />
        </Card>
      </div>
      <MobileNav
        className={`md:hidden bg-white ${
          active ? " space-y-4 py-8" : "h-0 overflow-hidden"
        } duration-300`}
      />
    </>
  );
};
export default Navigation;
