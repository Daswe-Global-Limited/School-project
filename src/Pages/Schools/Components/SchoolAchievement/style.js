import styled from "styled-components";

export const AchievementSection = styled.div`
 width: 100%;

 
.achievementwrap{
    margin-top: 50px;
    margin-bottom: 30px;
    padding: 30px 70px;
    background-color: rgb(56, 1, 56);
  }

  .achievementwrap h1{
    text-align: center;
    margin-bottom: 30px;
    color: white;
  }

  .achievementbox{
    display: flex;
    justify-content: center;
    gap: 30px;
    margin-bottom: 30px;
    padding: 30px 30px;

  }

  .achievementbox img{
    width: 200px;
    height: 280px;
    border-top-left-radius: 12px;
    box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  .achievementbox p{
    margin-top: 5px;
    text-align: center;
    font-size: 18px;
    color: white;
  }





  @media screen and (max-width: 1025px) {
    .achievementbox img{
      width: 150px;
      height: 200px;
    }
  }

  @media screen and (max-width: 768px) {
    .achievementbox img{
      width: 120px;
      height: 160px;
    }

    .achievementbox{
      gap: 10px;
      padding: 30px 30px;
      margin-bottom: 10px ;
    }

    .achievementwrap h1 {
      margin-bottom: 10px;
  }

  .achievementbox p {
    font-size: 12px;
}
  }


  @media screen and (max-width: 450px) {
    .achievementbox img{
      width: 100px;
      height: 120px;
    }

    .achievementbox{
      flex-wrap: wrap;
      gap: 10px;
      padding: 10px 10px;
      margin-bottom: 5px ;
    }

    .achievementwrap{
      margin-top: 50px;
      margin-bottom: 30px;
      padding: 30px 30px;
    }

    .achievementwrap h1 {
      margin-bottom: 10px;
      font-size: 20px;
  }

  .achievementbox p {
    font-size: 12px;
}
  }
`