import React from 'react';
import { Menu, type MenuProps } from 'antd';
import './Navbar.css'

type NavbarProps = {
    onMenuClick: (key: string) => void;
};

const Navbar: React.FC<NavbarProps> = ({ onMenuClick }) => {

    const menuItems: MenuProps['items'] = [
        { key: 'home', label: 'Home' },
        { key: 'about', label: 'About' },
        { key: 'creations', label: 'Creations' },
        { key: 'contact', label: 'Contact' }
    ];

    return (
        <Menu
            mode="horizontal"
            style={{
                boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)',
                display: 'flex',
                zIndex: 3,
                paddingLeft: 0,
                justifyContent: 'center',
                opacity: 0.8,
                color: 'black',
                height: '60px',
                marginTop: '10px',
                fontSize: '20px',
                fontWeight: 'bold',
                alignItems: 'center',
                width: '80%',
                borderRadius: '15px'
            }}
            // className='nav-text'
            items={menuItems}
            selectable={false}
            onClick={({ key }) => onMenuClick(key)}
        />
    )
}

export default Navbar
