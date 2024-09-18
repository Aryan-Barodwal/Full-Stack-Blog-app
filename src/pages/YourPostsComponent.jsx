import Masonry from "react-masonry-css";
import React from "react";
import { PostCard } from "../components/index";
import "./YourPostsComponent.css";

const YourPostsComponent = ({ posts, data }) => {
  const breakpointColumnsObj = {
    default: 5,
    1100: 4,
    700: 3,
    500: 2,
  };

  const filteredPosts = posts.filter((post) => post.userId === data.$id);

  return (
    <div>
      {filteredPosts.length === 0 ? (
        <div className="bg--600 text-base no-posts-message md:w-[60vw] w-[70vw] h-[60vh] flex justify-center items-center">No posts yet</div>
      ) : (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {filteredPosts.map((post) => (
            <div key={post.$id} className="">
              <PostCard {...post} />
            </div>
          ))}
        </Masonry>
      )}
    </div>
  );
};

export default YourPostsComponent;
