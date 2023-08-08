import React, { useState } from 'react'
import {
    AppstoreOutlined,
    ContainerOutlined,
    DesktopOutlined,
    MailOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
  } from '@ant-design/icons';
  import { Button, Menu } from 'antd';
 const Teams = () => {
  
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
        getItem('Categories', '1', <PieChartOutlined />, [
            getItem('Each Category', '5'),
            getItem('Top Rated', '6'),
            getItem('Top Commented', '7'),
          ]),
        getItem('Competitions', '2', <DesktopOutlined />,[
            getItem('Create  competation', '5'),
            getItem('Competions', '6'),
            getItem('Scores','7'),
          ]
        ),
        getItem('ChatRoom', '3', <ContainerOutlined />),
        getItem('Requests', 'sub1', <MailOutlined />, [
          getItem('Become a Author', '5'),
          getItem('Transactions', '6'),
          getItem('WithdrawRequest', '7'),
        ]),
        getItem('Messages', 'sub2', <AppstoreOutlined />, [
          getItem('Admin', '9'),
          getItem('Users', '10'),
        //   getItem('Submenu', 'sub3', null, [getItem('Option 11', '11'), getItem('Option 12', '12')]),
        ]),
      ];
      const [collapsed, setCollapsed] = useState(false);
  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };
  return (
    <div
    style={{
      width: 256,
    }}
  >
    {/* <Button
      type="primary"
      onClick={toggleCollapsed}
      style={{
        marginBottom: 16,
      }}
    >
      {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
    </Button> */}
    <Menu
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
      theme="dark"

      items={items}
    />
  </div>
  )
}
export default Teams;
