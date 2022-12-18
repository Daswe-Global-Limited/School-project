import styled from "styled-components";

export const HistoryWrap = styled.div`

.historycontainer{
    display: flex;
    margin-top: 50px;
    padding: 0px 70px;
  }

  .historycontainer h1{
    text-align: center;
    margin-bottom: 10px;
    color: rgb(56, 1, 56);
  }

  .historycontainer p{
    text-align: justify;
    line-height: 1.5;
  }

  .histsect2{
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
    padding: 0px 70px;
  }

  .histsect2A{
    width: 65%;
  }

  .histsect2 h2{
    text-align: center;
    margin-bottom: 10px;
    color: rgb(56, 1, 56);
  }

  .histsect2 p{
    text-align: justify;
    line-height: 1.5;
  }

  .histsect2B img{
    max-width: 400px;
    max-height: 500px;
    border-top-left-radius: 25px;
    margin-left: 30px;
    margin-right: 40px;
    border: rgb(56, 1, 56) 2px solid;
  }

  .histsect2B h2{
    color: black;
  }

  .histsect2B p{
    text-align: center;
    line-height: 0;
  }

  .histsect3titlewrap{
    background-color: rgb(56, 1, 56);
    margin-bottom: 40px;
    padding: 0px 60px;
    height: 60px;
  }

  .histsect3titlewrap h2{
    color: white;
    text-align: center;
    padding-top: 20px;
  }

  .histsect3wrap{
    margin-top: 60px;
    padding: 0px 100px;
  }

  .histsect3{
    display: flex;
    justify-content: space-between;
  }

  .histsect3 img{
   height: 200px;
   width: 200px;
   border-radius: 50%;
   box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  }

  .histsect3A{
    text-align: center;
    line-height: 1.3;
  }






  @media screen and (max-width: 1025px) {
    .histsect2A span{
        display: none;
    }

  }


  @media screen and (max-width: 950px) {
    .text-hide{
        display: none;
    }
    
    .histsect2A span{
        display: none;
    }

    .histsect2B img {
        max-width: 300px;
        max-height: 400px;
    }

    .histsect3titlewrap{
       
        padding: 0px 40px;
        height: 60px;
      }

      .histsect3{
        display: flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 20px;
      }

      .histsect3wrap{
        padding: 0px 70px;
      }

      .histsect3 img{
        height: 150px;
        width: 150px;
       }
  }

  
  @media screen and (max-width: 768px) {
    .histsect2A span{
        display: none;
    }

    .histsect2B img{
        max-width: 300px;
        max-height: 400px;
        border-top-left-radius: 25px;
        margin-left: 30px;
        margin-right: 20px;

      }

    .histsect3titlewrap{
       
        padding: 0px 10px;
        height: 60px;
      }

      .histsect3{
        display: flex;
        justify-content: center;
        gap: 20px;
      }

      .histsect3wrap{
        padding: 0px 40px;
      }

      .histsect3 img{
        height: 150px;
        width: 150px;
       }
  }


  @media screen and (max-width: 450px) {
    .historycontainer {
        padding: 0px 40px;
    }

    .histsect2A {
        width: 100%;
    }
        
    .histsect2A span{
        display: none;
    }

    .histsect2B{
       display: none;
      }

    .histsect3titlewrap{
       
        padding: 0px 5px;
        height: 30px;
      }

      .histsect3{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
      }

      .histsect3titlewrap h2 {
       font-size: 12px;
       padding-top: 10px;
    }

      .histsect3wrap{
        padding: 0px 40px;
      }

      .histsect3 img{
        height: 120px;
        width: 120px;
       }
  }


  @media screen and (max-width: 350px) {
    .histsect2 {
        padding: 0px 30px;
    }

      .histsect3{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 20px;
      }

      .histsect3titlewrap h2 {
       font-size: 8px;
       padding-top: 10px;
    }

      .histsect3wrap{
        padding: 0px 40px;
      }

      .histsect3 img{
        height: 100px;
        width: 100px;
       }

       .histsect3A h3{
        font-size: 10px;
       }

       .histsect3A p{
        font-size: 10px;
       }
  }

 
`