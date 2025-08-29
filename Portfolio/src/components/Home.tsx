import { ConfigProvider, Typography } from "antd"
import Paragraph from "antd/es/typography/Paragraph"
import Title from "antd/es/typography/Title"
import BlurText from "../Reactbits/BlurText/BlurText";
import './Home.css'


const darkMetallicBlueTheme = {
    colorTextBase: 'Black', 
    colorText: 'Black', 
};

const Home = () => {
    return (
        <ConfigProvider
            theme={{
                token: {
                    ...darkMetallicBlueTheme,
                    colorTextBase: 'Black', 
                },
                components: {
                    Typography: {
                        colorTextHeading: 'Black',
                        colorText: darkMetallicBlueTheme.colorTextBase,
                    },
                }
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', paddingBottom: '0' }}>
                    <Title className="caption-text">
                        <BlurText text="PRIYA ANNA JAMES" animateBy="letters" delay={30} className="caption-text"/>
                    </Title>
                    <Paragraph style={{fontSize: '1.5rem', width: '60%', textAlign: 'center', letterSpacing: '-0.04em', color: 'grey'}}>
                        A passionate Full Stack Developer with over three years of experience creating scalable, user-centric web applications using React and Node.js.
                    </Paragraph>
                </Typography>
            </div>
        </ConfigProvider>
    )
}
export default Home