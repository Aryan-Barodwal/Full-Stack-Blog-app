import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import authService from "../appwrite/auth";
import { Button, Input, Logo } from "./index";

import toast from "react-hot-toast";

import { useForm } from "react-hook-form";
import { login } from "../store/authSlice";

import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const [Error, setError] = useState();

  const delay = (t) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, t * 1000);
    });
  };

  const create = async (data) => {
    await delay(1);
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(login(userData));
          navigate("/");
          toast.success("Signup Successfully.", {
            style: {
              border: "1px solid #713200",
              padding: "16px",
              color: "#713200",
            },
            iconTheme: {
              primary: "#713200",
              secondary: "#FFFAEE",
            },
          });
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center my-28 px-3">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10 mx-6`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-2xl font-bold leading-tight md:w-[100%] w-[73vw] ">
          Sign up to create account
        </h2>
        {/*     width: 73vw; */}

        <p className="mt-2 text-center text-base text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>

        {Error && <p className="text-red-600 mt-8 text-center">{Error}</p>}

        {isSubmitting ? <div className="loader w-full mx-auto"></div> : ""}

        <form className="mt-8" onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Name:"
              type="name"
              placeholder="Enter your Name: "
              {...register("name", {
                required: {
                  value: true,
                },
                pattern: {
                  // value: /^[A-Za-z0-9]+$/,
                  message: "Username must contain only letters and numbers",
                },
              })}
            />
            {errors.name ? (
              <div className="text-red-600 text-sm">{errors.name.message}</div>
            ) : (
              ""
            )}

            <Input
              label="Email:"
              type="email"
              placeholder="Enter your Email: "
              {...register("email", {
                required: {
                  value: true,
                  // message:,
                },
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Email address must be a valid address",
                },
              })}
            />
            {errors.email ? (
              <div className="text-red-600 text-sm">{errors.email.message}</div>
            ) : (
              ""
            )}

            <Input
              label="Password:"
              type="password"
              placeholder="Enter your Password: "
              {...register("password", {
                required: {
                  value: true,
                },
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message:
                    "Password must be at least 8 characters long and contain at least one letter, one number, and one special character",
                },
              })}
            />
            {errors.password ? (
              <div className="text-red-600 text-sm">
                {errors.password.message}
              </div>
            ) : (
              ""
            )}

            <Button type="sumbit" className="w-full text-xl">
              Create Account Now
            </Button>
          </div>
        </form>
        {/* 275px */}
      </div>
    </div>
  );
};

export default Signup;
