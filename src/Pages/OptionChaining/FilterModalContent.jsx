import React from "react";

const FilterModalContent = ({handleClose}) => {
  return (
    <>
      <div className="px-[13px] pt-[10px]">
        <div className="relative">
          <span className="satoshi-font text-[14px] font-[700]">Filters</span>
          <img className="absolute inline-block right-0 top-[20%] cursor-pointer" onClick={() => handleClose()} src="Close_X.png" />
        </div>
        <div className="ltp-range pt-[20px]">
          <p className="text-[12px] pb-[5px] satoshi-font">LTP Range</p>
          <div className="flex justify-between">
            <LTPRange placeholder={"Minimum LTP"} />
            <span className="w-[6px] h-[16px] relative top-[5px]">-</span>
            <LTPRange placeholder={"Maximum LTP"} />
          </div>
          <div className="flex justify-between items-center pt-[12px]">
            <span className="satoshi-font text-[12px]">LTP change % by</span>
            <select className="w-[100px] h-[30px] border-[1px] border-[#D3D3D3] rounded-none shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-xs">
              <option className="text-[11px] satoshi-font">Today Open</option>
            </select>
          </div>
          <div className="flex justify-between items-center pt-[12px]">
            <span className="satoshi-font text-[12px]">Specific strike</span>
            <LTPRange />
          </div>
          <div className="flex justify-between items-center pt-[12px] mb-[15px]">
            <span className="satoshi-font text-[12px]">Display</span>
            <div className="flex">
              <div className="pr-[12px]">
                <img className="inline" src="Checkbox.png" />
                <span className="satoshi-font text-[12px] pl-[4px] ">
                  Calls
                </span>
              </div>
              <div>
                <img className="inline" src="Checkbox.png" />
                <span className="satoshi-font text-[12px] pl-[4px] ">Puts</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end h-[64px] w-full px-[13px] border-t-[1px] border-[#D3D3D3]">
        <button onClick={() => handleClose()} className="rounded-none border-[1px] border-[#2C57F5] mr-[10px]">
          <span className="satoshi-font text-[12px] p-[15px] text-[#2C57F5]">
            Reset
          </span>
        </button>
        <button className="rounded-none border-[1px] border-[#2C57F5] bg-[#2C57F5] ">
          <span className="satoshi-font text-[12px] p-[15px] text-white">
            Apply
          </span>
        </button>
      </div>
    </>
  );
};

const LTPRange = ({ placeholder }) => {
  return (
    <input
      className={
        "placeholder:text-black placeholder:text-[12px] block bg-white w-[100px] h-[30px] border-[1px] border-[#D3D3D3] rounded-none py-[7px] pl-[6px] shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
      }
      placeholder={placeholder}
      type="text"
      name="search"
    />
  );
};

export default FilterModalContent;
