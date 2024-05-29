import React from 'react';

const UseButtonSubmit = () => {
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert("hii")
    }
    const handleSubmit2=(e)=>{
        e.preventDefault();
        alert("hii2")
    }
    return {handleSubmit,handleSubmit2};
};

export default UseButtonSubmit;