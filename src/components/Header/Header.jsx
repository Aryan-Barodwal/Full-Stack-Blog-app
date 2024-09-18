import React, { useState, useEffect, useRef } from "react";
import { Container, Logo, LogoutButton } from "../index";
import { Signup } from "../index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Header.css";

import { Cross as Hamburger } from "hamburger-react";
// import { Sling as Hamburger } from 'hamburger-react'

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const [isOpen, setOpen] = useState(false);

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/Login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/Signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
    {
      name: "Your Account",
      slug: "/Youraccount",
      active: authStatus,
    },
  ];

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(".isopenSession", {
      x: -120,
      duration: 0.9,
      ease: "circ.out",
    });
    if (isOpen === true) {
      tl.play();
    }
  }, [isOpen]);

  return (
    <>
      <div id="showLIGHT" className="absolute top-0 -left-2"></div>

      <div className="w-full z-40 fixed top-0">
        <nav
          id="navbar"
          className="flex justify-around h-[7%] p-[12px] items-center shadow-lg bg-[] text-black "
        >
          <div className="Logo">
            <Link to="/">
              <Logo width="70px" />
            </Link>
          </div>

          <div className="list-ITEMS">
            <ul className="md:flex gap-10 ml-auto items-center hidden md:block">
              {navItems.map((item) =>
                item.active ? (
                  <li key={item.name} className="" id="Global">
                    <button
                      className=" text-black font-medium hover:text-[#20BDFF] font-medium relative z-10"
                      onClick={() => navigate(item.slug)}
                      type="button"
                    >
                      <span className="">{item.name}</span>
                    </button>
                  </li>
                ) : null
              )}

              {authStatus && (
                <li>
                  <LogoutButton />
                </li>
              )}
            </ul>

            {/* For mobile devices */}

            <div className="block md:hidden">
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>

            {isOpen && (
              <div className="isopenSession absolute z-20 left-0 top-0 w-[68vw] h-screen text-black">
                <ul
                  className="w-full flex flex-col justify-center items-start gap-4 
                p-6  "
                >
                  {/* p-4 pl-5 */}
                  <div className="Logo ml-[-5px]">
                    <Link to="/">
                      <Logo width="70px" />
                    </Link>
                  </div>

                  {navItems.map((item) =>
                    item.active ? (
                      <li key={item.name} id="Global">
                        <button
                          className="hover:border-b-2 border-black text-black font-medium text-base relative z-10"
                          onClick={() => navigate(item.slug)}
                          type="button"
                        >
                          <span>{item.name}</span>
                        </button>
                      </li>
                    ) : null
                  )}

                  {authStatus && (
                    <ul className="w-full flex flex-col justify-center ">
                      <li>
                        <LogoutButton />
                      </li>
                    </ul>
                  )}
                </ul>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
