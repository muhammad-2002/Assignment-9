import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet-async";
import { FaKey } from "react-icons/fa6";
import { IoIosEyeOff, IoMdEye } from "react-icons/io";
import {
  MdDriveFileRenameOutline,
  MdEmail,
  MdInsertPhoto,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../../Provider/Provider";

const Register = () => {
  const { createEmailAndPassword, UpdateUser, setUser } =
    useContext(AuthContext);
  const [passError, serPassError] = useState(null);
  const [Toggle, setToggle] = useState(true);
  const handleSubmitRegister = (e) => {
    e.preventDefault();
    serPassError(null);

    const form = new FormData(e.currentTarget);
    const password = form.get("password");
    const name = form.get("name");
    const email = form.get("email");
    const photoUrl = form.get("photoUrl");
    console.log(photoUrl);
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      return serPassError(
        "Please use Uppercase & Lowercase letter and length must be  6 character"
      );
    }

    createEmailAndPassword(email, password)
      .then((result) => {
        toast.success("User Create Successfully");
        console.log(result.user);
        //update name and photo url
        UpdateUser(name, photoUrl)
          .then(() => {
            console.log("Successfully done");
            setUser({ name: name, photoURL: photoUrl });
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        toast.error("This Email Already Exist");
      });
  };

  return (
    <div>
      <Helmet>
        <title>MyBali-Register</title>
      </Helmet>
      <div className="flex justify-center items-center mt-5">
        <div className="w-[80%] p-8 space-y-2 rounded-xl dark:bg-gray-50 dark:text-gray-800 ">
          <h1 className="text-2xl font-bold text-center">
            Register your account
          </h1>
          <form onSubmit={handleSubmitRegister} className="space-y-4">
            <div className="space-y-1 text-sm relative">
              <label htmlFor="username" className="block dark:text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your Name"
                className="w-full px-8 py-3 rounded-md border dark:border-[#00AFC6] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <p className="absolute text-xl top-8 left-2">
                <MdDriveFileRenameOutline />
              </p>
            </div>
            <div className="space-y-1 text-sm relative">
              <label htmlFor="photoUrl" className="block dark:text-gray-600">
                PhotoURL
              </label>
              <input
                type="text"
                name="photoUrl"
                id="photo"
                placeholder="PhotoURL"
                className="w-full px-8 py-3 rounded-md border dark:border-[#00AFC6] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <p className="absolute text-xl top-8 left-2">
                <MdInsertPhoto />
              </p>
            </div>
            <div className="space-y-1 text-sm relative">
              <label htmlFor="username" className="block dark:text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="username"
                placeholder="Enter your email"
                className="w-full px-8 py-3 rounded-md dark:border-[#00AFC6] border dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
              />
              <p className="absolute text-xl top-8 left-2">
                <MdEmail />
              </p>
            </div>
            <div className="space-y-1 text-sm">
              <label htmlFor="password" className="block dark:text-gray-600">
                Password
              </label>
              <div className="relative">
                <input
                  type={`${Toggle ? "text" : "password"}`}
                  name="password"
                  id="password"
                  placeholder="Password"
                  className="w-full px-8 py-3 rounded-md border  dark:border-[#00AFC6] dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600"
                />
                <p className="absolute text-xl top-3 left-2">
                  <FaKey />
                </p>
                <p
                  onClick={() => setToggle(!Toggle)}
                  className="absolute text-xl top-3 right-3"
                >
                  {Toggle ? <IoMdEye /> : <IoIosEyeOff />}
                </p>
              </div>
              <div className="text-red-700 text-sm ">{passError}</div>
            </div>
            <button
              type="submit"
              className="block w-full p-3 text-center rounded-sm common-color text-white font-bold"
            >
              Register
            </button>
          </form>

          <p className="text-xs text-center sm:px-6 dark:text-gray-600">
            Alradey you have an account?
            <Link
              to="/login"
              className="underline font-bold dark:text-gray-800"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
