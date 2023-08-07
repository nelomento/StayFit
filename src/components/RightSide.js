import React from "react";
import { Col } from "antd";
import "../styles/Display.css";
import "../styles/MainPage.css";
import {EllipsisOutlined} from "@ant-design/icons";

import "../styles/RightSide.css"
import { Progress } from "antd";
import "../styles/RightSide.css"

function RightSide(props) {
  return (
   <Col flex="0 1 280px" className="right-side-container">
    <div className="profile-section">
     {/* <Avatar shape="square" size="large" icon={<UserOutlined />} /> */}
    </div>
    <div className="body-size">
     <div className="card-text">
      <div>
       <h2>
        75<sub className="sub">kg</sub>
       </h2>
       <p>Weight</p>
      </div>
      <div>
       <h2>6.5</h2>
       <p>Height</p>
      </div>
      <div>
       <h2>
        25<sub className="sub">yrs</sub>
       </h2>
       <p>Age</p>
      </div>
     </div>
    </div>
    <div className="Sidebar-heading">
     <h2>Your Goals</h2>
    </div>
    <div className="body-size">
     <div className="body-content">
      <div className="running">
       <div className="running-img">
        <img src="/assets/images/running-goals1.svg" alt="" />
       </div>
       <div className="running-text">
        <h3>Running</h3>
        <p className="pg">70km/80km</p>
       </div>
      </div>
      <div className="running-percentage">
       <Progress type="circle" percent={79} size={50} strokeColor="#1AB0B0" />
      </div>
     </div>
    </div>

    <div className="body-size">
     <div className="body-content">
      <div className="running">
       <div className="running-img">
        <img src="/assets/images/Sleeping-Goals.svg" alt="" />
       </div>
       <div className="running-text">
        <h3>Sleeping</h3>
        <p className="pg">50hrs/60hrs</p>
       </div>
      </div>
      <div className="running-percentage">
       <Progress type="circle" percent={60} size={50} strokeColor="#FF7443" />
      </div>
     </div>
    </div>

    <div className="body-size">
     <div className="body-content">
      <div className="running">
       <div className="running-img">
        <img src="/assets/images/burnDown_weightGoals.svg" alt="" />
       </div>
       <div className="running-text">
        <h3>Weight Loss</h3>
        <p className="pg">70kg/100kg</p>
       </div>
      </div>
      <div className="running-percentage">
       <Progress type="circle" percent={60} size={50} strokeColor="#8676FE" />
      </div>
     </div>
    </div>

    <div className="Sidebar-heading">
     <h2>Scheduled</h2>
    </div>

    <div className="body-size">
     <div className="body-content">
      <div className="running">
       <div className="running-img">
        <img src="/assets/images/training_yoga.svg" alt="" />
       </div>
       <div className="running-text">
        <h3>Training Yoga</h3>
        <p className="pg">Fitness</p>
       </div>
      </div>
      <div className="running-percentage"></div>
     </div>
    </div>

    <div className="body-size">
     <div className="body-content">
      <div className="running">
       <div className="running-img">
        <img src="/assets/images/training_yoga.svg" alt="" />
       </div>
       <div className="running-text">
        <h3>Swimming</h3>
        <p className="pg">Fitness</p>
       </div>
      </div>
      <div className="running-percentage">
       <EllipsisOutlined />
       <p className="pg">22 Mar</p>
      </div>
     </div>
    </div>

    {/* <div className="body-reminder">
     <div id="reminder-percentage">
      <Progress
       type="circle"
       strokeColor="#FA5A7D"
       size={70}
       percent={65}
       format={(percent) => `${percent}   Days`}
      />
      <p className="pg">You have achieved 80% of your <br/> goal this month</p>
     </div>
    </div> */}
   </Col>
  );
}

export default RightSide;
