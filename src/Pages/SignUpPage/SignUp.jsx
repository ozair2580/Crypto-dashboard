import React from 'react';
import styled from 'styled-components'
import InputField from '../../Componets/InputField';
import RadioButton from '../../Componets/RadioButton';
import Button from '../../Componets/Button';
import UseButtonSubmit from '../../CustomHooks/UseButtonSubmit';
const SignUp = () => {
   const {handleSubmit,handleSubmit2}=UseButtonSubmit()
    return (
        <Container>
          <form >
               <Heading >
                  <h1>Welcome to Crypto App</h1>
                  <p>Create a free account by filling data below.</p>
               </Heading>
                <InputContainer>
                   <div className='Namefiled'>
                     <InputField label="Name" placeholder="james" type="text" width="192px"/> 
                     <InputField label="Surname" placeholder="Author" type="text" width="192px"/> 
                   </div>

                   <InputField label="Email" placeholder="name@gmail.com" type="Email" width="408px"/> 
                   <InputField label="password" placeholder="*********" type="password" width="408px"/> 
                   <InputField label="password" placeholder="*********" type="password" width="408px"/>
                   <RadioButton purpose="signup"/>
                   <Button handleSubmit={handleSubmit}  name="Create New Account" path="/emailverification"/>
                   <label htmlFor="#"><p className='login'>Already have an account ? </p><p  onClick={handleSubmit2} className='signup'>Terms and condition</p></label> 

                </InputContainer>
          </form>
        
        </Container>
    );
};

export default SignUp;
export const Container=styled.div`
 display: flex;
 align-items: center;
 justify-content: center;

 width: 1440px;
 height: 1024px;
 background-color: white;

 form{
    display: flex;
    flex-direction: column;
    padding: 24px;
    gap: 40px;
    border-radius: 16px;
   background-color: wheat;
    width: 456px;
    height: 610px;

 }
`
export const Heading=styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 408px;
    height: 70px;
    h1{
        color: #171717;
        font-size: 32px;
        font-family: serif;
    }
    p{
        font-size: 14px;
        color: #797E82;
    }

`
export const InputContainer=styled.div`
    width: 408px;
    height: 452px;
    display: flex;
    flex-direction: column;
    gap: 24px;
   .Namefiled{
    width: 408px;
    height: 60px;
    display: flex;
    gap: 24px;
     
   }
   label{
        display: flex;
        align-items: center;
        align-self: center;
        font-size: 12px;
        gap: 5px;
        .signup{
        color: purple;}
        .login{
            color: gray;
        }
}
`