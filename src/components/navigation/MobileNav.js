import Card from "../../UI/Card";
import { userButtons } from "../navigation/Navigation";
const MobileNav = (props) => {
  const hr = "border-b-1";
  return (
    <Card className={`flex flex-col  text-lg font-semibold ${props.className}`}>
      <a href="#">Blogs</a>
      <hr className={hr} />
      <a href="#">Help</a>
      <hr className={hr} />
      <a href="#">About Us</a>
      <hr className={hr} />
      {userButtons}
    </Card>
  );
};
export default MobileNav;
