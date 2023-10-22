"use client"

import Link from "next/link";
import {
  Button,
  Menu,
  Layout,
  Space,
  Dropdown,
  Row,
  Col,
  Avatar,
  MenuProps,
  Divider
} from "antd";
import { MenuOutlined, UserOutlined } from "@ant-design/icons";
import { usePathname, useRouter } from "next/navigation";
import Marquee from "react-fast-marquee";
const { Header } = Layout;
const items = [
  {
    key: "1",
    label: <Link href="/my-profile">My Profile</Link>,
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

const newses = [
    {
        title:'One',
        href:'/'
    },
    {
        title:'Two',
        href:'/'
    },
    {
        title:'Four',
        href:'/'
    },
    {
        title:'Five',
        href:'/'
    },
    {
        title:'Six',
        href:'/'
    },
    {
        title:'Seven',
        href:'/'
    },
    {
        title:'Eight',
        href:'/'
    },
]

const AppHeader = () => {
  const router = useRouter();
  const user = "";
  return (
    <Layout>
      <Header className="flex sticky opacity-100 top-0 z-50 justify-between items-center bg-white">
      
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
      <Divider className="m-0 p-0"/>
      <div className=" bg-white text-center dark:text-white text-black">
				<Row align="middle" justify='center'>
					{
                        newses.map(news=>(
                           <Col xs={20} className="py-4" sm={16} md={6} lg={3} key={news.title}>
                            <Link  className="text-black font-poppins font-bold" key={news.title} href="/" type="text">{news.title}</Link>
                           </Col>
                        ))
                    }
				</Row>
			</div>
            <Divider className="m-0 p-0"/>
    </Layout>
  );
};
export default AppHeader;
