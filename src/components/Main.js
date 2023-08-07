import React from "react";
import {Col, Row} from "antd";
import {Card,} from "antd";
import "../styles/Display.css";
import {Button} from "antd/es/radio";
import "../styles/MainPage.css";


import Menu from "./Menu";
import SidePage from "./SidePage";
import Trainer from "./Trainer";



function Main(props) {
 return (
  //  <div id="main_page">
  //   <Row>
  //    <Col span={4} push={20}>
  //     col-6 col-pull-18
  //    </Col>
  //    <Col span={20} pull={4}>
  //     <div className="hero"></div>
  //    </Col>
  //   </Row>
  //  </div>
  <div id="main_page">
   <Row>
    <Col flex="1 1 200px">
     <div id="analyses">
      <Row gutter={[16, 16]}>
       <Col span={6}>
        <Card
         style={{
          width: 230
         }}
        >
         <p>Card content</p>
         <p>Card content</p>
         <p>Card content</p>
        </Card>
       </Col>
       <Col span={6}>
        <Card
         style={{
          width: 230
         }}
        >
         <p>Card content</p>
         <p>Card content</p>
         <p>Card content</p>
        </Card>
       </Col>
       <Col span={6}>
        <Card
         style={{
          width: 230
         }}
        >
         <p>Card content</p>
         <p>Card content</p>
         <p>Card content</p>
        </Card>
       </Col>
       <Col span={6}>
        <div className="btn">
         <Button type="primary">Primary Button</Button>
         <Button>Default Button</Button>
        </div>
       </Col>
      </Row>
    </div>
                 
     <Trainer />
     <SidePage />
     <Menu />
     
    </Col>
    <Col flex="0 1 280px" className="right-bar">
   
    </Col>
   </Row>
  </div>
 );
}
export default Main;
