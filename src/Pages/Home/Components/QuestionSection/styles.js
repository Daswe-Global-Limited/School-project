import styled from "styled-components";

export const QuestionWrapper = styled.div`
  width: 100%;
  height: auto;
  background-color: rgb(56, 1, 56);
  

.question-container {
    padding: 50px 0px;
}

.question-sec-content {
    display: flex;
    justify-content: center;
    gap: 80px;
}

.questionImage {
    margin-top: 45%;
    /* align-self: center; */
    width: 350px;
    height: 180px;
}

.question-sec-content .col-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: .8rem;
}

.question-sec-content .col-2 p {
    color: grey;
}

.question-sec-content .form-layout {
    width: 400px;
    margin: auto;
    background-color: #fff;
    border-radius: 6px;
}

.question-sec-content .form-container {
    padding: 1.5rem 2rem;
}

.question-sec-content .sign-in-txt {
    margin-bottom: 15px;
    text-align: center;
}

.social-login i {
    background-color: #fff;
    color: rgb(56, 1, 56);
    padding: 16px 45px 6px 45px;
    border: 1px solid lightgrey;
    border-radius: 4px;
}

.col-2 .divider p {
    width: 100%;
    text-align: center;
    border-bottom: 1px solid lightgrey;
    line-height: .1em;
    margin: 2rem 0 2rem;
}

.col-2 .divider p span {
    background-color: #fff;
    padding: 0 10px;
}

.que-form {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
}
 


.que-form input {
    width: 100%;
    margin: 8px 0;
    padding: 8px;
    border: none;
    border-bottom: 1px solid lightgrey;
    border-radius: 4px;
}


.question-section-btn {
    padding: 0.4rem 2rem;
    background-color: rgb(56, 1, 56);
    color: white;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 10px;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    width: 300px;
  }

.question-sec-content .form-footer {
    border-top: 1px solid lightgrey;
    background-color: #f8f8f8;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
}

.form-footer p {
    padding: 1.5rem 2rem;
    line-height: 1.5;
}

.form-footer span {
    font-weight: 500;
}




@media screen and (max-width:1025px) {
    .question-sec-content {
        display: flex;
        justify-content: center;
    }
}



@media screen and (max-width:960px) {
    .question-sec-content {
        height: auto;
        width: 100%;
    }

    .question-sec-content {
        flex-direction: column;
        align-content: center;
    }

    .questionImage {
        margin-top: 20px;
        align-self: center;
        margin-left: 30%;
        width: 350px;
        height: 180px;
    }    
}



@media screen and (max-width:450px) {
    .questionImage {
        width: 200px;
        height: 120px;
    }

    .question-sec-content .form-layout {
        width: 300px;
    }

    .social-login i {
        background-color: #fff;
        color: rgb(56, 1, 56);
        padding: 15px 20px 8px 20px;
        border-radius: 4px;
        margin-left: 9px;
    }
}

@media screen and (max-width:350px) {
    .questionImage {
        margin-left: 15%;
        width: 200px;
        height: 120px;
    }

    .question-sec-content .form-layout {
        width: 270px;
    }

    .social-login i {
        background-color: #fff;
        color: rgb(56, 1, 56);
        padding: 15px 15px 8px 15px;
        border-radius: 4px;
        margin-left: 9px;
    }
}
`;
