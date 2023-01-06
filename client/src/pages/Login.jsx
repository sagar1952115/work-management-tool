import React, { useState } from "react";
import { useContext } from "react";
import { DataContext } from "../context/context";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function Login() {
  const [active, setActive] = useState(true);
  const [checked, setChecked] = useState(true);
  const { dispatch, cached } = useContext(DataContext);
  const handleChange = () => {
    setChecked((ch) => !ch);
    dispatch({ type: "CACHE_TOGGLE" });
  };
  return (
    <div className="w-screen h-screen flex items-center p-10 justify-center gap-5">
      <div className="w-[40%] mr-12">
        <img src="/assets/hero.png" className="w-[100%] " alt="logo" />
      </div>
      <div className="w-[35%] rounded-[70px] border border-gray-300 p-10">
        <div className="flex gap-4 mb-10">
          <div>
            <span
              className={`${
                !active && "text-gray-200"
              } text-2xl  cursor-pointer`}
              onClick={() => setActive(true)}
            >
              Login
            </span>
            <div
              className={`  ${active ? "block" : "hidden"} w-3 h-1 bg-gray-600`}
            ></div>
          </div>
          <div>
            <span
              className={`text-2xl ${
                active && "text-gray-200"
              }  cursor-pointer`}
              onClick={() => setActive(false)}
            >
              Sign Up
            </span>
            <div
              className={`${!active ? "block" : "hidden"} w-3 h-1 bg-gray-600`}
            ></div>
          </div>
        </div>
        {!active ? (
          <SignUp setActive={setActive} />
        ) : (
          <SignIn setActive={setActive} />
        )}
        <div className="flex gap-1 text-[10px] p-4">
          <input
            type="checkbox"
            name="rememberMe"
            checked={checked}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
      </div>
    </div>
  );
}

export default Login;
