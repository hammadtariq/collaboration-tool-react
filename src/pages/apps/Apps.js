import React, { Component } from "react";
import { Row, Col, Card } from 'antd';

class Apps extends Component {
    state = {};
    render() {
        return <div style={{ background: '#ECECEC', padding: '10px' }}>
            <Row gutter={16}>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>Card content</Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>Card content</Card>
                </Col>
                <Col span={8}>
                    <Card title="Card title" bordered={false}>Card content</Card>
                </Col>
            </Row>
        </div>;
    }
}

export default Apps;
