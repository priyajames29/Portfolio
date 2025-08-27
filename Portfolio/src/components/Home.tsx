import { ConfigProvider, Image, theme, Typography } from "antd"
import Paragraph from "antd/es/typography/Paragraph"
import Title from "antd/es/typography/Title"
import SplitText from "../Reactbits/SplitText/SplitText";
import BlurText from "../Reactbits/BlurText/BlurText";


const darkMetallicBlueTheme = {
    // ... (your existing color definitions) ...
    // Make sure colorTextBase is set to a white/off-white tone in this object
    colorTextBase: 'Black', // This is the key for general text color
    colorText: 'Black', // Often same as colorTextBase for consistency
    // ... (other colors like colorPrimary, colorBgBase, etc.) ...
};

const Home = () => {
    return (
        <ConfigProvider
            theme={{
                // algorithm: theme.darkAlgorithm, // Keep your dark theme algorithm
                token: {
                    ...darkMetallicBlueTheme, // Spread your custom palette here
                    // Explicitly ensure colorTextBase is set to white/off-white if it's not already
                    colorTextBase: 'Black', // This will make all default text this color
                    // You might also want to set specific text colors for primary, secondary etc.
                    // colorTextSecondary: '#AABAC8',
                },
                components: {
                    // You might still want component-specific overrides if Ant Design components
                    // have their own text color tokens that differ from colorTextBase.
                    // For example, if you want specific headings to be your accent blue:
                    Typography: {
                        colorTextHeading: 'Black', // Example: Headings are accent blue
                        colorText: darkMetallicBlueTheme.colorTextBase, // Paragraphs are default text color
                    },
                    // ... other component overrides (Menu, Button, etc.) ...
                }
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                {/* <Image
                    width={210}
                    height={250}
                    src="https://www.startswithy.com/wp-content/uploads/2022/06/Vanellope-von-Schweetz.jpg"
                /> */}
                <Typography style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '30px'}}>
                    <Title style={{ height: '5vh', fontSize: '7rem' }}>
                        <BlurText text="PRIYA ANNA JAMES" animateBy="letters"/>
                    </Title>
                    <Paragraph style={{fontSize: '1.5rem', width: '60%', textAlign: 'center'}}>
                        A passionate Full Stack Developer with over three years of experience creating scalable, user-centric web applications using React and Node.js.
                    </Paragraph>
                </Typography>
            </div>
        </ConfigProvider>
    )
}
export default Home