import React from 'react';
import { Row, Col } from 'antd';
import NavLeft from './components/NavLeft';
import Home from './pages/home';
import Header from './components/Header';
import './layout.css';

export default class Layout extends React.Component {
    render() {
        return (
            <Row className="container">
                <Col span="4" className="nav-left">
                    <NavLeft />
                </Col>
                <Col span="20" className="main">
                    <Header />
                    <Row className="content">
                        {/* <Home /> */}
                        {this.props.children}
                    </Row>
                </Col>
            </Row>
        )
    }
}
