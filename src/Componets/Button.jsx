import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components' 
const Button = ({name,color,bgcolor,handleSubmit,path}) => {
    return (
        <Link to={path}>
        <ButtonContainer type='submit'  color={color} bgcolor={bgcolor}>
            
            {name}
            
            
        </ButtonContainer>
        </Link>
    );
};

export default Button;

const ButtonContainer=styled.button`
   width: 408px;
   height: 38px;
  padding: 10px 16px;
  font-size: 14px;
  background-color:${props=>props.bgcolor ? props.bgcolor : "#D8DDE2"} ;
  color:${props=>props.color?props.color:"#5A5959"} ;
    
`