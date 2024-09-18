import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Input, Logo, Button } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";

import toast from "react-hot-toast";

import "./Login.css";

import { useForm } from "react-hook-form";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  const [Error, setError] = useState("");

  const delay = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, t * 1000);
    });
  };

  // console.log(delay)

  const login = async (data) => {
    await delay(1);
    setError("");

    try {
      const session = await authService.login(data);

      if (session) {
        const userData = await authService.getCurrentUser();
        // const userdata = console.log(userData);

        if (userData) {
          const Login = dispatch(authLogin(userData));

          if (Login) {
            navigate("/");

            toast(`Hello ${userData.name}!`, {
              icon: "👏",
              style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
              },
            });
          }
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  /* HTML: <div class="loader"></div> */

  return (
    <>
      <div className="flex items-center justify-center w-full  my-28 px-3">
        <div
          className={`mx-auto w-full max-w-lg rounded-xl p-10 bg-gray-100 border border-black/10 mx-6`}
        >
          <div className="mb-2 flex justify-center ">
            <span className="inline-block w-full max-w-[100px]">
              <Logo width="100%" />
            </span>
          </div>
          <h2 className="text-center text-2xl font-bold leading-tight">
            Sign-in to your account
          </h2>
          <p className="mt-2 text-center text-base text-black/60">
            Don&apos;t have any account?&nbsp;
            <Link
              to="/signup"
              className="font-medium text-primary transition-all duration-200 hover:underline"
            >
              Sign Up
            </Link>
            {isSubmitting ? <div className="loader w-full mx-auto"></div> : ""}
          </p>
          {Error && <p className="text-red-700 mt-8 text-center">{Error}</p>}

          <form className="mt-8" onSubmit={handleSubmit(login)}>
            <div className="inner space-y-5 mx-auto text-start flex flex-col justify-start items-start ">
              <Input
                className="text-black bg-gray-300 text-base rounded-md text-start"
                label="Email: "
                placeholder=" Enter your Email"
                type="Email"
                {...register("email", {
                  required: true,
                  validate: {
                    matchPatern: (value) =>
                      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
                        value
                      ) || "Email address must be a valid address",
                  },
                })}
              />

              <Input
                className="text-black bg-gray-300 text-base rounded-md text-start"
                label="Password: "
                placeholder=" Enter your Password"
                type="Password"
                {...register("password", {
                  required: true,
                })}
              />

              <Button className="text-xl w-full" type="sumbit">
                SIGN IN
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
