import React from "react";

interface IProps {
  children?: React.ReactNode;
}

export const Button: React.FC<IProps> = ({ children }) => (
  <button className='text-white bg-orange-400 w-86 h-14 rounded-lg text-base shadow-lg shadow-orange-500/50 hover:bg-orange-500 my-2'>
    {children}
  </button>
);
