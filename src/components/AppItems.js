import React from "react";
import { Row, Col, Card } from "antd";

const AppItems = ({ apps, showHelpModal }) => {
  return (
    <Row gutter={24} type="flex" justify="start">
      {apps
        ? apps.map((app, i) => {
            return (
              <Col
                key={i}
                span={6}
                style={{ borderRight: "1px solid gainsboro" }}
              >
                <Card
                  hoverable={true}
                  onClick={() =>
                    window.open(app._links.appLinks[0].href, "_blank")
                  }
                  bordered={true}
                >
                  <div style={{ textAlign: "center" }}>
                    <img src={app._links.logo[0].href} style={{}} />
                  </div>
                </Card>
                <div className="app-info">
                  <h3 style={{}}>{app.label}</h3>
                  <div className="module last-line">
                    <p>{app.help}</p>
                  </div>
                  <a onClick={e => showHelpModal(e, i)}>view more</a>
                </div>
              </Col>
            );
          })
        : null}
    </Row>
  );
};

export default AppItems;
