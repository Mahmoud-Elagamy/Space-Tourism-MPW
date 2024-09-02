"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";

import NavLinks from "./NavLinks";
import logo from "@/../public/assets/shared/logo.svg";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <header className="relative mt-8 md:mt-16">
      <div className="container flex items-center justify-between">
        <Link href="/" title="Logo" aria-label="Navigate to homepage">
          <Image src={logo} alt="Logo" width={48} height={48} priority />
        </Link>
        <nav className="absolute left-[45%] right-0 hidden rounded-sm bg-[#D0D6F9]/5 p-8 drop-shadow backdrop-blur before:absolute before:-left-[55%] before:top-1/2 before:z-[1] before:block before:h-[1px] before:w-[58%] before:-translate-y-1/2 before:bg-white/25 md:block">
          <NavLinks />
        </nav>
        <Button
          className="md:hidden"
          type="text"
          icon={<MenuOutlined />}
          onClick={showDrawer}
        />
        <Drawer
          placement="right"
          onClose={closeDrawer}
          open={drawerVisible}
          width={270}
        >
          <NavLinks />
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
