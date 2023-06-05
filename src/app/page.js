import Blog from "@/components/Blog";
import BlogList from "@/components/BlogList";

export default function Home() {
  return (
    <div className="w-[90%] mx-auto">
      <Blog />
      <hr />
      <BlogList />
    </div>
  );
}
