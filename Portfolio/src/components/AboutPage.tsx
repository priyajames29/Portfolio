import React from "react";
import { Row, Col, Typography, Space, Tag } from "antd";

const { Title, Paragraph } = Typography;

const skills = [
  "React",
  "TypeScript",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Ant Design",
];

const companies = [
  {
    name: "Company 1",
    logo: "/twLogo.png",
  },
];

const About: React.FC = () => {
  return (
    <div
      id="about"
      style={{
        maxWidth: "1200px",
        margin: "120px auto",
        padding: "0 24px",
      }}
    >
      <Title
        level={1}
        style={{
          textAlign: "center",
          marginBottom: "70px",
          fontWeight: 700,
        }}
      >
        About Me
      </Title>

      <Row gutter={[48, 48]} align="middle">
        {/* Left */}
        <Col xs={24} md={10}>
          <Title
            level={3}
            style={{
              marginBottom: "32px",
              textAlign: "center",
            }}
          >
            Where I've Worked
          </Title>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(180px, max-content))",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {companies.map((company) => (
              <div
                key={company.name}
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "180px",
                  height: "100px",
                  borderRadius: "20px",
                  background: "#fff",
                  border: "1px solid #f0f0f0",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.04)",
                }}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  style={{
                    maxWidth: "120px",
                    maxHeight: "50px",
                    objectFit: "contain",
                  }}
                />
              </div>
            ))}
          </div>
        </Col>

        {/* Right */}
        <Col xs={24} md={14}>
          <Title
            level={2}
            style={{
              marginBottom: 24,
            }}
          >
            Building products with purpose.
          </Title>

          <Paragraph
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              color: "#555",
            }}
          >
            I'm a Full Stack Developer who enjoys building products that balance
            exceptional user experiences with robust engineering.
          </Paragraph>

          <Paragraph
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              color: "#555",
            }}
          >
            Over the past three years, I've worked on applications serving more
            than 300,000 users, contributing across the entire product
            lifecycle—from crafting responsive React interfaces to designing
            scalable backend services with Node.js and TypeScript.
          </Paragraph>

          <Paragraph
            style={{
              fontSize: "18px",
              lineHeight: 1.9,
              color: "#555",
            }}
          >
            My experience spans public-sector platforms, AI-powered
            applications, and mobility solutions. I enjoy solving complex
            problems, improving developer workflows through testing and
            automation, and building software that creates meaningful impact.
          </Paragraph>

          <Space size={[12, 12]} wrap style={{ marginTop: 20 }}>
            {skills.map((skill) => (
              <Tag
                key={skill}
                style={{
                  padding: "8px 16px",
                  borderRadius: "999px",
                  border: "none",
                  background: "#4472d715",
                  color: "#4472d7",
                  fontSize: "15px",
                  fontWeight: 500,
                }}
              >
                {skill}
              </Tag>
            ))}
          </Space>
        </Col>
      </Row>
    </div>
  );
};

export default About;
