import Image from "next/image";
import React from "react";
import {GoCommentDiscussion} from 'react-icons/go'


const BlogListCards =  ({tag, cover}) => {
   
  return (
    <div className="flex gap-6 shadow-sm">
      <div>
        <Image
        className="w-56 rounded"
          src={cover}
          alt="Image"
          height={100}
          width={200}
        />
      </div>
      <div>
        <div className="text-[12px] flex gap-4">
          <span className="font-semibold text-blue-700 capitalize">{tag}</span>
          <span className="text-gray-500">17 hours ago</span>
        </div>
        <div className="mt-4">
            <h1 className="font-bold text-[18px] hover:text-blue-700 my-1">Lorem ipsum dolor sit amet consectetur</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, odit!</p>
        </div>
        <div className="text-[12px] flex gap-4 mt-3 text-gray-500">
          <span className="font-semibold capitalize flex items-center gap-1"><GoCommentDiscussion/> 1.2k</span>
          <span >2 min read</span>
        </div>
      </div>
    </div>
  );
};

export default BlogListCards;
