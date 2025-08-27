import { Typography } from "antd"
import Paragraph from "antd/es/typography/Paragraph"
import Title from "antd/es/typography/Title"
// import RotatingText from "../Reactbits/RotatingText/RotatingText"

const AboutPage = () => {
    // const skills = ['React', 'Nodejs', 'Typescript', 'Express', 'Docker', 'Jest', 'GIT', 'UI Libraries']
    return (
        <Typography style={{display: 'flex', flexDirection: 'column', height: '100%', alignItems: 'center', width: '80%'}}>
            <Title style={{ color: 'rgb(161, 161, 161)', fontSize: '13rem', marginBottom: '30px' }}>About Me</Title>
            <Paragraph style={{ color: 'Black', width: '70%', fontSize: '1.2rem', height: '30vh', alignContent: 'center', textAlign: 'center' }}>
                Hello! My name is Priya Anna James, and I am a passionate Full Stack Developer with over two years of experience creating scalable, user-centric web applications. 
                My expertise lies in the MERN stack and modern web technologies, including React, Node.js, TypeScript, and Express.js. 
                I am dedicated to delivering high-quality, reliable software. 
                I enjoy tackling complex technical challenges and I am always eager to learn and grow, whether it's building a public-facing application or exploring new technologies like AI-powered APIs
            </Paragraph>
            {/* <Title level={3} style={{ marginBottom: '0px', display: 'flex', gap: '5px' }}> */}
                {/* <div style={{ color: 'black', alignContent: 'center'}}>
                Skills:
                </div>
                <div style={{ backgroundColor: 'white', display: 'flex', justifyContent: 'center', alignContent: 'center', borderRadius: '5px', padding: '10px' }}>
                    <RotatingText
                        texts={skills}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-cyan-300 text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
                        staggerFrom={"first"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: 0, opacity: 0, scale: 0.8 }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                        style={{ color: 'black', paddingBottom: '0px' }}
                    />
                </div> */}
            {/* </Title> */}

        </Typography>
    )
}

export default AboutPage