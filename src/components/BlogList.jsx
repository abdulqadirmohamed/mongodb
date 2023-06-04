import React from "react";
import BlogListCards from "./BlogListCards";

async function getData() {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
const BlogList = async () => {
  const data = await getData();
  return (
    <div className="grid grid-cols-2 gap-4 mt-5">
      {data.map((post) => (
        <BlogListCards tag={post.tag} cover={post.img}/>
      ))}
    </div>
  );
};

export default BlogList;
