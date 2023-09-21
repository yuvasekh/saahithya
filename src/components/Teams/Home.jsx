import React, { useEffect, useState } from "react";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  FlagOutlined,
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
import PoleCreation from "../Quiz/PoleCreation.jsx";
import OnGoingCompetation from "./OnGoingCompetation.jsx";
import Quiz from "../Quiz/Quiz.jsx";
import Poll from "../Quiz/Poller.jsx";
import Reports from "./Reports.jsx";
import TopCommentedBooks from "./TopCommentedBooks.jsx";

const Teams = () => {
  
  const sendData = (data) => {
    console.log(data,"valuesssssssssssss")
    if(data=='poll')
    {
      setShowItem(<PoleCreation/>)
    }
    if(data=='quiz')
    {
      setShowItem(<QuizCreation/>)
    }
    if(data=='pollarea')
    {
      setShowItem(<Poll/>)
    }
    if(data=='quizarea')
    {
      setShowItem(<Quiz/>)
    }
  }
  const [showItem, setShowItem] = useState(<CreateCompetation sendData={sendData} />);
  useEffect(()=>
    {
    },[showItem])
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    getItem("Categories", "1", <PieChartOutlined />, [
      getItem("Each Category", "11"),
      getItem("Top Rated", "12"),
      getItem("Top Commented", "13"),
    ]),
    getItem("Competitions", "2", <DesktopOutlined />, [
      getItem("createcompetataion", "21"), // This line seems incorrect, fix the usage of the Link component
      getItem("OnGoingCompetions", "23"),
      getItem("Scores", "24"),
    ]),
    getItem("Reports", "3", <FlagOutlined />, [
      getItem("BooksReports", "31"),

    ]),
    getItem("Requests", "3", <MailOutlined />, [
      getItem("Transactions", "32"),
      getItem("WithdrawRequest", "33"),
    ]),
  ];

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  const selection = (values) => {

    console.log(values,"click")
    if(values==11)
    {
      setShowItem(<CategoryOptions />);
    }
    if(values==12)
    {
      setShowItem(<DummyCarousel />);
    }
    if(values==13)
    {
      setShowItem(<TopCommentedBooks />);


    }
    if (values == 21) {
      setShowItem(<CreateCompetation sendData={sendData} />);
    }
    if (values == 23) {
      setShowItem(<OnGoingCompetation sendData={sendData} />);
    }
    if (values == 31) {
      setShowItem(<Reports sendData={sendData} />);
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
