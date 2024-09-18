import React, { useState } from "react";
import YourPostsComponent from "./YourPostsComponent";
import "./YourUserDetails.css";

const UserProfile = ({ data, loading, posts }) => {
  const [activeTab, setActiveTab] = useState("details");

  // Handler to set the active tab
  const handleButtonClick = (tab) => {
    setActiveTab(tab);
  };
  // console.log(posts)

  // Function to render content based on the active tab
  const renderContent = () => {
    switch (activeTab) {
      case "details":
        return <UserDetails />;
      case "posts":
        return <UserPosts />;
      case "status":
        return <UserStatus />;
      default:
        return null;
    }
  };

  return (
    <div className="h-[98vh] w-full  border--400 ">
      <div className="w-full flex justify-center items-center gap-10">
        {/*  */}
        <div className="w-[80%] h- p-2 mt-2 flex justify-center gap-14 md:gap-10">
          <button
            className="hover:border-b-[1.5px] border-blue-500 text-base"
            onClick={() => handleButtonClick("details")}
          >
            <i className="ri-article-line"></i>Details
          </button>

          <button
            className="hover:border-b-[1.5px] border-blue-500 text-base"
            onClick={() => handleButtonClick("posts")}
          >
            <i className="ri-passport-line"></i>Posts
          </button>

          <button
            className="hover:border-b-[1.5px] border-blue-500 text-base"
            onClick={() => handleButtonClick("status")}
          >
            <i className="ri-bar-chart-grouped-line"></i>Status
          </button>
        </div>
      </div>

      <div className="SCROLLERTEXT h-[70%] mt-3 mx-2 p-2 px-2  rounded-md relative z-10 overflow-y-scroll">
        {renderContent()}
      </div>
    </div>
  );

  // Example components for each tab

  function UserDetails() {
    return (
      <div
        id="top"
        className="w-[100%] rounded-[3px] p-2 flex justify-start flex-col text-center px-4"
      >
        <ul className="flex flex-col justify-center gap-1 ">
          <h1 className="text-lg text-left p- rounded-sm hover:border-sky-600 cursor-pointer">
            <span className="text-[#496d9b]">
              <i class="ri-id-card-fill"></i>{" "}
            </span>
            {data.name}
          </h1>
          <h1 className="text-lg text-left p- rounded-sm hover:border-sky-600 cursor-pointer">
            <span className="text-[#496d9b]">
              <i class="ri-mail-send-fill"></i>{" "}
            </span>
            {data.email}
          </h1>
          <h1 className="text-lg text-left rounded-sm hover:border-sky-600 cursor-pointer">
            <span className="text-[#496d9b]">
              <i class="ri-dv-fill"></i>{" "}
            </span>
            {data.$id}
          </h1>
          <h1 className="text-lg text-left rounded-sm hover:border-sky-600 cursor-pointer">
            <span className="text-[#496d9b]">
              <i class="ri-calendar-2-fill"></i>{" "}
            </span>{" "}
            {data.$createdAt}
          </h1>

          <h1 className="text-lg text-left rounded-sm hover:border-sky-600 cursor-pointer">
            <span className="text-[#496d9b]">
              <i class="ri-signpost-fill"></i>{" "}
            </span>{" "}
            00
          </h1>

          <h1 className="text-lg text-left rounded-sm hover:border-sky-600 cursor-pointer">
            <span className="text-[#496d9b]">
              <i class="ri-bar-chart-box-fill"></i>{" "}
            </span>{" "}
            -{" "}
            {data.emailVerification === true ? (
              <>
                <span>Verified</span>{" "}
                <i className="ri-verified-badge-fill text-cyan-600 text-2xl"></i>
              </>
            ) : (
              <>
                <span>Unauthenticated user</span>{" "}
                <i className="ri-cloud-off-fill text-red-700 text-xl"></i>
              </>
            )}
          </h1>
        </ul>
      </div>
    );
  }

  function UserPosts() {
    return (
      <div
        id="buttom"
        className="w-[100%] rounded-[6px] p-1 flex flex-col text-center px-4"
      >
        {loading ? (
          <div className="loader w-full mx-auto"></div>
        ) : (
          <div
            id="YourPosts"
            className="YourPosts mt-2 w-[100%] flex flex-wrap items-stretch overflow-y-scrol"
          >
            <YourPostsComponent posts={posts} data={data} />
          </div>
        )}
      </div>
    );
  }

  function UserStatus() {
    return (
      <div className="text-center w-full h-full flex justify-center items-center text-xl">
        {data.emailVerification === true ? (
          <>
            <span>Verified</span>{" "}
            <i className="ri-verified-badge-fill text-cyan-600 text-2xl"></i>
          </>
        ) : (
          <>
            <span>Unauthenticated user</span>{" "}
            <i className="ri-cloud-off-fill text-red-700 text-xl"></i>
          </>
        )}
      </div>
    );
  }
};

export default UserProfile;
