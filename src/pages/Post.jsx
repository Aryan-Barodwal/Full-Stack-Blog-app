import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

import "./Post.css";

export default function Post() {
  const [post, setPost] = useState(null);

  const { slug } = useParams();

  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else navigate("/");
  }, [slug, navigate]);

  const handleclick = () => {
    navigate("/all-posts");
  };

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? ( //This is rendered if i cliked on a post
    <div className="py-8 px-5 h-full pt-8 mt-16 ">
      <Container>
        <h1 className="border border-slate-500 border-none rounded-md bg-gradient-to-r from-[#b0caf7] via-[#bccff0] to-slate-200 p-2 mb-4">
          <span className="hover:border-b- border-gray-300 cursor-pointer font-bold">
            About Post
          </span>
        </h1>

        <div className="w-full flex flex-col justify-center mb-4 relative  border rounded-xl p-2">
          <i
            onClick={handleclick}
            className="ri-arrow-drop-left-line absolute top-4 left-4 text-2xl p-1 h-9  border--100 rounded-lg bg-gray-100 flex items-center cursor-pointer"
          ></i>

          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />

          {isAuthor && (
            <div className="absolute right-4 top-4 md:top-4">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgColor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>

        {/* <div className="browser-css">{parse(post.content)}</div> */}
        <div className="browser-css">{parse(post.contents)}</div>
      </Container>
    </div>
  ) : (
    <>
      {/* <div className="loader-top w-full h-[100vh] relative top-[90%]"> */}
      <div className="loader-top w-full my-60 h-[20vh] flex justify-center items-center">
        <div className="loader"></div>
      </div>
    </>
  );
}
