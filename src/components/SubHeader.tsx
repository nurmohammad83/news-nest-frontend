"use client";

import { categories } from "@/app/constants/category";
import { Col, Divider, Row } from "antd";
import Link from "next/link";

const SubHeader = () => {
  return (
    <div>
      <Divider className="m-0 p-0" />
      <div className=" bg-white text-center dark:text-white text-black">
        <Row align="middle" justify="center">
          {categories.map((category:any) => (
            <Col
              xs={20}
              className="py-4"
              sm={16}
              md={6}
              lg={3}
              key={category.title}
            >
              <Link
                className="text-black font-poppins font-bold"
                key={category.title}
                href={category.href}
                type="text"
              >
                {category.title}
              </Link>
            </Col>
          ))}
        </Row>
      </div>
      <Divider className="m-0 p-0" />
    </div>
  );
};
export default SubHeader;
