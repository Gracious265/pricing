import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import classNames from "classnames";

const Button = ({children, onClick , className}) => {
  return (
    <button className={`px-3 py-2 border-[1px]  border-black flex justify-between items-center w-full rounded-md ${className}`} onClick={onClick}>
        {children}
        <IoIosArrowRoundForward  size={20}/>
    </button>
  )
}

export default Button