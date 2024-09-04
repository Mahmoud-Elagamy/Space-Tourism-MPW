"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Drawer, Button } from "antd";

import NavLinks from "./NavLinks";
import logo from "@/../public/assets/shared/logo.svg";
import IconClose from "./IconClose";
import IconHamburger from "./IconHamburger";

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  const showDrawer = () => setDrawerVisible(true);
  const closeDrawer = () => setDrawerVisible(false);

  return (
    <header className="absolute left-0 right-0 top-10 mx-auto max-w-[1536px] md:top-16">
      <div className="container flex items-center justify-between">
        <Link href="/" title="Logo" aria-label="Navigate to homepage">
          <Image src={logo} alt="Logo" width={48} height={48} priority />
        </Link>

        <nav className="absolute left-[45%] right-0 hidden rounded-sm border border-white/20 bg-gradient-to-r from-[#0b0d1780] to-[#0c1d3980] p-6 drop-shadow-lg backdrop-blur-md before:absolute before:-left-[55%] before:top-1/2 before:z-[1] before:block before:h-[1px] before:w-[58%] before:-translate-y-1/2 before:bg-gradient-to-r before:from-white/50 before:to-white/25 lg:block">
          <NavLinks />
        </nav>

        <Button
          className="lg:hidden"
          type="text"
          icon={<IconHamburger />}
          onClick={showDrawer}
          aria-label="Open menu"
        />

        <Drawer
          placement="right"
          onClose={closeDrawer}
          open={drawerVisible}
          width={270}
          closeIcon={<IconClose />}
          style={{
            backgroundColor: "#0b0d1760",
            backdropFilter: "blur(3px)",
          }}
        >
          <NavLinks closeDrawer={closeDrawer} />
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
