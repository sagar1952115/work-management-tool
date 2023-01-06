import axios from "axios";
import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

function SignUp({ setActive }) {
  const [state, setState] = useState({
    email: "",
    username: "",
    password: "",
  });

  const [passwordType, setPasswordType] = useState("password");
  const [error, setError] = useState(null);

  const { email, username, password } = state;

  const handleChange = (e) => {
    setState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const togglePassword = () => {
    if (passwordType === "text") setPasswordType("password");
    else setPasswordType("text");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "" || username === "" || password === "") {
      setError("Empty fields are not allowed");
      return;
    }
    if (password.length < 6) {
      setError("Password must be atleast 6 characters");
      return;
    }
    const mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!mail.test(email)) {
      setError("Please provide valid email address");
      return;
    }
    try {
      await axios.post("/auth/register", state);
      setError(null);
      setActive(true);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <form className="p-4 flex flex-col gap-8">
      <hr />
      <input
        type="text"
        className="w-[100%] py-2 px-3 text-sm placeholder:text-gray-300 outline-none border border-gray-200 rounded-md"
        placeholder="Full Name"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="email"
        className="w-[100%] py-2 px-3 text-sm placeholder:text-gray-300 outline-none border border-gray-200 rounded-md"
        placeholder="Email"
        value={email}
        name="email"
        onChange={handleChange}
      />
      <div className="relative">
        <input
          type={passwordType}
          className="w-[100%] py-2 px-3 text-sm placeholder:text-gray-300 outline-none border border-gray-200 rounded-md"
          placeholder="password"
          name="password"
          onChange={handleChange}
          value={password}
          min={6}
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
          className="py-2 w-[100%] px-3 font-semibold text-white rounded-md bg-[#329C89]"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default SignUp;
