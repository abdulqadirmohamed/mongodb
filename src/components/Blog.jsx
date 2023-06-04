import Link from "next/link";
import React from "react";

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
  return <div>
    {data.map((post)=>(
        <div key={post._id} className="my-6">
            <Link className="font-bold text-2xl my-2" href={`/blog/${post._id}`}>{post.title}</Link>
            <p className="my-2">{post.desc}</p>
            <hr />
        </div>
    ))}
  </div>;
};

export default Blog;
