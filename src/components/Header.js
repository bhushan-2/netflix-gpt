import { useSelector } from "react-redux";
import { logoURL } from "../utils/imageURL";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";


const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth).then(() => {
        navigate("/");
      }).catch((error) => {
        navigate("/browse");
      });
  };

  return (
    <div className="absolute z-10 bg-transparent bg-gradient-to-b from-black w-screen flex justify-between">
      <img className="w-40" src={logoURL} alt="logo" />
      {user && (
        <div className="flex justify-center align-middle">
          <img className="w-6 h-7 my-4" src={user?.photoURL} alt="user-icon" />
          <p className="p-4 text-white cursor-pointer" onClick={handleSignOut}>Sign Out</p>
        </div>
      )}
    </div>
  );
};

export default Header;
