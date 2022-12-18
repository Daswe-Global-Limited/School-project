import styled from "styled-components";

export const SchoolsPageBanner = styled.div`
  width: 100%;

  .schoolsBannerWrap {
    margin: auto;
    overflow: hidden;
  }

  .schoolsBanner-container {
    position: relative;
    width: 100%;
    max-height: 550px;
  }

  .schoolPageBannerImg {
    width: 100%;
    object-fit: cover;
  }

  .schoolsBannerText {
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 0;
    margin-bottom: 60px;
  }

  .schoolsBannerText h1 {
    line-height: 1.4;
    font-size: 45px;
    font-weight: 600;
    color: white;
  }

  @media screen and (max-width: 1025px) {
    .schoolsBannerText h1 {
      font-size: 35px;
      font-weight: 450;
    }
  }

  @media screen and (max-width: 950px) {
    .schoolsBannerText h1 {
      font-size: 30px;
      font-weight: 400;
    }
  }

  @media screen and (max-width: 450px) {
    .schoolsBannerText h1 {
      font-size: 15px;
      font-weight: 250;
    }

    .schoolsBannerText {
      margin-bottom: 30px;
    }
  }
`;
