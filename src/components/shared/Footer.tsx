"use client";

import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";
import React from "react";
import { Layout } from "antd";
const { Footer: AntFooter } = Layout;
import logo from "@/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <AntFooter className="px-4 divide-y bg-gray-800 text-gray-100">
      <div className="container grid lg:grid-cols-3   justify-center py-10 mx-auto space-y-8  lg:space-y-0">
        <div className="flex justify-center">
          <Image src={logo} alt="logo" width={250} height={80} />
        </div>
        <div className="flex justify-center">
          <div>
            <div className="uppercase text-gray-50 mb-3">Important Links</div>
            <div className=" flex flex-col gap-3">
              <Link href="/" className="text-white">
                Home
              </Link>
              <Link href="/" className="text-white">
                Donation
              </Link>
              <Link href="/" className="text-white">
                Categories
              </Link>
              <Link href="/" className="text-white">
                Privacy and policy
              </Link>
            </div>
          </div>
        </div>
        <div className=" flex justify-center">
          <div className="space-y-3">
            <div className="uppercase text-gray-50">Social media</div>
            <div className="flex justify-start space-x-3 text-2xl text-white">
              <FacebookOutlined />
              <TwitterOutlined />
              <LinkedinOutlined />
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center text-gray-400">
        © 1968 Company Co. All rights reserved.
      </div>
    </AntFooter>
  );
};

export default Footer;
