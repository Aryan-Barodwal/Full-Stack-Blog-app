import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

const LogoutButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate("/Login");
    });
  };

  const handleMouseOver = () => {
    gsap.to("#ButtonHeader", {
      backgroundColor: "#4C2011",
    });
  };
  const handleMouseLeave = () => {
    gsap.to("#ButtonHeader", {
      backgroundColor: "#4A2038",
    });
  };

  return (
    <div>
      <button
        id="ButtonHeader"
        onMouseLeave={handleMouseLeave}
        onMouseOver={handleMouseOver}
        onClick={logoutHandler}
        className=" bg-[#4A2038] px-6 text-white font-semibold border-[0.3px] border-red-700 border-none rounded-md  p-2 md:px-3"
        type="button"
      >
        Logout
      </button>
    </div>
  );
};

export default LogoutButton;
