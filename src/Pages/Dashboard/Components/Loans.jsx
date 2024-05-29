import React from 'react';

const Loans = ({bg,name,color}) => {
    return (
        <div className={`w-[468px] h-[130px] rounded-2xl flex flex-col gap-4  p-6 bg-${bg} bg[url('\src\assets\Visual.png')]`}>
        <button className={`flex gap-2 justify-center bg-${color} text-${bg} items-center w-[45px] px-1 text-xs py-[6px] h-[22px] rounded-2xl `}>{name}</button>
            <div className='w-[420px] h-6'>
                <h1 className={`text-${color} text-[18px]`}>Learn more about Loans – Keep your Bitcoin, access it’s value without selling it</h1>
            </div>
        </div>
    );
};

export default Loans;