import styled from "styled-components";

export const SchoolWrap = styled.div`
  background-color: rgb(56, 1, 56);

  

.schoolintro {
  display: flex;
  justify-content: center;
  padding: 50px;
}

.schoolsintroa {
  color: white;
  margin-top: 40px;
  text-align: center;
  line-height: 1.6;
}

.schoolsintroa h1 {
  font-size: 30px;
}

.schoolsintroa p {
  font-size: 12px;
}

.parentflexbox {
  display: flex;
  justify-content: center;
  padding: 0px 100px;
}

.childflexbox {
  display: flex;
  gap: 20px;
  padding: 20px;
  margin-top: 5px;
  margin-bottom: 50px;
  background-color: rgb(190, 161, 190);
  border-radius: 12px;
}


.childbox {
  /* padding: 0px 15px; */
  border-radius: 8px;
  text-align: center;
  font-size: 20px;
  color: white;
  position: relative;
}

.childbox img {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  text-align: center;
  border-radius: 8px;
  height: 200px;
  width: 200px;
}

.sch-childbox-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(56, 1, 56, 0.5);
  overflow: hidden;
  width: 100%;
  height: 0;
  transition: .5s ease;
  border-radius: 8px;
}

.childbox:hover .sch-childbox-overlay {
  height: 100%;
}

.school-btn{
  background-color: white;
  padding:9px;
  color: purple;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  font-weight: 200;
  font-size: 12px;
  line-height: 1.75;
  text-transform: uppercase;
  width: 60%;
}

.sch-img-over-text {
 display: flex;
 justify-content: center;
 margin-top: 80px;
  color: white;
  font-size: 20px;
}


.school-view {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: 40px;
}

.ANCHOS-view-wrap {
  display: flex;
  justify-content: space-between;
  background-image: linear-gradient(to left, rgba(73, 50, 173, 0.5), rgba(133, 48, 141, 0.9)),
    url('https://images.unsplash.com/photo-1613896527026-f195d5c818ed?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80');
  width: 70%;
  height: auto;
  background-position: left;
  border-radius: 10px;
  padding: 40px;
}

.col-2-logo {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid white;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);
}

.col-2-hide {
  display: none;
}

.col-1 {
  color: white;
  line-height: 1.3;
  text-align: left;
}


.col-1 p {
  margin-top: 20px;
}

.icon-location {
  margin-right: 10px;
}




@media screen and (max-width: 920px) {
  .schoolintro {
    padding: 40px;
  }

  .childbox img {
    border-radius: 8px;
    height: 130px;
    width: 130px;
  }

  .col-2-logo {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
}

@media screen and (max-width: 550px) {

  .schoolintro {
    padding: 40px;
  }

  .childbox img {
    border-radius: 4px;
    height: 50px;
    width: 50px;
  }

  .imglogo {
    text-align: center;
  }

  .childflexbox {
    padding: 10px;
    margin-bottom: 30px;
    background-color: rgb(190, 161, 190);
    border-radius: 8px;
  }


  .childbox {
    padding: 0px 8px;
  }

  .ANCHOS-view-wrap {
    flex-direction: column;
  }

  .col-1 h2 {
    font-size: 90%;
    text-align: center;
  }

  .col-1 {
    text-align: center;
  }

  .col-2-logo {
    display: none;
  }

}
`