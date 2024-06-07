import React from "react";
import { Row, Col, Button } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const EventRow = ({ data }) => {
  return (
    <>
      <Row style={{ borderBottom: "1px solid black" }}>
        <Col span={6}>{data?.id}</Col>
        <Col span={6}>{data.title}</Col>
        <Col span={6}>{data.dateAndTime}</Col>
        <Col span={6}>
          <div>
            <Button
              icon={<EditOutlined />}
              style={{
                marginRight: "20px",
                backgroundColor: "#001d22",
                color: "#f0f7f4",
              }}
            ></Button>
            <Button icon={<DeleteOutlined />}></Button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default EventRow;
