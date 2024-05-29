import React from "react";
import Balance from "./Components/Balance";
import CurrentPrice from "./Components/CurrentPrice";
import Transcations from "./Components/Transcations";
import Loans from "./Components/Loans";

const Dashboard = () => {
  return (
    <div className="">
     
        <div className="w-960px flex h-[100%] flex-col gap-6  mx-[88px]">
          <Balance/>
          <div className="w-[960px] h-[345px] flex gap-6">
             <CurrentPrice/>
             <Transcations/>
          </div>
          <div className="w-[960px] h-[130px] flex gap-6">
             <Loans name="Loans" bg="white" color="purple-700"/>
             <Loans name="Contact" bg="purple-700" color="white"/>
           
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
