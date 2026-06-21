import React from "react";
import { Menu, Button } from "antd";
import { CodeOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import "./Navbar.css";

type NavbarProps = {
  onMenuClick: (key: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {
  const menuItems: MenuProps["items"] = [
    { key: "home", label: "Home" },
    { key: "about", label: "About" },
    { key: "creations", label: "Creations" },
  ];

  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <CodeOutlined />
        <span>Priya.</span>
      </div>

      <div className="navbar-right">
        <Menu
          mode="horizontal"
          items={menuItems}
          selectable={false}
          className="navbar-menu"
          onClick={({ key }) => onMenuClick(key)}
        />

        <Button
          type="primary"
          shape="round"
          size="large"
          className="hire-btn"
          onClick={() => onMenuClick("contact")}
        >
          Let's Connect
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
