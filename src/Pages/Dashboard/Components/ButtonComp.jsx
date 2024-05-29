import React from 'react';

const ButtonComp = ({width,icon,name}) => {
    return (
        <button className={`flex gap-2 justify-center bg-purple-700 text-white items-center w-[${width}] h-9 rounded-lg p-2`}>{icon}  {name}</button>

    );
};

export default ButtonComp;