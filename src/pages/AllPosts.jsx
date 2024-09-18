import React, { useState, useEffect, useCallback } from "react";
import { Container, PostCard } from "../components/index";
import appwriteService from "../appwrite/config";
import "./AllPosts.css";
import authService from "../appwrite/auth";

import AllPostComponent from "./AllPostComponent";

function AllPosts() {
  const [data, setdata] = useState([]);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false); // Stop loading once posts are fetched
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
    <div className="w-full pt-8 mt-16 mb-10 h-[100vh]">
      <Container>
        <div className="flex flex-col gap-4 px-5 h-[100vh]">
          <h1 className="border border-slate-500 border-none rounded-md bg-gradient-to-r from-[#b0caf7] via-[#bccff0] to-slate-200 p-2 ">
            <span className="hover:border-b- border-gray-300 cursor-pointer font-bold">
              All Blogs
            </span>
          </h1>

          {loading ? (
            <div className="loader w-full mx-auto"></div>
          ) : (
            <div className="AllPosts overflow-scroll">
              <AllPostComponent posts={posts} data={data} />
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
