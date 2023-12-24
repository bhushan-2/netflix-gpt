import {logoURL} from "../utils/Image";

const Header = () => {
  return <div className="absolute w-40 z-10 bg-transparent bg-gradient-to-b from-black">
    <img src={logoURL} alt="logo"/>
  </div>;
};

export default Header;
