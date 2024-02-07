"use client";

import { MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Drawer, Layout, Menu, Typography } from "antd";
import Image from "next/image";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import logo from "@/assets/Logo.png";

const { Header, Content } = Layout;
const { Title } = Typography;

const items = [
  { key: "1", label: "Home", href: "/" },
  { key: "2", label: "Services", href: "/services" },
  // { key: "2", label: "Dashboard", href: "/dashboard" },
];

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Layout className="layout shadow-lg w-full fixed top-0">
      <Header className="flex items-center py-8 bg-white ">
        <Content>
          <Link href="/">
            <Title className="m-0 text-2xl flex items-center">
              <Image src={logo} alt="logo" width={150} height={50} />
            </Title>
          </Link>
        </Content>
        <Menu
          className="lg:block hidden"
          disabledOverflow
          mode="horizontal"
          selectedKeys={[pathname]}
        >
          {items?.map((item) => (
            <Menu.Item key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </Menu.Item>
          ))}

          <Menu.Item key="5">
            <Link href="/dashboard">Dashboard</Link>
          </Menu.Item>

          <Button
            className="ml-4"
            ghost
            size="large"
            type="primary"
            onClick={() => {
              router.push("/login");
            }}
          >
            Login
          </Button>
        </Menu>
        <Button onClick={showDrawer} className="lg:hidden block">
          <MenuUnfoldOutlined />
        </Button>
        <Drawer title="Basic Drawer" onClose={onClose} open={open}>
          <Menu
            className="lg:hidden block"
            disabledOverflow
            mode="vertical"
            selectedKeys={[pathname]}
          >
            {items?.map((item) => (
              <Menu.Item key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </Menu.Item>
            ))}
          </Menu>
        </Drawer>
      </Header>
    </Layout>
  );
};

export default Navbar;
