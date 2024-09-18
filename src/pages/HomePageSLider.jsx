import React, { useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
import createaccount from "../../src/assets/create_account.png";
import createblog from "../../src/assets/createblog.png";
import updateblog from "../../src/assets/updateblog.png";
import Allblogs from "../../src/assets/Allblogs.png";
import youraccount from "../../src/assets/youraccount.png";

const HomePageSlider = () => {
  useGSAP(() => {
    const scrollTween = gsap.to(".container section", {
      transform: "translateX(-485%)", 
      duration: 1,
      scrollTrigger: {
        trigger: ".page3",
        scroller: "body",
        pin: true,
        scrub: 1,
        // start:"-10%",

        end: "+=3000",
      },
    });

    const container = document.querySelector(".container");
    const sections = gsap.utils.toArray(".container section");
    const texts = gsap.utils.toArray(".anim");
    const mask = document.querySelector(".mask");

    gsap.to(mask, {
      width: "100%",
      ease: "power2.out",
      scrollTrigger: {
        // trigger: ".container",
        trigger: ".page3",
        scroller: "body",
        start: "top left",
        end: "+=3000",
        scrub: 1,
        // markers:true
      },
    });

    sections.forEach((section) => {
      let text = section.querySelectorAll(".anim");
      if (text.length === 0) return;

      gsap.from(text, {
        y: -130,
        opacity: 0,
        duration: 2,
        delay: 0,
        ease: "elastic",
        stagger: 0.1,
        scrollTrigger: {
          trigger: section,
          containerAnimation: scrollTween,
          start: "left 135% center",
          // end: "left", // scrub:2,/
          // markers: true,
        },
      });
    });
  });

  return (
    <>
      <div className="wrapper w-screen h-[100vh] flex flex-col justify-center items-start ">
        <div className="container scrollx pl-10 md:pl-32 flex flex-col gap-8">
          <span className="w-[20rem] md:w-[67%]">
            <svg
              viewBox="0 0 900 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                fill="#D9D9D9"
              />
              <mask
                id="mask0_0_1"
                style={{ maskType: "alpha" }} // <-- Updated to an object
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="900"
                height="10"
              >
                <path
                  d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z"
                  fill="#D9D9D9"
                />
              </mask>
              <g mask="url(#mask0_0_1)">
                <rect className="mask" y="-49" height="99" fill="#010407" />
              </g>
            </svg>
          </span>

          <div className="sliderMain flex w-[370rem] gap-14">
            <section className="sec1 pin w-screen flex flex-col justify-start items-start gap-4 ">
              <div className="flex flex-col justify-start items-start">
                <span className="text-xl">Advanced</span>
                <h1 className="text-[3rem] font-[799]">Create Account</h1>
              </div>

              <div className="flex justify-start flex-col md:flex-row text-start md:text-left items-start md:items-center text-base font-normal gap-10">
                <p className=" border--600 w-[80%] md:w-[40%]">
                  <img src={createaccount} alt="" />
                </p>
                <p className=" border--600 w-[80%] md:w-[40%]">
                  {/* Your journey as a blogger starts here! Whether you're a seasoned writer or just starting out, Blogger is the perfect place to share your stories with the world. */}
                  Welcome to a world where your words matter! Whether you're
                  passionate about storytelling, sharing tips, or exploring new
                  ideas, Blogger gives you the platform to express yourself and
                  connect with readers from all corners of the globe. Every post
                  you write can spark conversation, inspire action, and leave a
                  lasting impression. So, why wait? Begin your blogging
                  adventure today, and watch your voice become part of the
                  global conversation.
                </p>
              </div>
            </section>

            <section className="sec2 pin w-screen flex flex-col justify-start items-start gap-4 ">
              <div className="flex flex-col justify-start items-start">
                <span className="text-xl">Advanced</span>
                <h1 className="text-[3rem] font-[799]">Create Blog</h1>
              </div>

              <div className="anim flex justify-start flex-col md:flex-row text-start md:text-left items-start md:items-center text-base font-normal gap-10">
                <p className=" border--600 w-[80%] md:w-[40%]">
                  <img src={createblog} alt="" />
                </p>
                <p className=" border--600 w-[80%] md:w-[40%]">
                  Creating a blog is the first step toward building your online
                  presence. Whether you’re looking to showcase your expertise,
                  share personal experiences, or inspire others, Blogger offers
                  the tools you need to design and manage a successful blog.
                  From selecting a theme to writing your first post, every part
                  of the process is intuitive and customizable. Take control of
                  your content, reach new audiences, and bring your unique ideas
                  to life. Start your blog today, and see how far your words can
                  go!
                </p>
              </div>
            </section>

            <section className="sec3 pin w-screen flex flex-col justify-start items-start gap-4 ">
              <div className="flex flex-col justify-start items-start">
                <span className="text-xl">Advanced</span>
                <h1 className="text-[3rem] font-[799]">Update Blog</h1>
              </div>

              <div className="anim flex justify-start flex-col md:flex-row text-start md:text-left items-start md:items-center text-base font-normal gap-10">
                <p className=" border--600 w-[80%] md:w-[40%]">
                  <img src={updateblog} alt="" />
                </p>
                <p className=" border--600 w-[80%] md:w-[40%]">
                  Keeping your blog updated is key to staying relevant and
                  engaging with your audience. Whether you're adding new
                  insights, refining old posts, or simply freshening up your
                  content, Blogger makes it easy to manage updates. Regularly
                  revisiting your blog keeps it dynamic, ensuring that your
                  readers always have something new to explore. Stay connected
                  with your audience by delivering fresh content, improving SEO,
                  and maintaining the flow of your stories. Update your blog
                  today and continue the conversation with your readers!
                </p>
              </div>
            </section>

            <section className="sec4 pin w-screen flex flex-col justify-start items-start gap-4 ">
              <div className="flex flex-col justify-start items-start">
                <span className="text-xl">Advanced</span>
                <h1 className="text-[3rem] font-[799]">All Blogs</h1>
              </div>

              <div className="anim flex justify-start flex-col md:flex-row text-start md:text-left items-start md:items-center text-base font-normal gap-10">
                <p className=" border--600 w-[80%] md:w-[40%]">
                  <img src={Allblogs} alt="" />
                </p>
                <p className=" border--600 w-[80%] md:w-[40%]">
                  Explore a world of ideas with our All Blogs page, where every
                  post is just a click away. Whether you're catching up on the
                  latest updates, revisiting old favorites, or discovering new
                  topics, this page provides a gateway to all the content you’ve
                  created. Stay organized and keep track of your blog’s journey
                  with an easy-to-navigate layout. From informative articles to
                  personal stories, your entire collection is at your
                  fingertips. Dive into your blog library today and see how your
                  content has grown and evolved!
                </p>
              </div>
            </section>

            <section className="sec5 pin w-screen flex flex-col justify-start items-start gap-4 ">
              <div className="flex flex-col justify-start items-start">
                <span className="text-xl">Advanced</span>
                <h1 className="text-[3rem] font-[799]">Your Account</h1>
              </div>

              <div className="anim flex justify-start flex-col md:flex-row text-start md:text-left items-start md:items-center text-base font-normal gap-10">
                <p className=" border--600 w-[80%] md:w-[40%]">
                  <img src={youraccount} alt="" />
                </p>
                <p className=" border--600 w-[80%] md:w-[40%]">
                  Manage your blogging experience with ease on the Your Account
                  page. Here, you can update your personal information,
                  customize settings, and keep track of your activity. Whether
                  you need to change your profile details, review your
                  subscription, or adjust your preferences, everything is
                  conveniently located in one place. Stay in control of your
                  blogging journey by keeping your account up to date and
                  secure. Visit Your Account today and ensure everything is
                  tailored to suit your needs!
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      <section style={{ backgroundColor: "lightblue" }}></section>
    </>
  );
};

export default HomePageSlider;
