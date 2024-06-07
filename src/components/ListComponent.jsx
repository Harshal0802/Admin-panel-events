import React from 'react';
import { Avatar, List } from "antd";

const ListComponent = ({data}) => {
  return (
    <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item.Meta
            style={{
              fontSize: "16px",
              color: "#dbfff9",
              display: "flex",
              alignItems: "center",
              lineHeight: "5px",
              cursor: "pointer",
            }}
            avatar={
              <Avatar
                icon={item.logo}
                style={{ fontSize: "20px", marginRight: "10px" }}
              />
            }
            title={item.title}
          />
        )}
      />
  )
}

export default ListComponent;
