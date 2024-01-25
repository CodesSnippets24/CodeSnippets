import React from "react";

const Day1 = () => {
  return (
    <div className="px-14 py-14 rounded bg-gradient-to-tr from-[#443CA1] to-[#4EC2C9] ">
      <div className="flex items-center justify-center w-full h-full">
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="flex flex-col">
            <div className=" flex">
              <div className=" h-[45px] w-[25px] rounded-sm bg-white  mt-[3px]  transform rotate-45 z-0"></div>
              <div
                className=" h-[100px] w-[25px] bg-white rounded-sm  ml-[-6px]  shadow-xl z-[2]"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                }}
              />
              <div
                className=" h-[100px] w-[100px] rounded-full border-[25px] ml-[-8px] border-white  z-[1]"
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                }}
              ></div>
              <div className=" h-[100px] w-[100px] rounded-full border-[25px] ml-[-15px] border-white  "></div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <span
                className="text-[85px] font-bold leading-[90px] uppercase "
                style={{ fontFamily: "'Courier New', 'Courier', sans-serif" }}
              >
                Days
              </span>
              <span
                className="font-bold text-[26px] leading-[10px] uppercase"
                style={{ fontFamily: "'Courier New', 'Courier', sans-serif" }}
              >
                CSS Challenge
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Day1;
