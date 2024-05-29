import React from 'react';
import { Container } from '../../SignUpPage/SignUp';
import { EmailOuter } from '../../SignUpPage/Components/EmailVerification';
import styled from 'styled-components';
import { FaArrowLeftLong } from "react-icons/fa6";
import InputField from '../../../Componets/InputField';
import Button from '../../../Componets/Button';

const ForgotPassword = () => {
    return (
        <Container>
            <EmailOuter>
                <div className='Forgot'>
                <FaArrowLeftLong className='icon'/>
                 <h1>Forgot Password</h1>
                 <p>Enter your email address for which account you want to reset your password.</p>
                </div>
                <div className='email'>
                    <InputField type="email" placeholder="name@gmail.com" label="Email" heigth="" />
                    <Button name="Reset Password" path="/loginSuccess"/>
                </div>
            </EmailOuter>
        </Container>
    );
};

export default ForgotPassword;
