import { Typography } from "antd"
import Paragraph from "antd/es/typography/Paragraph"
import Title from "antd/es/typography/Title"
import './AboutPage.css'

const AboutPage = () => {
    // const skills = ['React', 'Nodejs', 'Typescript', 'Express', 'Docker', 'Jest', 'GIT', 'UI Libraries']
    return (
        <Typography style={{display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', width: '80%', marginTop: '7%'}}>
            <Title className="about">About Me</Title>
            <Paragraph className="para" style={{ color: 'Black', width: '70%', letterSpacing: '-0.04em', height: '30vh', alignContent: 'center', textAlign: 'center' }}>
                Hello! My name is Priya Anna James, and I am a passionate Full Stack Developer with over two years of experience creating scalable, user-centric web applications. 
                My expertise lies in the MERN stack and modern web technologies, including React, Node.js, TypeScript, and Express.js. 
                I am dedicated to delivering high-quality, reliable software. 
                I enjoy tackling complex technical challenges and I am always eager to learn and grow, whether it's building a public-facing application or exploring new technologies like AI-powered APIs
            </Paragraph>

        </Typography>
    )
}

export default AboutPage