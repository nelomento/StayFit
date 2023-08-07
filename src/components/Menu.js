import React from "react";
import {Col, Row} from "antd";
import {Card} from "antd";
import "../styles/MainPage.css";



function Menu(props) {
 return (
  <div id="featured-menu">
   <Row>
    <Col span={24}>
     <div className="trainer-heading">
      <h2>Featured Diet Menu</h2>
     </div>
     <Row>
      <Col span={12}>
       <Card
        style={{
         width: 450
        }}
       >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
       </Card>
      </Col>
      <Col span={12}>
       <Card
        style={{
         width: 450
        }}
       >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
       </Card>
      </Col>
     </Row>
    </Col>
   </Row>
  </div>
 );
}

export default Menu;
