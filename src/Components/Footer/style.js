import styled from "styled-components";

export const FooterWrapper = styled.div`

.footer-box{
    display: flex;
  justify-content: space-between;
  padding: 50px 50px;
}

  .footersec1 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-right: 30px;
    margin-left: 50px;
  }

  .footersec1 img {
    width: 250px;
    height: 50px;
    margin-bottom: 20px;
  }

  .footersec1icon {
    display: flex;
    justify-content: center;
    align-content: center;
    gap: 20px;
  }

  .footersec1icon a {
    color: black;
  }

  .col-subscribe {
    align-items: center;
    margin-top: 30px;
    border-top: 1px solid rgb(56, 1, 56);
    padding-top: 20px;
  }

  .col-subscribe h3 {
    margin-bottom: 10px;
  }

  .col-subscribe p {
    margin-bottom: 20px;
    line-height: 1.2;
  }

  .subscribe {
    display: flex;
    justify-content: center;
    align-content: center;
  }

  .subscribe input {
    padding: 0.4rem;
    font-size: 14px;
    border-radius: 4px;
    width: 200px;
    border: 1px solid rgb(56, 1, 56);
  }

  .subscribe button {
    margin-left: 0.8rem;
    width: 100px;
    background-color: rgb(56, 1, 56);
    color: white;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
      0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
    outline: none;
    border: none;
    cursor: pointer;
    line-height: 1.75;
    letter-spacing: 0.02857em;
    border-radius: 4px;
  }

  .footersec2,
  .footersec3,
  .footersec4 h3 {
    color: rgb(56, 1, 56);
  }

  .footersec2 h3 {
    margin-bottom: 20px;
  }

  .footersec2 a {
    display: flex;
    align-content: left;
    padding: 10px;
    color: black;
  }
  .footersec3 h3 {
    margin-bottom: 20px;
  }

  .footersec3 a {
    display: flex;
    align-content: left;
    padding: 10px;
    color: black;
    font-size: 13px;
  }

  .footersec4 h3 {
    margin-bottom: 20px;
  }
  .footersec4 {
    margin-right: 50px;
  }

  .footersec4 p {
    font-size: 15px;
  }

  .contact-icon {
    color: rgb(56, 1, 56);
  }

  .footerb {
    display: flex;
    align-content: left;
    gap: 10px;
    margin-top: 30px;
    margin-bottom: 15px;
  }

  .footerb2 {
    display: flex;
    align-content: left;
    gap: 10px;
    margin-bottom: 15px;
  }
  .footerb3 {
    display: flex;
    align-content: left;
    gap: 10px;
    margin-bottom: 15px;
  }
  .footerb4 {
    display: flex;
    align-content: left;
    gap: 10px;
  }

  .copyright {
    display: flex;
    justify-content: center;
    text-align: center;
    font-size: 12px;
    color: rgb(43, 41, 41);
    margin-bottom: 50px;
    gap: 5px;
  }

  @media screen and (max-width: 960px) {
    .footer-box {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      flex-direction: row;
      padding: 1rem;
    }

    .footersec1,
    .footersec1 {
      align-content: center;
      text-align: center;
    }

    .footersec2,
    .footersec3 {
      display: none;
    }

    .col-subscribe {
      margin: 2rem;
      text-align: center;
    }

    .subscribe {
      flex-direction: column;
    }

    .subscribe input {
      width: 100%;
    }

    .subscribe button {
      width: 100%;
      margin: 10px 0;
    }

    .footer-bottom .content {
      padding: 1rem;
      justify-content: center;
    }
  }

  @media screen and (max-width: 450px) {
    .copyright {
      border-top: 1px solid grey;
      margin-top: 20px;
      padding-top: 20px;
      font-size: 10px;
    }
  }
`;
