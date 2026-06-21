import { Button, Card, Col, Row, Tag, Typography } from "antd";
import { motion } from "framer-motion";
import "./MyCreations.css";

const { Title, Paragraph } = Typography;

const projects = [
  {
    title: "AI-Powered Legal QA Bot",
    category: "AI Application",
    description:
      "An AI-powered legal question-answering bot developed as part of the OpenNyai mission. This project leverages advanced NLP techniques to provide accurate and efficient responses to legal inquiries.",
    link: "https://www.linkedin.com/posts/priya-anna-james_the-rate-of-diffusion-of-this-next-generation-activity-7067358516491010048-K5jb",
  },
  {
    title: "GCP App Engine Deployment Guide",
    category: "Technical Blog",
    description:
      "A step-by-step guide to deploying applications using Google Cloud Platform App Engine and understanding the deployment workflow.",
    link: "https://medium.com/@priyajames29/gcp-app-engine-deploy-a-project-34d2a194f300",
  },
  {
    title: "Mobility Middleware Solution",
    category: "Open Source",
    description:
      "Middleware platform that enables seamless integration between mobility services and applications with a scalable architecture.",
    link: "https://www.linkedin.com/posts/priya-anna-james_ondc-mobility-app-activity-7071776917670023168-_bxE",
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const MyCreations = () => {
  return (
    <section id="projects" className="projects-section">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Title level={1} className="projects-title">
          Projects
        </Title>
      </motion.div>

      <Row gutter={[24, 24]}>
        {projects.map((project, index) => (
          <Col xs={24} md={12} lg={8} key={project.title}>
            <motion.div
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
                ease: "easeOut",
              }}
            >
              <Card
                className="project-card"
                bordered={false}
                onClick={() => window.open(project.link, "_blank")}
              >
                <Tag className="project-tag">{project.category}</Tag>

                <Title level={3} className="project-heading">
                  {project.title}
                </Title>

                <Paragraph className="project-description">
                  {project.description}
                </Paragraph>

                <Button
                  type="link"
                  className="project-link"
                  onClick={(e) => {
                    e.stopPropagation();
                    window.open(project.link, "_blank");
                  }}
                >
                  View Project <span className="arrow">→</span>
                </Button>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default MyCreations;
