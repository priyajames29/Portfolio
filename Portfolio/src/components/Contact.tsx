import { Button, Card, Space, Typography } from "antd";

import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  DownloadOutlined,
} from "@ant-design/icons";

import { motion } from "framer-motion";
import "./Contact.css";

const { Title, Paragraph } = Typography;

const Contact = () => {
  const resumeUrl = "/Priya_Anna_James_Resume.pdf";

  return (
    <section id="contact" className="contact-section">
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        <Card className="contact-card" bordered={false}>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              delay: 0.2,
              duration: 0.5,
            }}
          >
            <div className="status-pill">🚀 Open to New Opportunities</div>
          </motion.div>

          <Title className="contact-title">
            Let's Build Something Great Together
          </Title>

          <Paragraph className="contact-description">
            I'm currently open to Full Stack Developer, Frontend Developer and
            Software Engineer opportunities.
          </Paragraph>

          <Button
            type="primary"
            size="large"
            shape="round"
            icon={<DownloadOutlined />}
            href={resumeUrl}
            target="_blank"
            className="resume-btn"
          >
            Download Resume
          </Button>

          <Space size={[16, 16]} wrap className="social-links">
            <Button
              icon={<GithubOutlined />}
              size="large"
              shape="round"
              className="social-btn"
              href="https://github.com/priyajames29"
              target="_blank"
            >
              GitHub
            </Button>

            <Button
              icon={<LinkedinOutlined />}
              size="large"
              shape="round"
              className="social-btn"
              href="https://linkedin.com/in/priya-anna-james"
              target="_blank"
            >
              LinkedIn
            </Button>

            <Button
              icon={<MailOutlined />}
              size="large"
              shape="round"
              className="social-btn"
              href="mailto:priyajames.mec@gmail.com"
            >
              Email
            </Button>
          </Space>

          <Paragraph className="email-text">
            📧 priyajames.mec@gmail.com
          </Paragraph>
        </Card>
      </motion.div>
    </section>
  );
};

export default Contact;
