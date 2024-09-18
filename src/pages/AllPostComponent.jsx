import Masonry from "react-masonry-css";

import React from "react";
import { PostCard } from "../components/index";
import "./AllPostsComponent.css";

const YourPostsComponent = ({ posts, data }) => {
  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid2"
      columnClassName="my-masonry-grid_column2"
    >
      {/* {posts.length === 0 && <div>NO Posts</div>} */}
      {posts.map((post) => (
        <div key={post.$id} className=" ">
          <PostCard {...post}  />
        </div>
      ))}
    </Masonry>
  );
};

export default YourPostsComponent;
