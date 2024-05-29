import React from 'react';
import Loans from '../Dashboard/Components/Loans';

const Services = () => {
    return (
   
      
        <div className="w-960px flex h-[100%] flex-col gap-6  mx-[88px] my-[88px]">
         
          <div className="w-[960px] h-[130px] flex gap-6">
             <Loans name="Loans" bg="white" color="purple-700"/>
             <Loans name="Contact" bg="purple-700" color="white"/>
           
          </div>
        </div>
    );
};

export default Services;