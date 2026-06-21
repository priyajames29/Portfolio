import React from "react";
import { Row, Col, Typography, Space, Tag } from "antd";
import "./AboutPage.css";

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
    <section id="about" className="about-container">
      <Title level={1} className="about-title">
        About Me
      </Title>

      <Row gutter={[48, 48]} align="middle">
        {/* Left */}
        <Col xs={24} md={10}>
          <Title level={3} className="section-title">
            Where I've Worked
          </Title>

          <div className="companies-grid">
            {companies.map((company) => (
              <div key={company.name} className="company-card">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="company-logo"
                />
              </div>
            ))}
          </div>
        </Col>

        {/* Right */}
        <Col xs={24} md={14}>
          <Title level={2} className="heading">
            Building products with purpose.
          </Title>

          <Paragraph className="about-text">
            I'm a Full Stack Developer who enjoys building products that balance
            exceptional user experiences with robust engineering.
          </Paragraph>

          <Paragraph className="about-text">
            Over the past three years, I've worked on applications serving more
            than 300,000 users, contributing across the entire product
            lifecycle—from crafting responsive React interfaces to designing
            scalable backend services with Node.js and TypeScript.
          </Paragraph>

          <Paragraph className="about-text">
            My experience spans public-sector platforms, AI-powered
            applications, and mobility solutions. I enjoy solving complex
            problems, improving developer workflows through testing and
            automation, and building software that creates meaningful impact.
          </Paragraph>

          <Space size={[12, 12]} wrap style={{ marginTop: 20 }}>
            {skills.map((skill) => (
              <Tag key={skill} className="skill-tag">
                {skill}
              </Tag>
            ))}
          </Space>
        </Col>
      </Row>
    </section>
  );
};

export default About;
