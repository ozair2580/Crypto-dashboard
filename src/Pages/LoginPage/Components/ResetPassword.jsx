import { FaArrowLeftLong } from "react-icons/fa6";
import InputField from '../../../Componets/InputField';
import Button from '../../../Componets/Button';
import { EmailOuter } from "../../SignUpPage/Components/EmailVerification";
import { Container, Heading } from "../../SignUpPage/SignUp";
const ResetPassword = () => {
    return (
        <Container>
        <EmailOuter>
        <div className="Reset">
              <h1>Reset Password</h1>
               <p>Enter your New password  </p>
           </div>
         <div>
            <InputField label="New Password" placeholder="*********" type="password" width="408px"/> 
                   <InputField label="Repeat New Password" placeholder="*********" type="password" width="408px"/>
                   </div>
                <Button name="Reset Password" path="/resetdone"/>
             
        </EmailOuter>
    </Container>
    );
};

export default ResetPassword;