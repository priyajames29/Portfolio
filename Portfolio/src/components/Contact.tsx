import { Button, ConfigProvider, Typography } from "antd"
import { Footer } from "antd/es/layout/layout";
import Paragraph from "antd/es/typography/Paragraph";
import TextType from "../Reactbits/TextType/TextType";


const darkMetallicBlueTheme = {
    colorTextBase: 'black',
    colorText: 'black',
};

const Contacts = () => {
    const handleClick = () => {
        window.open('https://www.linkedin.com/in/priya-anna-james/', '_blank');
    }
    return (
        <ConfigProvider
            theme={{
                token: {
                    colorTextBase: 'black', // This will make all default text this color
                },
                components: {
                    Typography: {
                        colorTextHeading: 'black', // Example: Headings are accent blue
                        colorText: darkMetallicBlueTheme.colorTextBase, // Paragraphs are default text color
                    },
                    Card: {
                        colorTextHeading: 'black',
                        colorText: 'black'
                    }
                    // ... other component overrides (Menu, Button, etc.) ...
                }
            }}
        >


            <Typography style={{ backgroundColor: 'black', width: '100vw', height: '75vh', position: 'absolute', bottom: '0' }}>
                <div style={{ paddingTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '8%' }}>
                    <Paragraph style={{ color: 'white', textAlign: 'center', fontSize: '5rem', fontWeight: '800' }}>
                        {/* Let's write the next line of code together! */}
                        <TextType
                            text={["Let's write the next line of code together!", "Lets connect!", "Happy coding!"]}
                            typingSpeed={80}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </Paragraph>
                    <Button style={{ width: '10vw', height: '7vh', fontSize: '1.5rem' }} onClick={handleClick}>
                        LinkedIn
                    </Button>
                </div>
                {/* <Button>
                    Contact
                </Button>
                <Button>
                    LinkedIn
                </Button> */}
                <Footer style={{ color: 'white', backgroundColor: 'black', position: 'fixed', bottom: '0', right: '0', fontSize: '1.2rem' }}>
                    priyajames.mec@gmail.com
                </Footer>
            </Typography>
        </ConfigProvider>
    )
}

export default Contacts