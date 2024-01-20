import { useDispatch, useSelector } from "react-redux";
import { LOGO_URL } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";


const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth).then(() => {}).catch((error) => {
        navigate("/browse");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe onAuthStateChange when component unmounts
    return () => unsubscribe();
  }, []);

  return (
    <div className="absolute z-10 bg-transparent bg-gradient-to-b from-black w-full flex justify-between">
      <img className="w-40" src={LOGO_URL} alt="logo" />
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
