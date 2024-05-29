import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const RadioButton = ({ purpose ,path}) => {
  return (
    <Checkbox>
      <input type="checkbox" />
      {purpose === "login" ? (
        <div className="loginlabel">
          <p className="login">Remember me</p>
          <Link to={path}>
          <p className="signup">Forgot password?</p>
          </Link>
        </div>
      ) : (
        <div className="signuplabel">
          <p className="login">I agree </p>
          <p className="signup">Terms and condition</p>
        </div>
      )}
    </Checkbox>
  );
};

export default RadioButton;

const Checkbox = styled.div`
  display: flex;
  align-items: center;
  width: 408px;
  height: 16px;
  gap: 10px;
  input {
    display: flex;
    align-self: center;
    width: 16px;
    height: 16px;
    border-radius: 4px;
    border-radius: 1px solid #eeeef4;
  }
  .loginlabel {
  cursor: pointer;
    display: flex;
    width: 380px;
    height: 16px;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    gap: 5px;
    .signup {
      color: purple;
    }
    .login {
      color: black;
    }
  }
  .signuplabel{
    display: flex;
      align-items: center;
    font-size: 12px;
    gap: 5px;
    
  }
`;
