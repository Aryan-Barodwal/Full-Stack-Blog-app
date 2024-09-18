import React, { useCallback } from "react";
import authService from "../appwrite/auth";
import { useState, useEffect } from "react";

import appwriteService from "../appwrite/config";
import YourPostsComponent from "./YourPostsComponent";
import UserProfile from "./YourUserDetails";

const YourAccount = () => {
  const [data, setdata] = useState([]);

  const [posts, setPosts] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      //permisions-> user(read) user(update) user(delete) |||userId|||
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, []);

  const handleUserData = useCallback(
    (userData) => {
      if (userData && userData !== data) {
        setdata(userData);
      }
    },
    [data]
  );

  useEffect(() => {
    authService.getCurrentUser().then(handleUserData);
  }, [handleUserData]);

  return (
    <div className="YourAccount mt-16 py-8 w-full h-[180vh] md:h-[120vh]  ">
      <div className="flex flex-col gap-4 px-5">
        <h1 className="border border-slate-500 border-none rounded-md bg-gradient-to-r from-[#b0caf7] via-[#bccff0] to-slate-200 p-2 ">
          <span className="hover:border-b- border-gray-300 cursor-pointer font-bold">
            About user
          </span>
        </h1>

        <div className=" flex flex-col md:flex-row gap-2">
          <div className="md:w-[30%] w-full pt-20 flex flex-col justify-start items-center bg-[#f2f3f4] rounded-md">
            <h1 className="w-20 bg-[#D1DDF0] h-20 rounded-[50%] flex justify-center items-center">
              <i className="ri-contacts-line text-2xl "></i>
            </h1>

            <div className="flex gap-2 justify-center items-center ">
              <h1 className="text-[1.75rem] text-gray-800 font-semibold ">
                {data.name}{" "}
              </h1>
              <h1>
                {data.emailVerification === true ? (
                  <i className="ri-verified-badge-fill text-cyan-600 text-2xl"></i>
                ) : (
                  <i className="ri-cloud-off-fill text-red-700 text-xl"></i>
                )}
              </h1>
            </div>
            <div className="flex flex-col justify-center items-center">
              <h1>New Delhi, India</h1>
              <br />
              <h1 className="flex flex- justify-center items-center text-base">
                New user <i className="ri-star-fill text-yellow-500"></i>
              </h1>
              <br />

              <h1 className="flex flex-col gap-6">
                <p className="flex flex-row gap-6">
                  <p className="flex flex-col justify-center items-center">
                    1 <br />
                    <span className="text-sm text-zinc-800">Friends</span>
                  </p>
                  <p className="flex flex-col justify-center items-center">
                    0
                    <br />
                    <span className="text-sm text-zinc-800">Photos</span>
                  </p>
                  <p className="flex flex-col justify-center items-center">
                    0 <br />
                    <span className="text-sm text-zinc-800">Posts</span>
                  </p>{" "}
                </p>
                <button
                  className="p-2 my-6 px-4 bg-[#B4CCF5] rounded-sm"
                  type="button"
                >
                  Explore <i className="ri-arrow-right-up-line"></i>
                </button>
              </h1>
            </div>
            <br />
          </div>

          <div className="md:w-[70%] w-full flex flex-col justify-center  items-center bg-[#f2f3f4] rounded-md">
            <UserProfile data={data} posts={posts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourAccount;
