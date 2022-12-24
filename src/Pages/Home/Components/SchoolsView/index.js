import React from "react";
import { Link } from "react-router-dom";
import schoolLogo from "../../../../Assets/Logo/schoolLogo.PNG";
import { ImLocation2 } from "react-icons/im";
import { SchoolWrap } from "./style";

function SchoolsView({ schoolData }) {
  return (
    <SchoolWrap>
      <div className="schoolintro">
        <div className="schoolsintroa">
          <p>{schoolData.smallText}</p>
          <h1>{schoolData.bigTitle}</h1>
        </div>
      </div>
      <div className="parentflexbox">
        <div className="childflexbox">
            {schoolData.otherSchools.map((schoolCard, index) =>(
                <div key={index} className="childbox">
                <img src={schoolCard.schoolImg} alt="" className="imglogo" />
              <div className="sch-childbox-overlay">
                <div className="sch-img-over-text">
                  <button className="school-btn">
                  <Link to="/schools">{schoolCard.schoolName}</Link>
                      </button>
                </div>
              </div>
            </div>

            ))}
        </div>
      </div>
      <div className="school-view">
        <div className="ANCHOS-view-wrap">
          <div className="col-2-hide">
            <Link>
              {" "}
              <img src={schoolLogo} alt="" className="col-2-logo" />{" "}
            </Link>
          </div>
          <div className="col-1">
            <h2>
              LOCAL COMPREHENSIVE <br /> HIGH SCHOOL
            </h2>
            <p>
              <ImLocation2 size={20} className="icon-location" /> Victoria
              Island, Lagos
            </p>
          </div>
          <div className="col-2">
            <Link>
              {" "}
              <img src={schoolLogo} alt="" className="col-2-logo" />{" "}
            </Link>
          </div>
        </div>
      </div>
    </SchoolWrap>
  );
}

export default SchoolsView;
