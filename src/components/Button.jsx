import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";
import classNames from "classnames";

const Button = ({children, onClick , className}) => {
  return (
    <button className={className} onClick={onClick}>
        {children}
        <IoIosArrowRoundForward  size={20}/>
    </button>
  )
}

export default Button