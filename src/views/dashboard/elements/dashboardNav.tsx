import React, { useState } from "react";
import logo from "./logo.svg";
import { Button, Row, Col, Card } from "antd";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import Gallery from "./gallery";

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default function DashNav() {
  const [content, setContent] = useState(<div></div>);

  return (
    <div>
      <Layout>
        <Header className="header">
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
            <Menu.Item
              key="1"
              onClick={() => {
                console.log("Roll Dice Selected");
                setContent(<Card>{<Gallery />}</Card>);
              }}
            >
              Gallery
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
      <Layout>
        <Content>{content}</Content>
      </Layout>
    </div>
  );
}
