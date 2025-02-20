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
  const handlePasswordShow = (e) => {
    setShowPassword((pre) => !pre);
  };
  return (
    <section className="w-full container mx-auto px-2">
      <div className="bg-white my-4 max-w-lg mx-auto rounded p-4">
        <p> User Register Page</p>

        <form>
          <div className="gird gap-2 mt-6">
            <label htmlFor="name"> Name : </label>
            <br></br>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              autoFocus
              className="bg-blue-50 p-2 w-full outline-none focus: border-x-primary-200"
              name="name"
              value={data.name}
              onChange={handleChange}
            ></input>
          </div>

          <div className="gird gap-2 mt-6">
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

          <div className="gird gap-2 mt-6">
            <label htmlFor="password"> Password : </label>
            <br></br>
            <div className="bg-blue-50 p-2 border rounded flex items-center ">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                className="bg-blue-50  w-full outline-none  focus-within:border-x-primary-200 "
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

          <div className="gird gap-2 mt-6">
            <label htmlFor="password"> Confirm Password : </label>
            <br></br>
            <input
              id="confirmPassword"
              type="confirmPassword"
              className="bg-blue-50 p-2 w-full outline-none focus-within:border-x-primary-200 "
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
            ></input>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Register;
