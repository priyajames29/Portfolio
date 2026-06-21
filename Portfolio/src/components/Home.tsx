import { Button, Card, Col, Row, Space, Tag } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { Content } from "antd/es/layout/layout";
import "./Home.css";

const Home = () => {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/priya-anna-james/", "_blank");
  };

  return (
    <Content className="home-container">
      <Row gutter={[48, 40]} align="middle" justify="center">
        {/* Profile Card */}
        <Card variant="outlined" className="profile-card">
          <img
            src="/myPic.jpg"
            alt="Priya Anna James"
            className="profile-image"
          />

          <Paragraph className="profile-caption">
            Hey there! Nice to meet you.
          </Paragraph>
        </Card>

        {/* Right Content */}
        <Col xs={24} md={14}>
          <Space size={[12, 12]} wrap className="role-tags">
            <Tag className="tag-blue">Frontend Developer</Tag>
            <Tag className="tag-yellow">Full Stack Developer</Tag>
          </Space>

          <Title className="hero-title">
            👋 <span className="highlight">Hi</span> from Priya
          </Title>

          <Paragraph className="hero-description">
            A passionate Full Stack Developer with over three years of
            experience creating scalable, user-centric web applications using
            React and Node.js.
          </Paragraph>

          <Button
            size="large"
            shape="round"
            className="linkedin-button"
            onClick={handleClick}
          >
            Connect on LinkedIn
          </Button>
        </Col>
      </Row>
    </Content>
  );
};

export default Home;
