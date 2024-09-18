import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components/index";
import LOGINimage from "../assets/6343845.jpg";
import bgIMAGE from "../assets/bgg.jpg";
import image from "../assets/image.jpg";
import "./Home.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
import top from "../assets/Top3.png";
import heroimage from "../assets/livechat.webp";
import HomePageSLider from "./HomePageSLider.jsx";

const Home = () => {
  const [posts, setposts] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  // useEffect(() => {
  //   let element = document.querySelector(".NameWEB");
  //   let selectItem = element.textContent;
  //   let clutter = "";
  //   selectItem.split("").forEach((value) => {
  //     clutter += `<span class="a">${value}</span>`;
  //   });
  //   element.innerHTML = clutter;
  // }, []);

  // useGSAP(() => {
  //   gsap.from(".NameWEB ", {
  //     // y: 40,
  //     // stagger: 0.9,
  //   });
  // });

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setposts(posts.documents);
      }
    });
  }, []);

  // https://codersblock.com/blog/creating-glow-effects-with-css/

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => window.removeEventListener("scroll", handleScrollTop);
  }, []);

  const handleScrollTop = () => {
    if (window.scrollY > 180) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleScroll = () => {
    window.scrollTo(0, 1);
  };

  useGSAP(() => {
    // #backRAIN
    gsap.from("#Posthassle, #PosthassleChild", {
      y: 60,
      opacity: 0,
      delay: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#Posthassle",
        start: "top bottom", // Adjust the start position as needed
        end: "bottom top", // Adjust the end position as needed
      },
    });
    // buttonUPPER1Child
    gsap.from("#buttonUPPER1Child", {
      y: 60,
      opacity: 0,
      delay: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#buttonUPPER1Child",
        start: "top bottom", // Adjust the start position as needed
        end: "bottom top", // Adjust the end position as needed
        // markers: true, // Optional: for smooth scrubbing
      },
    });

    // #buttonUPPER1Image
    // gsap.from("#buttonUPPER1Image", {
    //   opacity: 0,
    //   delay: 0.2,
    //   duration: 1,
    //   scrollTrigger: {
    //     trigger: "#buttonUPPER1Image",
    //     start: "top bottom",
    //     end: "bottom top",
    //   },
    // });

    gsap.from("#buttonUPPER1", {
      opacity: 0,
      delay: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#buttonUPPER1",
        start: "top bottom",
        end: "bottom top",
      },
    });

    gsap.from("#buttonUPPER2", {
      opacity: 0,
      delay: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#buttonUPPER2",
        start: "top bottom",
        end: "bottom top",
      },
    });

    // #LOVEDh1Text
    gsap.from("#LOVEDh1Text", {
      y: 60,
      opacity: 0,
      delay: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#LOVEDh1Text",
        start: "top bottom", // Adjust the start position as needed
        end: "bottom top", // Adjust the end position as needed
        // markers: true, // Optional: for smooth scrubbing
      },
    });
    // #cards
    gsap.from("#card", {
      opacity: 0,
      delay: 1,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#cards",
        start: "top bottom",
        end: "bottom top",
      },
    });
  });

  // if (posts.length === 0) {
    // return (
    //   <div className="h-full py-0">
    //     <Container>
    //       <div className="flex flex-col justify-center text-center">
    //         {isVisible && (
    //           <div
    //             onClick={handleScroll}
    //             className="fixed z-50 bottom-8 right-8 bg-[#bbdfff00] text-white rounded-[100%] p- cursor-pointer"
    //           >
    //             <img className="" width={50} src={top} alt="" />
    //           </div>
    //         )}

    //         {/* page1 */}
    //         <div
    //           id="page1"
    //           className="texts w-full h-[100vh] flex flex-col justify-center items text-center"
    //         >
    //           <div className="flex flex-col justify-center text-center gap-1">
    //             <h1
    //               id="backRAIN"
    //               className="NameWEB md:text-[10rem] text-[7rem] text-center text-[#4d4a4a81] font-extrabold"
    //             >
    //               BLOG
    //             </h1>
    //             {/* <br /> */}
    //             <p className="text-base md:text-xl text-slate-700 ">
    //               Create a unique and beautiful blog easily.
    //             </p>
    //             <button
    //               className="bg-[#4A2038] w-[50%] md:w-[12%] mx-auto mt-2 border-red-950 text-white p-4 rounded-md"
    //               type="button"
    //             >
    //               Create a Blog
    //             </button>
    //           </div>
    //         </div>

    //         {/* page1/2 */}
    //         <div
    //           id="page1/2"
    //           className="w-full pb-20  bg-[#EDEDEF] bg-gradient-to-r from-[#EDEDEF] to-[#F3F3F5]"
    //         >
    //           <div className="flex md:flex-row flex-col ml-8 md:ml-0 justify-center md:justify-around pt-4">
    //             <div
    //               id="left"
    //               className="left flex flex-col justify-center items-start   "
    //             >
    //               <div className="flex  flex-col justify-start items-start md:items-start gap-6 ">
    //                 <button
    //                   id="buttonUPPER1"
    //                   type="button"
    //                   className="p-[3px] px-4 rounded-2xl text-white bg-[#4A2038] border-[1px] border-[#4A2038] "
    //                 >
    //                   Scale_
    //                 </button>

    //                 <h1
    //                   id="buttonUPPER1Child"
    //                   className="text-[64px] text-start leading-tight text-[#292929] tracking-tight"
    //                 >
    //                   We scale for you
    //                 </h1>
    //                 <img
    //                   id="buttonUPPER1Image"
    //                   className="w-60 rounded-xl md:block hidden"
    //                   src={image}
    //                   alt=""
    //                 />
    //               </div>
    //             </div>

    //             <div
    //               id="right"
    //               className="right  pt-16 flex flex-col items-start justify-center"
    //             >
    //               <div className="w-[90%] flex flex-col justify-start md:justify-center">
    //                 <div
    //                   id="first"
    //                   className="flex flex-col items-start border-t-[1px] border-[#8f8f90] pb-5"
    //                 >
    //                   <h1 className=" text-8xl  text-[#414144]">30+</h1>
    //                   <span>Posts</span>
    //                 </div>

    //                 <div
    //                   id="secon"
    //                   className="flex flex-col items-start border-t-[1px] border-[#8f8f90] pb-5"
    //                 >
    //                   <h1 className=" text-8xl text-[#414144]">20+</h1>
    //                   <span>Users</span>
    //                 </div>

    //                 <div
    //                   id="thir"
    //                   className="flex flex-col items-start border-t-[1px] border-[#8f8f90] pb-5"
    //                 >
    //                   <h1 className=" text-8xl text-[#414144]">15+</h1>
    //                   <span>Organizations</span>
    //                 </div>

    //                 <div
    //                   id="fort"
    //                   className="flex flex-col items-start border-t-[1px] border-[#8f8f90] "
    //                 >
    //                   <h1 className=" text-8xl text-[#414144]">99%</h1>
    //                   <span>Guaranteed time</span>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* page2 */}
    //         <div
    //           id="page2"
    //           className="w-full md:h-[120vh]  bg-[#EDEDEF] border-shadow"
    //         >
    //           <div className="flex justify-around">
    //             <div className="middle h-[120vh] w-[100%] flex flex-col justify-center items-center gap-6 ">
    //               <button
    //                 id="buttonUPPER2"
    //                 type="button"
    //                 className="p-[3px] px-4 rounded-2xl text-white bg-[#4A2038] border-[1px] border-[#4A2038] "
    //               >
    //                 Explore_
    //               </button>
    //               <h1
    //                 id="Posthassle"
    //                 className="text-[69px] md:text-[64px] text-[#292929] leading-tight tracking-tight font-normal"
    //               >
    //                 Hang your memories
    //               </h1>
    //               <p
    //                 id="PosthassleChild"
    //                 className="text-[19px] tracking-tight w-[85%] md:w-[47%] text-center text-[#484848]"
    //               >
    //                 Save the moments that matter. Blogger lets you safely store
    //                 thousands of posts, photos, and more with Google.
    //               </p>
    //             </div>
    //           </div>
    //         </div>

    //         {/* page3 */}
    //         <div
    //           id="page3"
    //           className="page3 w-full h-[110vh] text-black bg-[#ffffff] "
    //         >
    //           <HomePageSLider />
    //         </div>

    //         {/* page4 */}
    //         <div
    //           id="page4"
    //           className="HeroOFTHEPAGE mt-[780%] md:mt-[230%] w-full md:h-[140vh] h-[180vh] bg-[#EEEEF1]"
    //         >
    //           <div className="w-full md:h-[150vh] pt-40 md:pt-10 flex flex-col justify-center items-center">
    //             <h1
    //               id="LOVEDh1Text"
    //               className="text-[60px] text-[#292929] tracking-tight leading-tight"
    //             >
    //               Loved by bloggers like you
    //               <span className="font-extrabold text-[#5b0c39]">_</span>
    //             </h1>

    //             <div
    //               id="cards"
    //               className="mt-32 flex md:flex-row flex-col flex-wrap items-center justify-center gap-6 z-10"
    //             >
    //               <div
    //                 id="card"
    //                 className="bg-[#ffffff] w-80 h-56 md:w-[27vw] md:h-[34vh] rounded-xl p-3"
    //               >
    //                 <div id="upper">
    //                   <div className="flex gap-2">
    //                     <p className="w-[42px] h-[42px] flex justify-center items-center rounded-[50%] bg-red-500">
    //                       A
    //                     </p>
    //                     <div className="flex flex-col justify-start text-left">
    //                       <span>Aryan Barodwal</span>
    //                       <span className="mt-[-4px] text-sm text-[#555557]">
    //                         @Aryan__32{" "}
    //                       </span>
    //                     </div>
    //                   </div>

    //                   <div className="flex text-start text-base mt-3 leading-5 text-[#424245] ">
    //                     Welcome to our Blogger app! We designed this platform
    //                     with a focus on enhancing individual user experiences,
    //                     ensuring that every blogger can tailor their content and
    //                     interactions to fit their unique style and needs.
    //                   </div>
    //                 </div>
    //               </div>

    //               <div
    //                 id="card"
    //                 className="bg-[#ffffff] w-80 h-56 md:w-[27vw] md:h-[34vh] rounded-xl p-3"
    //               >
    //                 <div id="upper">
    //                   <div className="flex gap-2">
    //                     <p className="w-[42px] h-[42px] flex justify-center items-center rounded-[50%] bg-blue-500">
    //                       D
    //                     </p>
    //                     <div className="flex flex-col justify-start text-left">
    //                       <span>Dharmesh Mishra</span>
    //                       <span className="mt-[-4px] text-sm text-[#555557]">
    //                         @Dhram_123{" "}
    //                       </span>
    //                     </div>
    //                   </div>

    //                   <div className="flex text-start text-base mt-3 leading-5 text-[#424245] ">
    //                     As you dive into blogging, this app offers a range of
    //                     tools to customize your posts and engage with your
    //                     audience. You can easily format your text, add
    //                     multimedia elements, and schedule posts for optimal
    //                     reach.
    //                   </div>
    //                 </div>
    //               </div>

    //               <div
    //                 id="card"
    //                 className="bg-[#ffffff] w-80 h-56 md:w-[27vw] md:h-[34vh] rounded-xl p-3"
    //               >
    //                 <div id="upper">
    //                   <div className="flex gap-2">
    //                     <p className="w-[42px] h-[42px] flex justify-center items-center rounded-[50%] bg-violet-300">
    //                       R
    //                     </p>
    //                     <div className="flex flex-col justify-start text-left">
    //                       <span>Rohan Pal</span>
    //                       <span className="mt-[-4px] text-sm text-[#555557]">
    //                         @Rohan_203{" "}
    //                       </span>
    //                     </div>
    //                   </div>

    //                   <div className="flex text-start text-base mt-3 leading-5 text-[#424245] ">
    //                     This website is awesome, the app provides a
    //                     comprehensive suite of tools designed to elevate your
    //                     blogging experience. The text editor allows for rich
    //                     formatting options, and seamless content management.
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>

    //         {/* page5 */}
    //         <div
    //           id="ending"
    //           className="w-full h-screen relative top-0 z-10 bg-[#fefefe]"
    //         >
    //           <div className="w-full h-screen text-black flex md:flex-row flex-col md:justify-between justify-center items-center gap-8">
    //             <div className="left flex flex-col mx-4 md:ml-10">
    //               <img
    //                 className="imagebuttom "
    //                 width={600}
    //                 src={heroimage}
    //                 alt=""
    //               />
    //             </div>

    //             <div className="right flex flex-col gap-6 mr-0 md:mr-4 text-center md:text-start  ">
    //               <h1 className="text-6xl text-[60px] text-[#292929] leading-tight tracking-tight font-normal">
    //                 Start your free
    //                 <br />
    //                 <span>Blogger trial now!</span>
    //               </h1>
    //               <p className="text-lg text-center">
    //                 See how easy it is to customize your blog widget with
    //                 Blogger.
    //               </p>

    //               <button
    //                 className="w-44 mx-auto md:mx-0 bg-[#4A2038] p-3 py-4 text-gray-50 rounded-md"
    //                 type="button"
    //               >
    //                 Start blogging now
    //               </button>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </Container>
    //   </div>
    // );
  // }

  return (
    <div className="h-full py-0">
      <Container>
        <div className="flex flex-col justify-center text-center">
          {isVisible && (
            <div
              onClick={handleScroll}
              className="fixed z-50 bottom-8 right-8 bg-[#bbdfff00] text-white rounded-[100%] p- cursor-pointer"
            >
              <img className="" width={50} src={top} alt="" />
            </div>
          )}

          {/* page1 */}
          <div
            id="page1"
            className="texts w-full h-[100vh] md:h-[110vh] flex flex-col justify-center items text-center"
          >
            <div className="flex flex-col justify-center text-center gap-1">
              <h1
                id="backRAIN"
                className="NameWEB md:text-[10rem] text-[7rem] text-center text-[#4d4a4a81] font-extrabold"
              >
                BLOG
              </h1>
              <p className="text-base md:text-xl text-slate-700 ">
                Create a unique and beautiful blog easily.
              </p>
              <button
                className="bg-[#4A2038] w-[50%] md:w-[12%] mx-auto mt-2 border-red-950 text-white p-4 rounded-md"
                type="button"
              >
                Create a Blog
              </button>
            </div>
          </div>

          {/* page1/2 */}
          <div
            id="page1/2"
            className="w-full pb-20  bg-[#EDEDEF] bg-gradient-to-r from-[#EDEDEF] to-[#F3F3F5]"
          >
            <div className="flex md:flex-row flex-col ml-8 md:ml-0 justify-center md:justify-around pt-4">
              <div
                id="left"
                className="left flex flex-col justify-center items-start   "
              >
                <div className="flex  flex-col justify-start items-start md:items-start gap-6 ">
                  <button
                    id="buttonUPPER1"
                    type="button"
                    className="p-[3px] px-4 rounded-2xl text-white bg-[#4A2038] border-[1px] border-[#4A2038] "
                  >
                    Scale_
                  </button>

                  <h1
                    id="buttonUPPER1Child"
                    className="text-[64px] text-start leading-tight text-[#292929] tracking-tight"
                  >
                    We scale for you
                  </h1>
                  <img
                    id="buttonUPPER1Image"
                    className="w-60 rounded-xl md:block hidden"
                    src={image}
                    alt=""
                  />
                </div>
              </div>

              <div
                id="right"
                className="right  pt-16 flex flex-col items-start justify-center"
              >
                <div className="w-[90%] flex flex-col justify-start md:justify-center">
                  <div
                    id="first"
                    className="flex flex-col items-start border-t-[1px] border-[#8f8f90] pb-5"
                  >
                    <h1 className=" text-8xl  text-[#414144]">30+</h1>
                    <span>Posts</span>
                  </div>

                  <div
                    id="secon"
                    className="flex flex-col items-start border-t-[1px] border-[#8f8f90] pb-5"
                  >
                    <h1 className=" text-8xl text-[#414144]">20+</h1>
                    <span>Users</span>
                  </div>

                  <div
                    id="thir"
                    className="flex flex-col items-start border-t-[1px] border-[#8f8f90] pb-5"
                  >
                    <h1 className=" text-8xl text-[#414144]">15+</h1>
                    <span>Organizations</span>
                  </div>

                  <div
                    id="fort"
                    className="flex flex-col items-start border-t-[1px] border-[#8f8f90] "
                  >
                    <h1 className=" text-8xl text-[#414144]">99%</h1>
                    <span>Guaranteed time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* page2 */}
          <div
            id="page2"
            className="w-full md:h-[120vh]  bg-[#EDEDEF] border-shadow"
          >
            <div className="flex justify-around">
              <div className="middle h-[120vh] w-[100%] flex flex-col justify-center items-center gap-6 ">
                <button
                  id="buttonUPPER2"
                  type="button"
                  className="p-[3px] px-4 rounded-2xl text-white bg-[#4A2038] border-[1px] border-[#4A2038] "
                >
                  Explore_
                </button>
                <h1
                  id="Posthassle"
                  className="text-[69px] md:text-[64px] text-[#292929] leading-tight tracking-tight font-normal"
                >
                  Hang your memories
                </h1>
                <p
                  id="PosthassleChild"
                  className="text-[19px] tracking-tight w-[85%] md:w-[47%] text-center text-[#484848]"
                >
                  Save the moments that matter. Blogger lets you safely store
                  thousands of posts, photos, and more with Google.
                </p>
              </div>
            </div>
          </div>

          {/* page3 */}
          <div
            id="page3"
            className="page3 w-full h-[110vh] text-black bg-[#ffffff] "
          >
            <HomePageSLider />
          </div>

          {/* page4 */}
          <div
            id="page4"
            className="HeroOFTHEPAGE mt-[780%] md:mt-[230%] w-full md:h-[140vh] h-[180vh] bg-[#EEEEF1]"
          >
            <div className="w-full md:h-[150vh] pt-40 md:pt-10 flex flex-col justify-center items-center">
              <h1
                id="LOVEDh1Text"
                className="text-[60px] text-[#292929] tracking-tight leading-tight"
              >
                Loved by bloggers like you
                <span className="font-extrabold text-[#5b0c39]">_</span>
              </h1>

              <div
                id="cards"
                className="mt-32 flex md:flex-row flex-col flex-wrap items-center justify-center gap-6 z-10"
              >
                <div
                  id="card"
                  className="bg-[#ffffff] w-80 h-56 md:w-[27vw] md:h-[34vh] rounded-xl p-3"
                >
                  <div id="upper">
                    <div className="flex gap-2">
                      <p className="w-[42px] h-[42px] flex justify-center items-center rounded-[50%] bg-red-500">
                        A
                      </p>
                      <div className="flex flex-col justify-start text-left">
                        <span>Aryan Barodwal</span>
                        <span className="mt-[-4px] text-sm text-[#555557]">
                          @Aryan__32{" "}
                        </span>
                      </div>
                    </div>

                    <div className="flex text-start text-base mt-3 leading-5 text-[#424245] ">
                      Welcome to our Blogger app! We designed this platform with
                      a focus on enhancing individual user experiences, ensuring
                      that every blogger can tailor their content and
                      interactions to fit their unique style and needs.
                    </div>
                  </div>
                </div>

                <div
                  id="card"
                  className="bg-[#ffffff] w-80 h-56 md:w-[27vw] md:h-[34vh] rounded-xl p-3"
                >
                  <div id="upper">
                    <div className="flex gap-2">
                      <p className="w-[42px] h-[42px] flex justify-center items-center rounded-[50%] bg-blue-500">
                        D
                      </p>
                      <div className="flex flex-col justify-start text-left">
                        <span>Dharmesh Mishra</span>
                        <span className="mt-[-4px] text-sm text-[#555557]">
                          @Dhram_123{" "}
                        </span>
                      </div>
                    </div>

                    <div className="flex text-start text-base mt-3 leading-5 text-[#424245] ">
                      As you dive into blogging, this app offers a range of
                      tools to customize your posts and engage with your
                      audience. You can easily format your text, add multimedia
                      elements, and schedule posts for optimal reach.
                    </div>
                  </div>
                </div>

                <div
                  id="card"
                  className="bg-[#ffffff] w-80 h-56 md:w-[27vw] md:h-[34vh] rounded-xl p-3"
                >
                  <div id="upper">
                    <div className="flex gap-2">
                      <p className="w-[42px] h-[42px] flex justify-center items-center rounded-[50%] bg-violet-300">
                        R
                      </p>
                      <div className="flex flex-col justify-start text-left">
                        <span>Rohan Pal</span>
                        <span className="mt-[-4px] text-sm text-[#555557]">
                          @Rohan_203{" "}
                        </span>
                      </div>
                    </div>

                    <div className="flex text-start text-base mt-3 leading-5 text-[#424245] ">
                      This website is awesome, the app provides a comprehensive
                      suite of tools designed to elevate your blogging
                      experience. The text editor allows for rich formatting
                      options, and seamless content management.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* page5 */}
          <div
            id="ending"
            className="w-full h-screen relative top-0 z-10 bg-[#fefefe]"
          >
            <div className="w-full h-screen text-black flex md:flex-row flex-col md:justify-between justify-center items-center gap-8">
              <div className="left flex flex-col mx-4 md:ml-10">
                <img
                  className="imagebuttom "
                  width={600}
                  src={heroimage}
                  alt=""
                />
              </div>

              <div className="right flex flex-col gap-6 mr-0 md:mr-4 text-center md:text-start  ">
                <h1 className="text-6xl text-[60px] text-[#292929] leading-tight tracking-tight font-normal">
                  Start your free
                  <br />
                  <span>Blogger trial now!</span>
                </h1>
                <p className="text-lg text-center">
                  See how easy it is to customize your blog widget with Blogger.
                </p>

                <button
                  className="w-44 mx-auto md:mx-0 bg-[#4A2038] p-3 py-4 text-gray-50 rounded-md"
                  type="button"
                >
                  Start blogging now
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Home;
