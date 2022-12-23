import styled from "styled-components";

export const SignupWrapper = styled.div`
width: 100%;
min-height: 100vh;

.signup-container {
    display: flex;
  }
  
  .div1 {
    width: 50%;
    margin-top: 40px;
    padding: 30px;
  }
  
  .div2 {
    width: 50%;
    position: relative;
  }
  
  .signuptext {
    position: absolute;
    top: 0;
    margin: 170px 130px;
  }
  
  .signuptext h3 {
    text-align: center;
    color: azure;
    font-size: 80px;
    font-weight: 600;
    line-height: 1.15;
  }
  
  .div1 img {
    width: 250px;
    height: 50px;
  }
  
  .div1a {
    display: flex;
    justify-content: center;
  }
  
  .div1 h1 {
    text-align: center;
    font-size: 25px;
    margin-top: 40px;
  }
  
  .div1 p {
    text-align: center;
    font-size: 15px;
    margin-top: 15px;
    margin-bottom: 30px;
  }

  
  label {
    display: block;
    font-size: 15px;
    margin-bottom: 3px;
    margin-top: 15px;
    font-size: 13px;
  }
  
  input {
    width: 100%;
    border: 1px solid;
    border-radius: 4px;
    border-color: rgb(56, 1, 56);
    padding: 10px;
  }
  
  #pin {
    padding: 10px 100px;
  }
  
  #submit {
    padding: 10px 100px;
    margin-top: 15px;
    background-color: rgb(56, 1, 56);
    color: white;
  }
  
  #forgotpassword {
    font-size: 12px;
    text-align: right;
  }
  
  .btncase {
    display: flex;
    gap: 8px;
  }
  
  .btn1 {
    padding: 8px;
    background-color: white;
    color: rgb(56, 1, 56);
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    outline: none;
    border: 1px solid rgb(56, 1, 56);
    cursor: pointer;
    margin-top: 10px;
    font-size: 13px;
    border-radius: 8px;
    width: 100%;
  }
  
  .imgoverlay {
    position: absolute;
    top: 0;
    background-color: rgb(56, 1, 56);
    width: 100%;
    min-height: 100%;
    opacity: 0.5;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 10px;
  }
  
  .div2 img {
    width: 100%;
    min-height: 100%;
    border-top-left-radius: 20px;
    border-bottom-left-radius: 10px;
  }
  
  
  
  
  
  
  @media screen and (min-width: 1024px) {
    .classb a {
      margin-top: 23px;
    }
  
    .btn1 {
      width: 50%;
    }
  
    #submit {
      width: 100%;
    }
  
  }
  
  @media screen and (max-width: 768px) {
  
    .div1 {
      width: 100%;
      margin-top: 0px;
      margin-bottom: 20px;
    }
  
    .div1a img {
      display: none;
    }
  
    .div2 {
      display: none;
    }
  
  }
`

export const PText = styled.p`
color: red;
font-weight: 600;
`

export const H1 = styled.h1`
color: rgb(56,1,56);
font-weight:500;
`