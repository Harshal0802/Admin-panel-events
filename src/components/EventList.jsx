import React from "react";
import { Row, Col, Typography } from "antd";
import EventRow from "./EventRow";
import {eventList} from "../constants";


const titleStyle = {
  color: "#f0f7f4",
};

const EventList = () => {
  return (
    <div
      style={{
        backgroundColor: "#fff",
        margin: "30px 100px",
      }}
    >
      <Row style={{ backgroundColor: "#001d22", paddingBottom: "12px" }}>
        <Col span={6}>
          <Typography.Title level={4} style={titleStyle}>
            Event ID
          </Typography.Title>
        </Col>
        <Col span={6}>
          <Typography.Title level={4} style={titleStyle}>
            Title
          </Typography.Title>
        </Col>
        <Col span={6}>
          <Typography.Title level={4} style={titleStyle}>
            Date & Time
          </Typography.Title>
        </Col>
        <Col span={6}>
          <Typography.Title level={4} style={titleStyle}>
            Actions
          </Typography.Title>
        </Col>
      </Row>
      {eventList.map((item) => {
        console.log(item);
        return <EventRow data={item}/>;
      })}
    </div>
  );
};

export default EventList;
