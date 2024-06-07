import {
    HomeOutlined,
    SearchOutlined,
    ProjectOutlined,
    TeamOutlined,
    ClusterOutlined,
    SettingOutlined,
    UsergroupAddOutlined,
    LogoutOutlined,
  } from "@ant-design/icons";

const data = [
    {
      title: "Dashboard",
      logo: <HomeOutlined />,
    },
    {
      title: "Search",
      logo: <SearchOutlined />,
    },
    {
      title: "Projects",
      logo: <ProjectOutlined />,
    },
    {
      title: "My Team",
      logo: <TeamOutlined />,
    },
    {
      title: "About Us",
      logo: <ClusterOutlined />,
    },
  ];
  
  const data2 = [
    {
      title: "Settings",
      logo: <SettingOutlined />,
    },
    {
      title: "Help",
      logo: <UsergroupAddOutlined />,
    },
    {
      title: "Logout",
      logo: <LogoutOutlined />,
    },
  ];

  const eventList = [
    {
      id: 1,
      title: "DCT Event",
      dateAndTime: "20 June 2024 & 5:00 PM",
    },
    {
      id: 2,
      title: "Dcafe Event",
      dateAndTime: "20 June 2024 & 5:00 PM",
    },
    {
      id: 3,
      title: "Tower Research  Event",
      dateAndTime: "20 June 2024 & 5:00 PM",
    },
    {
      id: 4,
      title: "Meta Event",
      dateAndTime: "20 June 2024 & 5:00 PM",
    },
    {
      id: 5,
      title: "Tower Research Event",
      dateAndTime: "20 June 2024 & 5:00 PM",
    },
  ];

  export {data, data2, eventList};