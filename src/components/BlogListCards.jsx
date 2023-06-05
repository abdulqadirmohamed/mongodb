import Image from "next/image";
import Link from "next/link";
import React from "react";
import { GoCommentDiscussion } from "react-icons/go";

const BlogListCards = ({ tag, cover, postID, title }) => {
  return (
    <Link href={`/blog/${postID}`}>
      <div className="flex gap-6 shadow-sm p-2 items-center">
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
            <span className="font-semibold text-blue-700 capitalize">
              {tag}
            </span>
            <span className="text-gray-500">17 hours ago</span>
          </div>
          <div className="mt-4">
            <h1 className="font-bold text-[18px] hover:text-blue-700 my-1 line-clamp-2">
              {title}
            </h1>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              odit!
            </p>
          </div>
          <div className="text-[12px] flex gap-4 mt-2 text-gray-500">
            <span className="font-semibold capitalize flex items-center gap-1">
              <GoCommentDiscussion /> 1.2k
            </span>
            <span>2 min read</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogListCards;
