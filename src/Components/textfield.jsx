import React from 'react';
import downArrow from "../Images/down-arrow.svg";

const textfield = ({icon, inputData, placeholder}) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row input relative mt-6">
              <button className="w-fit ml-2 md:ml-0 order-2 md:order-1 mt-3 md:mt-0 bg-blue-600 flex  text-white py-2 px-6 rounded-3xl">
                Anywhere
                <img src={downArrow} className="pt-2 pl-2" alt="" />
              </button>
              <img src={icon} className="absolute md:right-[4px] top-[2px] right-0" alt="" />
              <input
                type="text"
                value={inputData}
                className="h-10 order-1 md:order-2 border-2 border-zinc-400 px-4 w-full rounded-3xl ml-2"
                placeholder={placeholder}
              />
            </div>
    </div>
  )
}

export default textfield
