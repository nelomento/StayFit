import React from "react";
import {Col, Row} from "antd";
import {Card} from "antd";
import {Button} from "antd/es/radio";
import "../styles/MainPage.css";
import "../styles/Analysis.css"


function Analyses(props) {
 return (
  <div id="analyses">
   <Row gutter={[16, 16]}>
    <Col span={6}>
                 <Card
    id="analysis-img"
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
 );
}
export default Analyses;
