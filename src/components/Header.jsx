import React from "react";

const Header = () => {
  return (
    <div className="relative w-[70%] mx-auto mt-6 flex justify-between gap-24 items-center">
      <div>
        <img
          src="https://s.yimg.com/rz/p/yahoo_homepage_en-US_s_f_p_bestfit_homepage.png"
          alt=""
        />
      </div>
    
        <input
          placeholder="What's on your mind"
          className="w-full outline-none text-sm rounded border-[1px] border-blue-700 px-6 py-3"
        />
      
 
      <div className="">
        <button className="border-[1px] border-blue-700 px-4 py-2 rounded-full text-sm hover:bg-blue-700 hover:text-white">Signup</button>
      </div>
    </div>
  );
};

export default Header;

