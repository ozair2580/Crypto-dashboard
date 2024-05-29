import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import { SiBitcoinsv } from "react-icons/si";
const Transcations = () => {
    const obj=[
        {
            "icon":<AiFillDollarCircle className="h-10 w-10 rounded-[30px] bg-[#F3F3F7]"/>,
            "name":"INR Deposit",
            "Date":"2022-06-09 7:06 PM",
            "currentrate":"+ ₹81,123.10",
            "exchangeRate":""
        },
        {
            "icon":<SiBitcoinsv className="h-10 w-10 rounded-[30px] bg-[#F3F3F7]"/>,
            "name":"BTC Sell",
            "Date":"2022-06-09 7:06 PM",
            "currentrate":"- 12.48513391 BTC",
            "exchangeRate":"+ $81,123.10"
        },
        {
            "icon":<AiFillDollarCircle className="h-10 w-10 rounded-[30px] bg-[#F3F3F7]"/>,
            "name":"INR Deposit",
            "Date":"2022-06-09 7:06 PM",
            "currentrate":"+ ₹81,123.10",
            "exchangeRate":""
        }
    ]
  return (
    <div className="flex h-[345px] w-[468px] flex-col gap-6 rounded-2xl bg-white p-6">
      <h4 className="text-[14px] text-[#535D66] ">Recent Transactions</h4>
      {
        obj.map((item)=> 
      <div className="flex h-[206px] w-[420px]  gap-4">
         {item.icon}
        <div className="flex h-[42px] w-[364px] justify-between">
          <div className="flex h-[42px] w-[126px] flex-col gap-1">
            <h1 className="text-base text-[#171717]">{item.name}</h1>
            <p className="text-[14px] text-[#797E82]">{item.Date}</p>
          </div>
          <div className="flex h-[42px] w-[126px] flex-col gap-1">
            <h1 className="flex text-[14px] text-[#171717]">{item.currentrate}</h1>
            <p className="text-[14px] text-[#797E82]">{item.exchangeRate}</p>
          </div>
        </div>
      </div>
        )
}

      <button className="w-[420px] h-[38px] px-4 py-2 flex items-center justify-center bg-[#EEEEF4] text-black rounded-xl" >View All</button>
    </div>
  );
};

export default Transcations;
