import { useDispatch, useSelector } from "react-redux";
import { LANGUAGES, LOGO_URL } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/browse");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // unsubscribe onAuthStateChange when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLangChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div className="absolute z-10 bg-transparent bg-gradient-to-b from-black w-full flex justify-between">
      <img className="w-40" src={LOGO_URL} alt="logo" />
      {user && (
        <div className="flex justify-center align-middle">
          {showGptSearch && (
            <select
              className="my-2 py-2 mx-2 px-2 h-10 bg-gray-800 text-white rounded-md"
              onChange={handleLangChange}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-slate-800 h-10 mx-4 my-2 py-2 px-2 text-white rounded-md"
            onClick={handleGptSearch}
          >
            {showGptSearch ? "Home" : "GPT Search"}
          </button>
          <img className="w-6 h-7 my-4" src={user?.photoURL} alt="user-icon" />
          <p className="p-4 text-white cursor-pointer" onClick={handleSignOut}>
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
