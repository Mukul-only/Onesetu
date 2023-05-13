import brand from "../../assets/brand-white.svg";
import Card from "../../UI/Card";
import fb from "../../assets/fb.svg";
import twitter from "../../assets/twitter.svg";
import linkedin from "../../assets/linkedin.svg";
import youtube from "../../assets/youtube.svg";
import insta from "../../assets/insta.svg";
const Footer = (props) => {
  return (
    <div className="bg-darkBlue py-6">
      <Card className="flex justify-between ">
        <img src={brand} alt="brand" className="w-20 md:w-24" />
        <div className="flex space-x-4">
          <img src={fb} className="w-2 md:w-3" />
          <img src={twitter} className="w-3 md:w-4" />
          <img src={linkedin} className="w-3 md:w-4" />
          <img src={youtube} className="w-3 md:w-4" />
          <img src={insta} className="w-3 md:w-4" />
        </div>
      </Card>
    </div>
  );
};
export default Footer;
