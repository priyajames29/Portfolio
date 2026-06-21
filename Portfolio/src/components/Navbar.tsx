import React, { useState } from "react";
import { Menu, Button, Drawer } from "antd";
import { CodeOutlined, MenuOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import "./Navbar.css";

type NavbarProps = {
  onMenuClick: (key: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const [open, setOpen] = useState(false);

  const menuItems: MenuProps["items"] = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "creations", label: "Creations" },
  ];

  const handleMenuClick = (key: string) => {
    onMenuClick(key);
    setOpen(false);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">
          <CodeOutlined />
          <span>Priya.</span>
        </div>

        {/* Desktop */}
        <div className="navbar-right desktop-nav">
          <Menu
            mode="horizontal"
            items={menuItems}
            selectable={false}
            className="navbar-menu"
            onClick={({ key }) => handleMenuClick(key)}
          />

          <Button
            type="primary"
            shape="round"
            size="large"
            className="hire-btn"
            onClick={() => handleMenuClick("contact")}
          >
            Let's Connect
          </Button>
        </div>

        {/* Mobile */}
        <Button
          type="text"
          icon={<MenuOutlined />}
          className="mobile-menu-btn"
          onClick={() => setOpen(true)}
        />
      </div>

      <Drawer
        title="Navigation"
        placement="right"
        onClose={() => setOpen(false)}
        open={open}
        width={280}
      >
        <Menu
          mode="vertical"
          items={menuItems}
          selectable={false}
          onClick={({ key }) => handleMenuClick(key)}
        />

        <Button
          type="primary"
          block
          size="large"
          style={{ marginTop: 24 }}
          onClick={() => handleMenuClick("contact")}
        >
          Let's Connect
        </Button>
      </Drawer>
    </>
  );
};

export default Navbar;
