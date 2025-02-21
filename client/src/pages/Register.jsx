import React, { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { FaEye } from "react-icons/fa";

const Register = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(data);
    setData((prev) => {
      return {
        ...prev,
        [name]: value
      };
    });
  };
  console.log("data : ", data);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handlePasswordShow = (e) => {
    setShowPassword((pre) => !pre);
    setShowConfirmPassword((pre) => !pre);
  };

  const checkValues = Object.values(data).every((e1) => e1);

  const handleSubmit = (e) => {
    e.preventDefault();
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
              type="text"
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
            className={` ${
              checkValues ? "bg-green-800 hover:bg-green-700" : "bg-gray-500"
            }  text-white w-full py-2 my-5 rounded font-semibold`}
          >
            Register
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
