import brand from "../../assets/brand-white.svg";
import Card from "../../UI/Card";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import youtube from "../../assets/youtube.svg";
import insta from "../../assets/insta.svg";
import SVG from "../../svg/SVG";
import Brand from "../../svg/Brand";
import { Link } from "react-router-dom";
const Footer = (props) => {
  return (
    <>
      <div className={`bg-Blue-500 py-6 ${props.className}`}>
        <Card className="flex justify-between ">
          <div>
            <SVG
              svg={Brand}
              className="w-32 h-12 xl:w-44 xl:h-20  brand -ml-3"
            />
            <p className="text-white uppercase mt-6 mb-2 text-sm xl:text-base">
              Stay Connected
            </p>
            <span className="flex space-x-4">
              <img src={fb} className="w-2 md:w-3" />
              <img src={twitter} className="w-3 md:w-4" />
              <img src={linkedin} className="w-3 md:w-4" />
              <img src={youtube} className="w-3 md:w-4" />
              <img src={insta} className="w-3 md:w-4" />
            </span>
          </div>
          <div className="text-white">
            <p className="font-semibold text-base xl:text-lg my-4">Links</p>
            <ul className="text-gray-300 space-y-2 text-sm xl:text-base">
              <li className="hover:text-white">
                <Link to="/">Home</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/aboutus">About us</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/blog">Blog</Link>
              </li>
              <li className="hover:text-white">
                <Link to="/contact">Contact us</Link>
              </li>
            </ul>
          </div>
        </Card>
      </div>
      <div className="bg-black py-6 ">
        <Card className="flex justify-center space-x-6 text-gray-300 font-medium text-xs xl:text-base">
          <Link to="/terms" className="hover:text-white">
            Terms and conditions
          </Link>
          <Link to="/privacy" className="hover:text-white">
            Privacy policy
          </Link>
        </Card>
      </div>
    </>
  );
};
export default Footer;
