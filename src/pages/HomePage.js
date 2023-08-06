import React from "react";
import { Row } from "antd";
import RightSide from "../components/RightSide";
import LeftSide from "../components/LeftSide";



function HomePage(props) {
    return (
        <div id="left-side-container">
            <Row>
                <LeftSide />
                <RightSide />
            </Row>
        </div>
    );
}
export default HomePage;
