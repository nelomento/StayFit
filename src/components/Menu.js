import React from "react";
import {Col, Row} from "antd";
import {Card} from "antd";
import "../styles/Display.css";
import "../styles/MainPage.css";



function Menu(props) {
 return (
  <div id="featured-menu">
   <Row>
    <Col span={24}>
     <h3>Featured Diet Menu</h3>
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
