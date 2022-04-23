import React from "react";
import { PROGRAM } from "constants/constants";

interface IProgramProps {}

const MyProgram: React.FC<IProgramProps> = () => {
  return (
    <div className='w-86 lg:ml-4 mb-8'>
      <h2 className='font-bold text-xl lg:text-2xl w-80 self-start mb-5 lg:mb-9'>
        What's in my program?
      </h2>
      <ul>
        {PROGRAM.map(({ id, image, header, text }) => {
          return (
            <li
              key={id}
              className='flex flex-row items-center justify-left my-3'
            >
              <img src={image} alt='icon' className='w-12 h-12' />
              <div>
                <h3 className='text-base font-semibold pl-2'>{header}</h3>
                <p className='text-xs font-normal pl-2 opacity-60'>{text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MyProgram;
