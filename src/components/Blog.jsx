import Image from "next/image";
import Link from "next/link";
import React from "react";
import BlogCards from "./BlogCards";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts",{
    cache: 'no-store'
  });
  
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const Blog = async () => {
    const data = await getData()
  return <div className="grid grid-cols-3 gap-10">
    {data.map((post)=>(
        <div key={post._id} className="my-6">
          <BlogCards postID={post._id} cover={post.img} title={post.title} tag={post.tag}/>
        </div>
    ))}
  </div>;
};

export default Blog;
