import React from 'react';
import { FaCheckCircle } from "react-icons/fa";
import { Container } from '../../SignUpPage/SignUp';
import { EmailOuter } from '../../SignUpPage/Components/EmailVerification';
import Button from '../../../Componets/Button';
import { Link } from 'react-router-dom';
const LogInSuccess = ({type,heading,Buttonname,content,path}) => {
    return (
        <Container>
  
    <EmailOuter>
    <FaCheckCircle className='success'/>
    <div className="verification-content">
              <h1>{heading?heading:"Successfully Sent"}</h1>
              {content?<p>{content}</p>:
               <p>We have sent you an email verification to <Link to="/resetpassword"> <span>jenny.wilson@gmail.com. </span></Link>If you didn’t receive it, click the button below. </p>
              }
               </div>

          {
            type==="SignIn" && <Button color="white" bgcolor="#5F00D9" path={path}  name={Buttonname}/>
          } 
          
    </EmailOuter>
        </Container>
        

    
    );
};

export default LogInSuccess;