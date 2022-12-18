import styled from "styled-components";

export const BannerWrapper = styled.div`
width: 100%;

.sliderwrapper {
    margin: auto;
    overflow: hidden;
    
}

.outline{
  position: relative;
}

.welcimage img {
  width: 100%;
  max-height: 550px;
}

.welcimage video {
  width: 100%;
  max-height: 550px;
  object-fit: cover;
}



.welcometext {
  position: absolute;
  top: 0;
  margin-top: 120px;
  margin-left: 50px;
  padding: 60px;
}

.welcometext h1 {
  width: 50%;
  line-height: 1.4;
  font-size: 50px;
  font-weight: 600;
  color: white;
}

.btn {
  background-color: white;
  padding: 0.7rem 2rem;
  color: purple;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 500;
  margin-top: 10px;
  font-size: 0.9375rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  min-width: 64px;
}





@media screen and (max-width: 768px) {
  .welcometext {
    position: absolute;
    top: 0;
    margin-top: 70px;
    padding: 20px;
  }
  
  .welcometext h1 {
    width: 50%;
    line-height: 1.4;
    font-size: 40px;
    font-weight: 600;
    color: white;
    margin-top: 5px;
  }
    
}

@media screen and (max-width: 425px) {
  .welcometext {
    position: absolute;
    top: 0;
    margin-top: 40px;
    padding: 5px;
  }
  
  .welcometext h1 {
    width: 50%;
    line-height: 1.4;
    font-size: 20px;
    font-weight: 300;
    color: white;
  }
    .btn{
      min-width: 30px;
      font-weight: 300;
      font-size: 10px;
      padding: 5px 5px;
    }
}
`