import { Typography } from "antd"
import Paragraph from "antd/es/typography/Paragraph"
import Title from "antd/es/typography/Title"
import './AboutPage.css'

const AboutPage = () => {
    // const skills = ['React', 'Nodejs', 'Typescript', 'Express', 'Docker', 'Jest', 'GIT', 'UI Libraries']
    return (
        <Typography style={{ display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', width: '92%', marginTop: '7%' }}>
            <Title className="about">About Me</Title>
            <div className="about-content">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', width: '50%' }}>
                    <img src="/myPic.jpg" alt="Priya Anna James" className="profile-image" />
                </div>
                <Paragraph className="para">
                    {/* style={{ color: 'Black', width: '50%', letterSpacing: '-0.04em', height: '30vh', alignContent: 'center', textAlign: 'left' }} */}
                    Hello! My name is Priya Anna James, and I am a passionate Full Stack Developer with over three years of experience creating scalable, user-centric web applications.
                    My expertise lies in the MERN stack and modern web technologies, including React, Node.js, TypeScript, and Express.js.
                    I am dedicated to delivering high-quality, reliable software.
                    I enjoy tackling complex technical challenges and I am always eager to learn and grow, whether it's building a public-facing application or exploring new technologies like AI-powered APIs
                </Paragraph>
                {/* <div className="skills-container">
                <Title level={3} className="skills-title">Skills</Title>
                <ul className="skills-list">
                    <li className="skill-item">React</li>
                    <li className="skill-item">Node.js</li>
                    <li className="skill-item">TypeScript</li>
                    <li className="skill-item">Express.js</li>
                    <li className="skill-item">Docker</li>
                    <li className="skill-item">Jest</li>
                    <li className="skill-item">Git</li>
                    <li className="skill-item">UI Libraries (Ant Design, Material-UI)</li>
                </ul>
            </div> */}

            </div>

        </Typography>
    )
}

export default AboutPage