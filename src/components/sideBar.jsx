import React from "react";
import { UserOutlined } from "@ant-design/icons";
import { Typography, Avatar, Divider } from "antd";
import { data, data2 } from "../constants";
import { useAuth0 } from "@auth0/auth0-react";
import ListComponent from "./ListComponent";

const SideBar = () => {
  const { user } = useAuth0();
  return (
    <>
      <Typography.Title
        level={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#dbfff9",
        }}
      >
        <Avatar
          icon={<UserOutlined />}
          style={{
            marginRight: "20px",
            width: "40px",
            height: "40px",
            backgroundColor: "#dbfff9",
            color: "#001d22",
          }}
        />
        {user?.name || "Username"}
      </Typography.Title>
      <Divider style={{ backgroundColor: "#f0f7f4" }} />
      <ListComponent data={data} />
      <Divider style={{ backgroundColor: "#f0f7f4" }} />
      <ListComponent data={data2} />
    </>
  );
};

export default SideBar;
