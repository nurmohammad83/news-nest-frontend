"use client"

import Link from "next/link";
import {
  Button,
  Menu,
  Layout,
  Space,
  Dropdown,
  Avatar,
  MenuProps,
} from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
const { Header } = Layout;
const items = [
  {
    key: "1",
    label: <Link href="/">My Profile</Link>,
  },
  {
    key: "1",
    label: <Link href="/dashboard">My Dashboard</Link>,
  },
  {
    key: "1",
    label: <Link href="/">Logout</Link>,
  },
];
const AppHeader = () => {
  const router = useRouter();
  const user = "";
  return (
    <Layout>
      <Header className="flex sticky opacity-100 top-0 z-50 justify-between shadow-lg items-center bg-white">
      
      <div className="flex items-center">
        <Link href="/">
          <h3 className="font-roboto text-2xl text-primary">News Nest</h3>
        </Link>
      </div>
      
        <Menu>
          {user ? (
            <div
              style={{ display: "flex", justifyContent: "center", gap: "5px" }}
            >
              <Dropdown menu={{ items }}>
                <a>
                  <Space size={28}>
                    <Avatar
                      shape="circle"
                      icon={<UserOutlined />}
                      size="large"
                    />
                  </Space>
                </a>
              </Dropdown>
            </div>
          ) : (
            <Button
              size="large"
              className="bg-primary font-poppins font-medium text-white border-none"
              onClick={() => {
                router.push("/login");
              }}
            >
              Sign In
            </Button>
          )}
        </Menu>
      </Header>
    </Layout>
  );
};
export default AppHeader;
