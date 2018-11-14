import React, { Component } from "react";
import { Row, Col, Card, Carousel } from "antd";
import "./Apps.css";

class Apps extends Component {
  state = {};
  render() {
    return (
      <div>
        <div style={{ background: "#ECECEC", padding: "10px" }}>
          <Carousel autoplay>
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
          </Carousel>
        </div>
        <div style={{ background: "#ECECEC", padding: "10px" }}>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
            <Col span={8}>
              <Card title="Card title" bordered={false}>
                Card content
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Apps;
