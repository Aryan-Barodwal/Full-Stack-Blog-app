import React from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

import firstblog from "../assets/bgg.jpg";
import secondblog from "../assets/AddPost.png";
import thirdblog from "../assets/update-post.png";
import createBLog from "../assets/create-blog.png";

function HomePageSLider() {
  // useGSAP(() => {
  //   gsap.to(".childrem", {
  //     // x: 40,
  //     // rotate: 20,
  //     // opacity:0,
  //     display: "none",
  //     delay: 1,
  //     duration: 2,
  //     stagger: 2,
  //     scrollTrigger: {
  //       trigger: ".leftSlider",
  //       scroller: "body",
  //       scrub: 2,
  //       markers: true,
  //       start: "top -5%",
  //       end: "top -75%",
  //       pin: true,
  //     },
  //   });
  // });

  return (
    <div className="leftSlider w-full h-[110vh] text-white bg-[#19191C]">
      <div className="flex justify-around">
        <div className="left h-full w-[40%] flex flex-col justify-center items-center">
          <input
            id="slider"
            className="mt-80 font-thin rotate-90 cursor-pointer text-neutral-500 w-[70%] h-[0.065px] bg-transparent-200 rounded-lg appearance-none bg-[#FD366E] "
            type="range"
            value=""
            name="volume"
            min="0"
            max="10"
          />
        </div>

        <div
          id="right"
          className="right w-[60%] h-[110vh] px-40 flex flex-col justify-center items-center"
        >
          {/* overflow hidden here! */}

          <h1
            id="childs"
            className="w-[100%] h-[65%] text-[#737374] border-[#2C2C2F] p-4"
          >
            <div id="firstSLIDER" className="text-white relative top-2">
              <h1
                id="childs1"
                className="childrem w-[64%] h-[50vh] border-rd-500 overflow-hidden bg-[hsl(0,0%,100%)] border-[5px] rounded-3xl text-[#737374] border-[#2C2C2F] p-4 absolute top-0 z-50 "
              >
                <img src={firstblog} alt="" />
                <h1 className="text-4xl">1</h1>
              </h1>

              <h1
                id="childs2"
                className="childrem w-[64%] h-[50vh] border-rd-500 overflow-hidden bg-[#ffffff] border-[5px] rounded-3xl text-[#737374] border-[#2C2C2F] p-4 absolute top- z-40"
              >
                <img src={secondblog} alt="" />
                <h1 className="text-4xl">2</h1>
              </h1>

              <h1
                id="childs3"
                className="childrem w-[64%] h-[50vh] border-rd-500 overflow-hidden bg-[#ffffff] border-[5px] rounded-3xl text-[#737374] border-[#2C2C2F] p-4 absolute top- z-30"
              >
                <img src={thirdblog} alt="" />
                <h1 className="text-4xl">3</h1>
              </h1>
            </div>

            {/* <div className="fixed top-[33.2rem] right-[21.4rem] z-10 w-20 border-2 border-[#1c1c1c] rounded-xl"></div> */}
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomePageSLider;
