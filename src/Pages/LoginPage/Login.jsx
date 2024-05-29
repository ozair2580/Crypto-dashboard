import React from 'react';
import { Container,Heading,InputContainer } from '../SignUpPage/SignUp';
import InputField from '../../Componets/InputField';
import RadioButton from '../../Componets/RadioButton';
import Button from '../../Componets/Button';
import UseButtonSubmit from '../../CustomHooks/UseButtonSubmit';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
       <Container>
        <form style={{height:"456px"}}>
        <Heading>
         <h1>Welcome to Crypto App</h1>
                  <p>Create a free account by filling data below.</p>
         </Heading>

         <InputContainer>
                 

                   <InputField label="Email" placeholder="name@gmail.com" type="Email" width="408px"/> 
                   <InputField label="password" placeholder="*******" type="password" width="408px"/> 
                   <RadioButton purpose="login" path="forgotpassword"/>
                  
                   <Button  name="Login" color="#797E82" path="/Dashboard"/>
             
                   <Button  name="Create an Account" color="black" bgcolor="#EEEEF4" path="/signup"/>

                </InputContainer>
        </form>
        
       </Container>
    );
};

export default Login;