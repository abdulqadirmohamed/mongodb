import React from "react";


const BlogListCards =  ({tag}) => {
   
  return (
    <div className="flex gap-6 shadow-sm">
      <div>
        <img
        className="w-56"
          src="https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg"
          alt=""
        />
      </div>
      <div>
        <div className="text-[12px] flex gap-4">
          <span className="font-semibold text-blue-700 capitalize">{tag}</span>
          <span className="text-gray-500">17 hours ago</span>
        </div>
        <div className="mt-4">
            <h1 className="font-bold text-[18px]">Lorem ipsum dolor sit amet consectetur</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, odit!</p>
        </div>
      </div>
    </div>
  );
};

export default BlogListCards;
