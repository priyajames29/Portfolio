import React from 'react';
import { Layout, Menu, type MenuProps } from 'antd';
import { useNavigate } from 'react-router-dom';

const { Content, Footer } = Layout;

interface OutlineProps {
    children?: React.ReactNode;
}

const Outline: React.FC<OutlineProps> = ({ children }) => {
    const navigate = useNavigate();

    const handleMenuItemClick: MenuProps['onClick'] = (e) => {
        if (e.key === 'home') {
            navigate('/'); // Navigate to the home page
        } else if (e.key === 'about') {
            navigate('/about'); // Navigate to the about page
        } else if (e.key === 'linkedin') {
            // For external links, you'd use window.open or a regular <a> tag
            window.open('https://www.linkedin.com/in/priya-anna-james/', '_blank');
        } else if (e.key === 'creations') {
            navigate('/creations'); // Navigate to the login page
        }
    };

    const menuItems: MenuProps['items'] = [
        { key: 'home', label: 'Home' },
        { key: 'about', label: 'About' },
        { key: 'creations', label: 'Creations' },
        { key: 'linkedin', label: 'LinkedIn' },
    ];


    return (
        <Layout>
            <Content style={{ width: '100%', height: '95vh', display: 'flex', justifyContent: 'center', backgroundColor: 'rgb(233, 231, 231)', flexDirection: 'column', alignItems: 'center' }}>
                <Menu
                    // theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}
                    style={{ 
                        boxShadow: '5px 5px 5px rgba(0, 0, 0, 0.3)', 
                        // zIndex: '3', 
                        // display: 'flex', 
                        paddingLeft: '0',
                        justifyContent: 'center', 
                        backgroundColor: 'white', 
                        color: 'black', 
                        height: '60px', 
                        marginTop: '10px',
                        fontSize: '20px',
                        fontWeight: 'bold',
                        alignItems: 'center',
                        width: '80%',
                    borderRadius: '15px' }}
                    items={menuItems}
                    onClick={handleMenuItemClick}
                    selectable={false}
                />
                <div style={{height: '90%', display: 'flex', justifyContent: 'center'}}>
                {children}
                </div>
            </Content>
            <Footer style={{ backgroundColor: 'rgb(233, 231, 231)', color: 'black', flex: '1' }}>
                priyajames.mec@gmail.com
            </Footer>
        </Layout>
    )
}

export default Outline