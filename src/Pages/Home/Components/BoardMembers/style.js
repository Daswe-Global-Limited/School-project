import styled from "styled-components";

export const BoardWrap = styled.div`
 background-color: white;
    opacity: 0.9;

    
.boardintro {
    display: flex;
    justify-content: center;
    padding: 20px;
}

.boardintroa {
    margin-top: 40px;
    text-align: center;
    line-height: 1.6;
}

.boardintroa h1 {
    font-size: 30px;
    color: black;
}

.boardintroa p {
    font-size: 12px;
    color: rgb(56, 1, 56);
}

.boardparentflexbox {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 100px;
}

.boardchildflexbox {
    display: flex;
    justify-content: space-between;
    align-self: center;
    padding: 40px 20px;
    margin-top: 5px;
    margin-bottom: 50px;
    border-radius: 12px;
    position: relative;
}


.boardchildbox1 {
    margin-left: 30px;
    margin-right: 20px;
    text-align: center;
}



.boardchildbox2 {
    text-align: center;
    margin-right: 5px;
    margin-top: 30px;
}

.board-mem-img {
    position: relative;
    width: 250px;
    height: 290px;
    margin: 10px 10px 10px 10px;
    border-radius: 10px;
}


.boardchildbox3 {
    margin-left: 30px;
    margin-right: 30px;
    text-align: center;

}


.boardiconbox {
    display: flex;
    justify-content: space-between;
}

.boardiconboxtitle {
    color: black;
    text-align: left;
    margin-left: 15px;
}

a {
    color: rgb(56, 1, 56);
}

.boardiconboxtitle p {
    font-size: 15px;
}

/* .boardiconboxsocial {
    text-align: right;
    margin-right: 20px;
  } */

.boardicon {
    margin-bottom: 15px;
    font-size: 15px;
    margin-left: 5px;
    text-align: right;
    margin-right: 10px;
}






@media screen and (max-width: 1124px) {

    .boardchildbox1 {
        margin-right: 0px;
    }

    .boardchildbox3 {
        margin-left: 0px;
    }
}

@media screen and (max-width: 950px) {
    /* .boardchildflexbox {
      flex-direction: column;
    } */


    .board-mem-img {
        width: 180px;
        height: 220px;
    }
}

@media screen and (max-width: 768px) {
    .boardchildbox1 {
        margin-left: 10px;
        margin-right: 10px;
    }
    
    .boardiconboxsocial {
        text-align: right;
        margin-right: 20px;
      }

    .boardicon {
        font-size: 8px;
        text-align: right;
        margin-right: 0px;
    }

    h3{
        font-size: 15px;
    }

    .board-mem-img {
        width: 160px;
        height: 200px;
    }
}


@media screen and (max-width: 450px) {
    .boardchildflexbox {
      flex-direction: column;
    }

    .boardchildbox2{
        display: none;
    }

    .boardchildflexbox{
        padding-top: 0px;
        margin-bottom: 10px;
    }

    .boardchildbox3 {
        margin-right: 0px;
        text-align: center;
    }
}
`