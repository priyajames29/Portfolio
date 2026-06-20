import { Button, Card, Col, Row, Space, Tag } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import "./Home.css";
import { Content } from "antd/es/layout/layout";

const Home = () => {
  const handleClick = () => {
    window.open("https://www.linkedin.com/in/priya-anna-james/", "_blank");
  };
  return (
    <Content
      style={{
        maxWidth: 1200,
        margin: "80px auto",
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Row gutter={[80, 40]} align="middle" justify="center">
        <Card
          variant="outlined"
          style={{
            width: 250,
            background: "#e8efff",
            borderRadius: 12,
            padding: 8,
            transform: "rotate(-4deg)",
            boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
          }}
        >
          <img
            src="/myPic.jpg"
            alt="Priya Anna James"
            className="profile-image"
            style={{
              width: "100%",
              height: 220,
              objectFit: "cover",
              borderRadius: 4,
            }}
          />
          <Paragraph
            style={{
              marginTop: 16,
              color: "#737373",
              fontSize: 14,
              alignContent: "center",
            }}
          >
            Hey there! Nice to meet you.
          </Paragraph>
        </Card>
        {/* Right Content */}
        <Col xs={24} md={14}>
          <Space size={12} style={{ marginBottom: 24 }}>
            <Tag
              color="#e8efff"
              style={{
                padding: "6px 14px",
                border: "none",
                color: "#333",
              }}
            >
              Frontend Developer
            </Tag>

            <Tag
              color="#f8d894"
              style={{
                padding: "6px 14px",
                border: "none",
                color: "#333",
              }}
            >
              Full Stack Developer
            </Tag>
          </Space>

          <Title
            style={{
              fontSize: 64,
              lineHeight: 1.1,
              fontWeight: 400,
              marginBottom: 24,
            }}
          >
            👋 <span style={{ color: "#4472d7" }}>Hi</span> from Priya
          </Title>

          <Paragraph
            style={{
              fontSize: 24,
              color: "#666",
              maxWidth: 650,
              marginBottom: 36,
            }}
          >
            A passionate Full Stack Developer with over three years of
            experience creating scalable, user-centric web applications using
            React and Node.js.
          </Paragraph>

          <Space size={16}>
            {/* <Button
              type="primary"
              size="large"
              shape="round"
              style={{
                height: 52,
                paddingInline: 32,
                background: "#d76c44",
                borderColor: "#d76c44",
              }}
            >
              Case Studies
            </Button> */}

            <Button
              size="large"
              shape="round"
              style={{
                height: 52,
                paddingInline: 32,
                borderWidth: 1.5,
                background: "#4472d7",
                borderColor: "#4472d7",
                color: "white",
              }}
              onClick={handleClick}
            >
              Connect on Linkedin
            </Button>
          </Space>
        </Col>
      </Row>
    </Content>
  );
};
export default Home;
