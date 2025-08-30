import { Button, Carousel } from 'antd';
import Title from "antd/es/typography/Title";
import './MyCreations.css'
import Paragraph from 'antd/es/typography/Paragraph';

type ProjectProps = {
    // onMenuClick: (key: string) => void;
    titleString: string
    content?: string
    handleClick?: () => void
    // bgImage: string
};

const Project: React.FC<ProjectProps> = ({ titleString, content, handleClick }) => {
    return (
        <div className='content-style'>
            <div className="project-card-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '100%', borderRadius: '10px', padding: '20px', boxSizing: 'border-box' }}>
                <Title level={2} className="project-title">{titleString}</Title>
                <Paragraph  className="project-para" style={{width: "50%"}}>{content}</Paragraph>
                <Button style={{ marginTop: '20px', padding: '10px 20px', fontSize: '1rem', borderRadius: '5px', backgroundColor: '#1890ff', color: 'white', border: 'none', cursor: 'pointer' }} onClick={handleClick}>
                    Read More
                </Button>
            </div>
        </div>
    );

}

const MyCreations = () => {
    const handleClickProject1 = () => {
        window.open('https://medium.com/@priyajames29/gcp-app-engine-deploy-a-project-34d2a194f300', '_blank');
    }
    const handleClickProject2 = () => {
        window.open('https://www.linkedin.com/posts/priya-anna-james_the-rate-of-diffusion-of-this-next-generation-activity-7067358516491010048-K5jb?utm_source=share&utm_medium=member_desktop&rcm=ACoAACpavV0BbseUuuyM9F4lzhM0UlNeJEVC2BA', '_blank');
    }

    const handleClickProject3 = () => {
        window.open('https://www.linkedin.com/posts/priya-anna-james_ondc-mobility-app-activity-7071776917670023168-_bxE?utm_source=share&utm_medium=member_desktop&rcm=ACoAACpavV0BbseUuuyM9F4lzhM0UlNeJEVC2BA', '_blank');
    }
    const project1 = "A step-by-step guide to deploying a project using Google Cloud Platform (GCP) App Engine. It covers the essential process for launching your application on the cloud platform."
    const project2 = "An AI-powered legal question-answering bot developed as part of the OpenNyai mission. This project leverages advanced natural language processing techniques to provide accurate and efficient responses to legal inquiries."
    const project3 = "An open-source middleware solution designed to enhance mobility applications. This project focuses on creating a robust and scalable platform that facilitates seamless integration and communication between various mobility services and applications."

    return (
        <div className="projects-section">
            <Title className="about">Projects</Title>
            <Carousel className='carousel-style' autoplay >
                <div style={{ height: '80vh', width: '80vw' }}>
                    <Project titleString="Blog: GCP App Engine - Deploying a project" content={project1} handleClick={handleClickProject1}/>
                </div>
                <div>
                    <Project titleString="Project: AI-Powered Legal QA Bot (OpenNyai Mission)" content={project2} handleClick={handleClickProject2}/>
                </div>
                <div>
                    <Project titleString="Middleware Opensource solution for Mobility" content={project3} handleClick={handleClickProject3}/>
                </div>
            </Carousel>
        </div>
    );
}

export default MyCreations