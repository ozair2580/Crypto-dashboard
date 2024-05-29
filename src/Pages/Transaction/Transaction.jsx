import React from 'react';
import CurrentPrice from '../Dashboard/Components/CurrentPrice';
import Transcations from '../Dashboard/Components/Transcations';

const Transaction = () => {
    return (
        <div className="w-960px flex h-[100%] flex-col gap-6  mx-[88px] my-[70px]">
       
        <div className="w-[960px] h-[345px] flex gap-6">
           <CurrentPrice/>
           <Transcations/>
        </div>
        
      </div>
    );
};

export default Transaction;