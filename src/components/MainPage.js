import React from "react";
import {Col, Row} from "antd";
// import css from '../styles/Display.css'
import {Card, Avatar} from "antd";
import "../styles/Display.css";
import { Button } from "antd/es/radio";
import '../styles/MainPage.css'
import {
 EditOutlined,
 EllipsisOutlined,
 SettingOutlined
} from "@ant-design/icons";

const {Meta} = Card;

function MainPage(props) {
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

     <div id="recommeded-trainers">
      <Row>
       <Col span={24}>
        <h3>Recommended Trainer for you</h3>
        <Row>
         <Col span={8}>
         
          <Card
           style={{
            width: 300
           }}
           cover={
            <img
             alt="example"
             src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
           }
           actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />
           ]}
          >
           <Meta
            avatar={
             <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Card title"
            description="This is the description"
           />
          </Card>
          
         </Col>
         <Col span={8}>
         
          <Card
           style={{
            width: 300
           }}
           cover={
            <img
             alt="example"
             src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
           }
           actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />
           ]}
          >
           <Meta
            avatar={
             <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Card title"
            description="This is the description"
           />
          </Card>
          
         </Col>
         <Col span={8}>
         
          <Card
           style={{
            width: 300
           }}
           cover={
            <img
             alt="example"
             src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
            />
           }
           actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />
           ]}
          >
           <Meta
            avatar={
             <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Card title"
            description="This is the description"
           />
          </Card>
          
         </Col>
        </Row>
       </Col>
      </Row>
     </div>

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
    </Col>
    <Col flex="0 1 280px" className="right-bar">
     <p>Side Page</p>
    </Col>
   </Row>
  </div>
 );
}
export default MainPage;
