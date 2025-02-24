import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import Axios from "../utils/Axios";
import SummaryApi from "../common/SummaryApi";
import AxiosToastError from "../utils/AxiosToastError";
import { useNavigate, Link } from "react-router-dom";
import Login from "./Login";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handlePasswordShow = (e) => {
    setShowPassword((pre) => !pre);
    setShowConfirmPassword((pre) => !pre);
  };

  const validValue = Object.values(data).every((e1) => e1);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (data.password !== data.confirmPassword) {
      toast.error("password and confirm password must be same");
      return;
    }
    ///have a look at this code...

    // const response = await Axios({
    //   ...SummaryApi.register
    // });

    try {
      const response = await Axios({ ...SummaryApi.register, data });
      console.log("response", response);
      if (response.data.error) {
        toast.error(response.data.message);
      }
      if (response.data.success) {
        toast.success(response.data.message);

        setData({ name: "", email: "", password: "", confirmPassword: "" });
        navigate("/login");
      }
      console.log(response.data.success);
    } catch (error) {
      AxiosToastError(error);
    }
  };
  return (
    <section className="w-full container mx-auto px-2">
      <div className="bg-white my-4 max-w-lg mx-auto rounded p-7">
        <p> Welcome to BlinkIt</p>

        <form className="grid gap-4 mt-6 " onSubmit={handleSubmit}>
          <div className="gird gap-1">
            <label htmlFor="name"> Name : </label>
            <br></br>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              autoFocus
              className="bg-blue-50 p-2 w-full  rounded outline-none focus: border-x-primary-200"
              name="name"
              value={data.name}
              onChange={handleChange}
            ></input>
          </div>

          <div className="gird gap-1 ">
            <label htmlFor="email"> Email : </label>
            <br></br>
            <input
              id="email"
              type="mail"
              className="bg-blue-50 p-2 w-full outline-none"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Enter your email"
            ></input>
          </div>

          <div className="gird gap-1">
            <label htmlFor="password"> Password : </label>
            <br></br>
            <div className="bg-blue-50 p-2 border rounded flex items-center ">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="bg-blue-50  w-full outline-none focus:border-primary-200 "
                name="password"
                value={data.password}
                onChange={handleChange}
                placeholder="Enter your password"
              ></input>{" "}
              {!showPassword ? (
                <FaEyeSlash
                  onClick={handlePasswordShow}
                  className="cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={handlePasswordShow}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>

          <div className="gird gap-1">
            <label htmlFor="password"> Confirm Password : </label>
            <br></br>
            <div className="bg-blue-50 p-2 border rounded flex items-center">
              <input
                id="confirmPassword"
                type={showPassword ? "text" : "password"}
                className="bg-blue-50  w-full outline-none focus-within:border-x-primary-200 "
                name="confirmPassword"
                value={data.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm your password"
              ></input>
              {!showPassword ? (
                <FaEyeSlash
                  onClick={handlePasswordShow}
                  className="cursor-pointer"
                />
              ) : (
                <FaEye
                  onClick={handlePasswordShow}
                  className="cursor-pointer"
                />
              )}
            </div>
          </div>

          <button
            disabled={!validValue}
            className={` ${
              validValue ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"
            }  text-white w-full py-2 my-5 rounded font-semibold`}
          >
            Register
          </button>
        </form>
        <p>
          {" "}
          Already have account ?{" "}
          <Link
            to={"/login"}
            className="font-semibold text-green-700 hover:text-green-800"
          >
            Login
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Register;
