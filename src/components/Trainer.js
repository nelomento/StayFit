import React from "react";
import {Col, Row} from "antd";
import {Card, Avatar} from "antd";
import "../styles/Display.css";
import "../styles/MainPage.css";
import {
 EditOutlined,
 EllipsisOutlined,
 SettingOutlined
} from "@ant-design/icons";

const {Meta} = Card;

function Trainer(props) {
 return (
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
 );
}

export default Trainer;
