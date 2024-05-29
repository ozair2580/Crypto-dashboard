import React from "react";
import ButtonComp from "./ButtonComp";
import { MdArrowOutward } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
const CurrentPrice = () => {
  return (
    <div className="flex h-[100%] w-[468px] flex-col gap-[50px] rounded-2xl bg-white p-6">
      <div className="flex h-[101px] w-[100%] flex-col gap-4 ">
        <div className="flex h-[58px] w-[420px] justify-between ">
          <div className="flex h-[58px] w-[185px] flex-col gap-2 ">
            <h4 className="text-[14px] text-[#535D66] ">Current Price</h4>
            <div className="flex gap-2 ">
              <h1 className="text-[24px] text-[#171717] ">₹26,670.25</h1>
              <span className="flex items-center gap-[2px] text-green-700">
                <MdArrowOutward /> 0.04%
              </span>
            </div>
          </div>
          <div className="flex w-[169px] items-center justify-around ">
            <ButtonComp name="Buy" icon={<CiCirclePlus />} width="81px" />
            <ButtonComp name="Sell" icon={<CiCircleMinus />} width="81px" />
          </div>
        </div>

        <div className="flex h-[27px] w-[147px] items-center gap-2  self-end bg-[#F3F3F7] p-[3px] ">
          <button className="w-[28px]flex h-[21px] gap-1 p-1 text-[#797E82]">
            1 H
          </button>
          <button className="h-[21px] w-[28px] py-[6px] pb-[3px] pt-1 text-[#171717ee]">
            1 D
          </button>
          <button className="h-[21px] w-[28px] py-[6px] pb-[3px] pt-1 text-[#797E82]">
            1 W
          </button>
          <button className="h-[21px] w-[28px] py-[6px] pb-[3px] pt-1 text-[#797E82]">
            1 M
          </button>
        </div>
      </div>

      <div className="flex h-[146px] w-[420px] flex-col gap-4 ">
        <img
          src="\src\assets\Graph.png"
          alt=""
          className="h-[116px] w-[420px] "
        />
        <div className="justify-between text-[#797E82] text-xs flex h-[14px] w-[420px] items-center">
          <p>7:15 PM</p>
          <p>12:55 AM</p>
          <p>6:35 AM</p>
          <p>12:15 PM</p>
          <p>5:55 PM</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentPrice;
