import React from "react";
import Card from "../../UI/Card";

import classes from "./Navigation.module.css";
import Button from "../../UI/Button";
import HamburgerMenu from "../../UI/Hamburger";
import { NavLink, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MobileNav from "./MobileNav";
import HamDispatch from "../../util/HamDispatch";
import Brand from "../../svg/Brand";
export const userButtons = (
  <>
    <Button className={`${classes.btn} px-4`}>Contact Support</Button>
    <Button className={`${classes.btn} px-10`}>Login</Button>
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
      <div className="shadow-nav bg-white sticky top-0 left-0 right-0 z-20">
        <Card className="flex  items-center justify-between md:py-4 ">
          <Link to="/" onClick={brandClickHandler}>
            <div className="relative w-36 h-12 flex space-x-3 ">
              <Brand className="w-full h-full" />
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
