import Header from "./Header";
import {bgImageURL} from "../utils/Image";
import {useState} from "react";

const Login = () => {


    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleAction = () => {
        setIsSignInForm(!isSignInForm);
    }

  return <div className="absolute w-full">
    <Header/>
    <img  className="absolute" src={bgImageURL} alt="background"/>
    <div >
        <form className="absolute w-3/12 p-12 bg-black my-36 mx-auto left-0 right-0 text-white rounded-md bg-opacity-80">
            <h1 className="py-2 my-2 text-2xl">{ isSignInForm ? 'Sign in' : 'Sign Up'}</h1>
            {!isSignInForm && <input type="text" name="name" placeholder="Full name" className="p-2 my-3 w-full rounded-sm bg-gray-800 "/>}
            <input type="text" name="email" placeholder="Email" className="p-2 my-3 w-full rounded-sm bg-gray-800 "/>
            <input type="password" name="password" placeholder="Password" className="p-2 my-3 w-full rounded-sm bg-gray-800"/>
            <button className="p-2 my-4 bg-red-600 w-full rounded-sm">{isSignInForm ? 'Sign In': 'Sign Up'}</button>
            <h5 className="py-2 my-2 cursor-pointer" onClick={toggleAction} >{ isSignInForm ? 'New to Netflix? Sign up now' : 'Registered already? Sign In'}</h5>
        </form>
    </div>
  </div>;
};

export default Login;
