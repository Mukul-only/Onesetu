import React from "react";
import Card from "../../UI/Card";
import brandLogo from "../../assets/brandLogo.svg";
import brandName from "../../assets/brandName.svg";
import classes from "./Navigation.module.css";
import Button from "../../UI/Button";
import HamburgerMenu from "../../UI/Hamburger";

export const userButtons = (
  <>
    <Button className={`${classes.btn} px-10`}>Login</Button>
    <Button className={`${classes.btn} px-2`}>Create Account</Button>
  </>
);

const Navigation = (props) => {
  return (
    <div className="shadow-nav">
      <Card className="flex  items-center justify-between md:py-4 ">
        <div className="flex space-x-3 ">
          <img src={brandLogo} alt="brand logo" class="w-8 md:w-10" />
          <img src={brandName} alt="onesetu" className="w-24 md:w-32" />
        </div>
        <div className="hidden md:flex space-x-8 text-deepBlue">
          <div className="group">
            <a href="#">About Us</a>
            <span
              className={`${classes["nav-item-hover"]} group-hover:w-5/6`}
            />
          </div>
          <div className="group">
            <a href="#">Blogs</a>
            <span
              className={`${classes["nav-item-hover"]} group-hover:w-5/6`}
            />
          </div>
          <div className="group">
            <a href="#">Help</a>
            <span
              className={`${classes["nav-item-hover"]} group-hover:w-5/6`}
            />
          </div>
        </div>
        <div className="hidden md:flex space-x-3">{userButtons}</div>
        <HamburgerMenu className="md:hidden block" />
      </Card>
    </div>
  );
};
export default Navigation;
