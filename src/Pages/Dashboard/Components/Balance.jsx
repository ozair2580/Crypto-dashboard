import React from 'react';
import { PiWarningCircleDuotone } from "react-icons/pi";
import { HiMiniArrowDownTray } from "react-icons/hi2";
import { IoMdArrowRoundUp } from "react-icons/io";
import ButtonComp from './ButtonComp';
const Balance = () => {
    return (
        <div className="flex justify-between h-[106px] w-full items-center rounded-2xl bg-white px-6 shadow-inner">
            <div className="flex w-[564px] gap-8 items-center ">
              <div className="flex h-[58px] w-[156px] flex-col gap-3">
                <h4 className="flex text-gray-500 text-[14px] items-center gap-1">Total Portfolio Value <PiWarningCircleDuotone className="text-yellow-400" /></h4>
                <h1 className="text-2xl">₹ 112,312.24</h1>
              </div>

              <div className="h-[58px] w-[1px] shadow-inner bg-[#EEEEF4]"></div>

              <div className="flex flex-col gap-3 w-[344px] h-[56px] ">
                <h4 className="text-sm text-[#535D66]">Wallet Balances</h4>
                <div className="flex gap-8 items-center  w-[344px] h-[26px]">
                    <div className="flex gap-1 items-center w-[131px] h-[26px]">
                        <h1 className="text-xl">22.39401000</h1>
                       <button className="rounded-full w-[35px] h-[22px] flex items-center p-1 bg-[#F3F3F7]">BTC</button>
                    </div>
                    <div className="flex items-center gap-1 w-[142px] h-[26px]">
                        <h1 className="text-xl">₹ 1,300.00</h1>
                       <button className="rounded-full w-[35px] h-[22px] flex items-center p-1 bg-[#F3F3F7]">INR</button>
                    </div>
                   
                </div>
                </div>

            </div>

            <div className="flex w-[235px] h-[38px] gap-2">
                <ButtonComp width="107px" name="Deposite" icon={<HiMiniArrowDownTray />}/>
                <ButtonComp width="107px" name="Withdraw" icon={<IoMdArrowRoundUp />}/>
            </div>

          </div>
    );
};

export default Balance;