import React, { useContext, useRef, useState } from "react";
import { DataContext } from "../context/context";
import toast, { Toaster } from "react-hot-toast";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import axios from "axios";

function SignIn() {
  const { dispatch, cached } = useContext(DataContext);
  const [passwordType, setPasswordType] = useState("password");
  const password = useRef();
  const email = useRef();
  const [error, setError] = useState("");

  const togglePassword = () => {
    if (passwordType === "text") setPasswordType("password");
    else setPasswordType("text");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = {
      email: email.current.value,
      password: password.current.value,
    };
    try {
      const res = await axios.post("/auth/login", config);
      const tasks = await axios.get("/todo");
      const data = {
        user: res.data,
        isFetching: false,
        error: null,
        tasks: tasks.data,
        modalOpen: false,
        currentTask: {},
      };
      if (cached) localStorage.setItem("data", JSON.stringify(data));
      setError(null);
      toast.success("Login Successfull", 1000);
      setTimeout(() => {
        dispatch({
          type: "INIT",
          payload: data,
        });
      }, 2000);
    } catch (e) {
      setError("Email/Password Invalid");
      dispatch({ type: "LOGIN_FAIL", payload: e.message });
    }
  };
  return (
    <form className="p-4 flex flex-col gap-8">
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: "#329C89",
              color: "white",
            },
          },
        }}
      />
      <hr />
      <div>
        <h1 className="text-xl ">To Continue</h1>
        <span className="text-sm font-light text-gray-300">
          We need your Name and Email{" "}
        </span>
      </div>
      <input
        type="email"
        className="w-[100%] py-2 px-3 text-sm placeholder:text-gray-300 outline-none border border-gray-200 rounded-md"
        placeholder="Email"
        ref={email}
      />
      <div className="relative">
        <input
          type={passwordType}
          className="w-[100%] py-2 px-3 text-sm placeholder:text-gray-300 outline-none border border-gray-200 rounded-md"
          placeholder="password"
          ref={password}
        />
        {
          <div
            className="absolute right-[20px] top-[35%] cursor-pointer "
            onClick={togglePassword}
          >
            {passwordType === "password" ? (
              <AiFillEye color="gray" />
            ) : (
              <AiFillEyeInvisible color="gray" />
            )}
          </div>
        }
      </div>
      <div className="w-[100%] relative ">
        {error && (
          <div className="absolute -top-[30px]  text-red-600 p-2 text-[11px] w-[100%] grid place-content-center">
            &#9888;&nbsp;{error}
          </div>
        )}

        <button
          className="py-2 px-3 font-semibold w-[100%] text-white rounded-md bg-[#329C89]"
          onClick={handleSubmit}
        >
          Log In
        </button>
      </div>
    </form>
  );
}

export default SignIn;
