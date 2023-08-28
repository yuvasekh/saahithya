import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import { Button, Menu } from "antd";
import { Link } from "react-router-dom";
import CreateCompetation from "./Competation.jsx";
import QuizCreation from "../Quiz/QuizCreation.jsx";
import CategoryOptions from "../categories/CategoryOptiions.jsx";
import DummyCarousel from "../DummyCarousel.jsx";

const Teams = () => {
  const [showItem, setShowItem] = useState(<CreateCompetation />);
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
// useEffect(()=>
// {

// },[showItem])
  const items = [
    getItem("Categories", "1", <PieChartOutlined />, [
      getItem("Each Category", "11"),
      getItem("Top Rated", "12"),
      getItem("Top Commented", "13"),
    ]),
    getItem("Competitions", "2", <DesktopOutlined />, [
      getItem("createcompetataion", "21"), // This line seems incorrect, fix the usage of the Link component
      getItem("Competions", "23"),
      getItem("Scores", "24"),
    ]),
    getItem("ChatRoom", "3", <ContainerOutlined />),
    getItem("Requests", "4", <MailOutlined />, [
      getItem("Become a Author", "41"),
      getItem("Transactions", "42"),
      getItem("WithdrawRequest", "43"),
    ]),
    getItem("Messages", "5", <AppstoreOutlined />, [
      getItem("Admin", "51"),
      getItem("Users", "52"),
      // getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
    ]),
  ];

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const selection = (values) => {
    if(values==11)
    {
      setShowItem(<CategoryOptions />);
    }
    if(values==12)
    {
      setShowItem(<DummyCarousel />);
    }
    if (values == 21) {
      setShowItem(<CreateCompetation key={showItem} />);
    }
    console.log(values, "values");
  };
  return (
    <div
      style={{
        display: "flex", 
      }}
    >
      <div
        style={{
          width: collapsed ? 80 : 256, 
          transition: "width 0.2s", 
        }}
      >
        <Button
          type="primary"
          onClick={toggleCollapsed}
          style={{
            marginBottom: 16,
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </Button>
        <Menu
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
          inlineCollapsed={collapsed}
          items={items}
          onClick={({ key }) => {
            selection(key);
          }}
        ></Menu>
      </div>
      <div style={{ flex: 1, padding: "20px" }}>{showItem}</div>
    </div>
  );
};

export default Teams;
