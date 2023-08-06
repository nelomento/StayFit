import React from "react";
import { Col, } from "antd";
import "../styles/MainPage.css";

import Menu from "./Menu";
import Trainer from "./Trainer";
import Analyses from "./Analysis";


function LeftSide(props) {
    return (
        <Col flex="1 1 200px" className="left-side-container">
            <div className="trainer-container">
                <Analyses />
            </div>

            <div className="trainer-container">
                <Trainer />
            </div>

            <div className="menu-container">
                <Menu />
            </div>

        </Col>
    );
}
export default LeftSide;