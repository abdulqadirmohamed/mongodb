import React from "react";
import { notFound } from "next/navigation";

async function getData(id) {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`, {
    cache: "no-store",
  });
  // if (!res.ok) {
  //   return notFound()
  // }
  // if (!res.ok) {
  //   throw new Error('Failed to fetch data')
  // }


  return res.json();
}
// const page = async ({ params }) => {
const BlogPost = async ({ params }) => {
  const data = await getData(params.id);

  return (
    <div>
      <h1 className="font-bold my-2 capitalize">{data.title}</h1>
      <p>{data.desc}</p>
    </div>
  );
};

export default BlogPost;
