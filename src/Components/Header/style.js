import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 100px;
  background-color: rgb(39, 1, 39);

  .headerwrapper {
    max-width: 1240px;
    padding: 30px 30px;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
  }

  .logo img {
    width: 35%;
    height: auto;
    margin-left: 60px;
  }

  .header-nav-menu {
    display: flex;
    justify-content: space-between;
    gap: 40px;
    padding: 5px;
  }

  .nav-link {
    color: white;
  }

  .hamburger {
    display: none;
    position: absolute;
    top: 2rem;
    right: 1rem;
  }

  .hamburger2 {
    display: none;
    position: absolute;
    top: 2rem;
    right: 1rem;
  }

  @media screen and (min-width: 1025px) {
  }

  @media screen and (max-width: 960px) {
    .hamburger {
      display: block;
      margin-right: 20px;
      position: absolute;
    }

    .hamburger2 {
      display: block;
      margin-right: 20px;
      margin-top: 50px;
      position: absolute;
    }

    .header-nav-menu {
      position: absolute;
      z-index: 1;
      left: -100%;
      flex-direction: column;
      justify-content: center;
      background-color: rgb(39, 1, 39);
      width: 100vw;
      height: 100vh;
      text-align: center;
      transition: 0.4s;
    }

    .nav-menu.active {
      left: 0;
      top: 0;
      margin-top: -30px;
      padding: 0px;
    }

    .nav-item {
      font-size: 20px;
    }
  }

  @media screen and (max-width: 414px) {
    .nav-menu-active {
      margin-top: -130px;
      height: 100vh;
    }
  }

  @media screen and (max-width: 325px) {
    .nav-menu.active {
      margin-top: -30px;
    }
  }
`;
