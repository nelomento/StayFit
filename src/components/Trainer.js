import React from "react";
import {Col, Row} from "antd";
import {Card, Avatar} from "antd";
import "../styles/MainPage.css";
import {
 EditOutlined,
 EllipsisOutlined,
 SettingOutlined
} from "@ant-design/icons";
import "../styles/Trainer.css";

const {Meta} = Card;

function Trainer(props) {
 return (
  <div id="recommeded-trainers">
   <Row>
    <Col span={24}>
     <div className="trainer-heading">
      <h2>Recommended Trainer for you</h2>
     </div>
     <Row>
      <Col span={8}>
       <Card
        style={{
         width: 300
        }}
        cover={<img src="/assets/images/recommendedTrainer2.png" alt="" />}
       >
        <Meta title="Cameron Williamson" description="Fitness Specialist" />

        <div className="trainers">
         <div className="trainer-icons">
          <img
           src="/assets/icons/goalsAchieved.svg"
           className="trainer-icons"
           alt=""
          />
          <img src="/assets/icons/ratings.svg" alt="" />
         </div>

         <div className="trainer-contents">
          <h3>25</h3>
          <h3>104</h3>
          <h4>View Profile</h4>
         </div>
        </div>
       </Card>
      </Col>
      <Col span={8}>
       <Card
        style={{
         width: 300
        }}
        cover={<img src="/assets/images/recommendedTrainer1.png" alt="" />}
       >
        <Meta title="James Foreman" description="Body Builder" />

        <div className="trainers">
         <div className="trainer-icons">
          <img
           src="/assets/icons/goalsAchieved.svg"
           className="trainer-icons"
           alt=""
          />
          <img src="/assets/icons/ratings.svg" alt="" />
         </div>

         <div className="trainer-contents">
          <h3>25</h3>
          <h3>104</h3>
          <h4>View Profile</h4>
         </div>
        </div>
       </Card>
      </Col>
      <Col span={8}>
       <Card
        style={{
         width: 300
        }}
        cover={<img src="/assets/images/recommendedTrainer3.png" alt="" />}
       >
        <Meta title="Mike Johnson" description="Fitness Specialist" />

        <div className="trainers">
         <div className="trainer-icons">
          <img
           src="/assets/icons/goalsAchieved.svg"
           className="trainer-icons"
           alt=""
          />
          <img src="/assets/icons/ratings.svg" alt="" />
         </div>

         <div className="trainer-contents">
          <h3>25</h3>
          <h3>104</h3>
          <h4>View Profile</h4>
         </div>
        </div>
       </Card>
      </Col>
     </Row>
    </Col>
   </Row>
  </div>
 );
}

export default Trainer;
