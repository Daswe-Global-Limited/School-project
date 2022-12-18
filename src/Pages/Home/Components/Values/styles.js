import styled from "styled-components";

export const ValueWrapper = styled.div`
  .valuebox {
    padding: 50px 100px;
  }

  .valueblock {
    display: flex;
    justify-content: space-between;
    padding: 40px 20px;
    background-color: rgb(56, 1, 56);
    border-radius: 12px;
    opacity: 0.9;
  }

  .valueblock > div:nth-child(1) {
    border-right: 1px dotted white;
  }
  .valueblock > div:nth-child(2) {
    border-right: 1px dotted white;
  }

  .value {
    padding: 0px 15px;
    color: white;
  }

  .icon {
    margin-bottom: 25px;
    font-size: 35px;
    color: white;
  }

  .value h3 {
    font-size: 17px;
    margin-bottom: 15px;
  }

  .value p {
    font-size: 15px;
  }

  @media screen and (max-width: 768px) {
    .valueblock > div:nth-child(1) {
      border-right: none;
      border-bottom: 1px dotted white;
      padding-bottom: 20px;
    }

    .valueblock > div:nth-child(2) {
      border-right: none;
      border-bottom: 1px dotted white;
      padding-bottom: 20px;
    }

    .valueblock {
      flex-direction: column;
      gap: 40px;
    }

    .value {
      text-align: center;
    }
  }

  @media screen and (max-width: 450px) {
    .valueblock {
      flex-direction: column;
      gap: 40px;
    }

    .value {
      border-bottom: 1px dotted white;
      border-right: none;
    }

    .value p {
      margin-bottom: 18px;
    }

    .valuebox {
      padding: 30px 40px;
    }
  }
`;
