import React, { useState } from "react";
import {
  Typography,
  Input,
  Layout,
  DatePicker,
  TimePicker,
  Button,
} from "antd";

const CreateEvent = () => {
  const [eventName, setEventName] = useState("");
  const [date, setEventDate] = useState("");
  const [time, setEventTime] = useState("");
  const [duration, setEventDuration] = useState("");
  const [description, setDescription] = useState("");

  const eventData = {
    eventName: eventName,
    date: date,
    time: time,
    duration: duration,
    description: description,
    id: Math.floor(Math.random() * 100000),
  };

  const onChangeDate = (date, dateString) => {
    const newdate = new Date(dateString);
    const formatDate = newdate?.toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    setEventDate(formatDate);
  };

  const onChangeTime = (time, timeString) => {
    console.log("time", time, "timeString", timeString);
    setEventTime(timeString);
  };

  const onChangeDuration = (time, timeString) => {
    console.log("time", time, "timeString", timeString);
    setEventDuration(timeString);
  };
  console.log(eventData);
  return (
    <Layout
      style={{
        backgroundColor: "#f0f7f4",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography.Title level={2}>Create Event</Typography.Title>
      <div style={{ width: "40%" }}>
        <Typography.Title level={4}>Event name</Typography.Title>
        <Input
          placeholder="Enter event name"
          onChange={(e) => setEventName(e.target.value)}
          style={{ height: "40px" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Typography.Title level={4}>Date</Typography.Title>
            <DatePicker onChange={onChangeDate} style={{ height: "40px" }} />
          </div>
          <div>
            <Typography.Title level={4}>Time</Typography.Title>
            <TimePicker
              onChange={onChangeTime}
              format={"HH:mm"}
              style={{ height: "40px" }}
            />
          </div>
          <div>
            <Typography.Title level={4}>Duration</Typography.Title>
            <TimePicker
              onChange={onChangeDuration}
              format={"HH:mm"}
              placeholder="Select Duration"
              style={{ height: "40px" }}
            />
          </div>
        </div>
        <Typography.Title level={4}>Event description</Typography.Title>
        <Input.TextArea
          placeholder="Enter event name"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          style={{
            width: "100%",
            marginTop: "30px",
            backgroundColor: "#001d22",
            color: "#f0f7f4",
            height: "40px",
            fontSize: "17px",
          }}
        >
          Create Event
        </Button>
      </div>
    </Layout>
  );
};

export default CreateEvent;
