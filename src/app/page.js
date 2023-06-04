import Blog from "@/components/Blog";
import BlogList from "@/components/BlogList";

export default function Home() {
  return (
    <div className="w-[70%] mx-auto">
      <Blog/>
      <BlogList/>
    </div>
  );
}
