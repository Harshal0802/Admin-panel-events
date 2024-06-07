import React, { useState } from "react";
import { Layout, Button, Typography, Avatar, List, Divider } from "antd";
import { useAuth0 } from "@auth0/auth0-react";
import EventList from "../components/EventList";
import CreateEvent from "./CreateEvent";
import { PlusOutlined } from "@ant-design/icons";
import SideBar from "../components/sideBar";
const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const { user } = useAuth0();
  const [showCreateEvent, setShowCreateEvent] = useState(false);
  console.log(user);
  return (
    <Layout style={{ width: "100%", height: "100vh", backgroundColor: "#fff" }}>
      <Sider
        width="25%"
        style={{
          backgroundColor: "#001d22",
          display: "flex",
          paddingLeft: "30px",
          justifyContent: "flex-start",
          alignItems: "center",
          borderRight: "5px solid black",
          color: "#dbfff9",
        }}
      >
        <SideBar />
      </Sider>
      <Layout style={{ backgroundColor: "#f0f7f4" }}>
        <Header
          style={{
            backgroundColor: "#f0f7f4",
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 50px 90px 50px",
            borderBottom: "1px solid #001d22",
          }}
        >
          <Typography.Title level={3}>Dashboard</Typography.Title>
          <Button
            icon={<PlusOutlined />}
            iconPosition={"end"}
            style={{
              marginTop: "30px",
              marginBottom: "50px",
              backgroundColor: "#001d22",
              color: "#dbfff9",
            }}
            onClick={() => setShowCreateEvent(!showCreateEvent)}
          >
            Create Event
          </Button>
        </Header>
        <Content
          style={
            showCreateEvent
              ? {
                  backgroundColor: "#f0f7f4",
                }
              : {
                  textAlign: "center",
                  lineHeight: "70px",
                  backgroundColor: "#f0f7f4",
                }
          }
        >
          {showCreateEvent ? <CreateEvent /> : <EventList />}
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
