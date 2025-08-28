import { ConfigProvider, Typography } from "antd"
import Paragraph from "antd/es/typography/Paragraph"
import Title from "antd/es/typography/Title"
import BlurText from "../Reactbits/BlurText/BlurText";


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
                    colorTextBase: 'Black', // This will make all default text this color
                },
                components: {
                    Typography: {
                        colorTextHeading: 'Black', // Example: Headings are accent blue
                        colorText: darkMetallicBlueTheme.colorTextBase, // Paragraphs are default text color
                    },
                }
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px', paddingBottom: '0' }}>
                    <Title style={{ fontFamily: 'anton', fontStyle: 'normal', fontWeight: '700', fontSize: '9rem', paddingBottom: '0'  }}>
                        <BlurText text="PRIYA ANNA JAMES" animateBy="letters" delay={30}/>
                    </Title>
                    <Paragraph style={{fontSize: '1.5rem', width: '60%', textAlign: 'center', letterSpacing: '-0.04em'}}>
                        A passionate Full Stack Developer with over three years of experience creating scalable, user-centric web applications using React and Node.js.
                    </Paragraph>
                </Typography>
            </div>
        </ConfigProvider>
    )
}
export default Home