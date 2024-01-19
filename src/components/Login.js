import Header from "./Header";
import { BG_IMAGE_URL, USR_ICON } from "../utils/constant";
import { useState, useRef } from "react";
import { validateData } from "../utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleAction = () => {
    setIsSignInForm(!isSignInForm);
  };

  const validateForm = () => {
    const message = validateData(
      email?.current?.value,
      password?.current?.value,
      fullName?.current?.value
    );
    setErrorMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then(() => {
          updateProfile(auth.currentUser, {
            displayName: fullName?.current?.value, photoURL: USR_ICON
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL}));
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + errorMessage);
        });
    }
  };

  return (
    <div className="absolute w-full">
      <Header />
      <img className="absolute" src={BG_IMAGE_URL} alt="background" />
      <div>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="absolute w-3/12 p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-md bg-opacity-80"
        >
          <h1 className="py-2 my-2 text-2xl">
            {isSignInForm ? "Sign in" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={fullName}
              type="text"
              name="name"
              placeholder="Full name"
              className="p-2 my-3 w-full rounded-sm bg-gray-800"
            />
          )}
          <input
            ref={email}
            type="text"
            name="email"
            placeholder="Email"
            className="p-2 my-3 w-full rounded-sm bg-gray-800"
          />
          <input
            ref={password}
            type="password"
            name="password"
            placeholder="Password"
            className="p-2 my-3 w-full rounded-sm bg-gray-800"
          />
          {errorMessage && (
            <p className="py-2 my-2 text-red-600 font-bold">{errorMessage}</p>
          )}
          <button
            className="p-2 my-4 bg-red-600 w-full rounded-sm"
            onClick={validateForm}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>
          <p className="py-2 my-2 cursor-pointer" onClick={toggleAction}>
            {isSignInForm
              ? "New to Netflix? Sign up now"
              : "Registered already? Sign In"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
