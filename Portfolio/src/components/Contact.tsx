import { Button, ConfigProvider, Typography } from "antd"
import { Footer } from "antd/es/layout/layout";
import Paragraph from "antd/es/typography/Paragraph";
import TextType from "../Reactbits/TextType/TextType";
import './Contact.css'

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
            <Typography className="contact-root">
                <div className="contact-content">
                    <Paragraph className="contact-title">
                        <TextType
                            text={["Let's write the next line of code together!", "Lets connect!", "Happy coding!"]}
                            typingSpeed={80}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </Paragraph>
                    <Button className="contact-btn" onClick={handleClick}>
                        LinkedIn
                    </Button>
                </div>
                <Footer className="contact-footer">
                    priyajames.mec@gmail.com
                </Footer>
            </Typography>
        </ConfigProvider>
    )
}

export default Contacts