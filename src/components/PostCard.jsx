import React from "react";
import service from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-200 border border-gray-200 rounded-xl p-4">
        <div className="w-full justify-center mb-4">
          <img
            src={service.getFilePreview(featuredImage)}
            alt={title}
            className="rounded-xl"
          />
        </div>
        <h2 className="text-lg font-normal">
          {title} 
         
          <span className="text-sky-600 text-sm"> MORE</span>
        </h2>
      </div>
    </Link>
  );
}

export default PostCard;
