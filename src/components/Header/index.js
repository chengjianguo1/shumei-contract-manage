import React from 'react';
import { Row, Col } from 'antd';
import './index.css';

export default class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            userName: '闲鱼'
        }
    }

    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span={24} className="userName">
                        <span>欢迎,{this.state.userName}</span>
                    </Col>
                </Row>
            </div>
        )
    }
}