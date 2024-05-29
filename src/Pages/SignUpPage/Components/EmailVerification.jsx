import React from 'react';
import { MdEmail } from "react-icons/md";
import { Container } from '../SignUp';
import styled from 'styled-components';
import Button from '../../../Componets/Button';

const EmailVerification = () => {
    return (
       <Container>
          <EmailOuter>
          <MdEmail className='iconemail'/>
           <div className="verification-content">
              <h1>Email Verification</h1>
               <p>We have sent you an email verification to <span>jenny.wilson@gmail.com. </span>If you didn’t receive it, click the button below. </p>
           </div>
           
           <Button  name="Re-Send Email" color="black" bgcolor="#EEEEF4" path="/signinsuccess"/>
          </EmailOuter>
       </Container>
    );
};

export default EmailVerification;
export const EmailOuter=styled.div`
display: flex;
flex-direction: column;
gap: 24px;
align-items: center;
padding: 40px;
border-radius: 16px;
border: 1px solid black;
    width: 488px;
    height: 308px;

    .iconemail{
        width: 44px;
        height: 30px;
        color: purple;
    }
    .verification-content{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        width: 408px;
        height: 94px;

        h1{
          font-size: 20px;
          color: black;
        }
        p{
            text-align: center;
            /* display: flex; */
            /* flex-direction: column; */
            align-items: center;
            font-size: 14px;
            color: #797E82;
            span{
                color: black;
                font-weight: bold;
            }
        }

    }

     .Forgot{
        display: flex;
        flex-direction: column;
        width: 408px;
        height: 124px;
        gap: 16px;
        
        h1{
            font-size: 28px;
        }
        p{
            font-size: 14px;
            color: #797E82;
        }

    }
        .icon{
            width: 24px;
            height: 24px;
            color: black;
        }
        .email{
            width: 408px;
            height: 110px;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .success{
            width: 46px;
            height: 46px;
            color: green;
        }
        .Reset{
            display: flex;
            flex-direction: column;
            align-items: center;
            width: 408px;
            height: 40px;
            h1{
                font-size: 28px;
            }
            p{
                font-size: 14px;
                color: #797E82;
            }
        }
`