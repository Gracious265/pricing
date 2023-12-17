import React from "react";
import { LiaFileCode } from "react-icons/lia";

const Navbar = () => {
  return (
    <div className="h-20 bg-[#313638] w-full flex justify-between items-center p-4">
      <div className="text-gray-50 cursor-pointer">
        <LiaFileCode size={40} />
      </div>
      <div className="flex gap-x-2 mr-2">
        <p className="border-[0.5px] px-3 py-1 rounded-md text-gray-50 cursor-pointer">
          Log In
        </p>
        <p className="border-0 px-4 py-1 rounded-md text-black bg-gray-50 cursor-pointer">
          Sign Up
        </p>
      </div>
    </div>
  );
};

export default Navbar;
