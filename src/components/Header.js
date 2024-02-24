import { useDispatch, useSelector } from "react-redux";
import { LANGUAGES, LOGO_URL } from "../utils/constant";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";
import profileIcon from "../assets/img/profile-icon.jpg";
import searchIcon from "../assets/img/search-icon.png";
import homeIcon from "../assets/img/home-icon.png";

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
    <div className="absolute z-10 bg-transparent bg-gradient-to-b from-black w-full flex flex-col md:flex-row justify-between">
      <img
        className="w-40 mx-auto md:mx-0 cursor-pointer"
        src={LOGO_URL}
        alt="logo"
        onClick={handleGptSearch}
      />
      {user && (
        <div className="flex justify-center align-middle">
          {showGptSearch && (
            <select
              className="my-2 py-2 mx-4 px-2 h-10 bg-gray-900 text-white rounded-md"
              onChange={handleLangChange}
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          {showGptSearch ? (
            ""
          ) : (
            <button
              className="bg-slate-900 flex justify-around w-32 h-10 mx-4 my-2 py-2 px-2 text-white rounded-md"
              onClick={handleGptSearch}
            >
              <img className="w-4 h-4 mt-1" src={searchIcon} alt="" /> GPT
              Search
            </button>
          )}
          <img
            className="w-8 h-8 my-3 rounded-sm"
            src={profileIcon}
            alt="user-icon"
          />
          <p className="p-4 text-white cursor-pointer" onClick={handleSignOut}>
            Sign Out
          </p>
        </div>
      )}
    </div>
  );
};

export default Header;
