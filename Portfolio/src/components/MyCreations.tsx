import { ConfigProvider, Typography } from "antd"


const darkMetallicBlueTheme = {
    // ... (your existing color definitions) ...
    // Make sure colorTextBase is set to a white/off-white tone in this object
    colorTextBase: 'black', // This is the key for general text color
    colorText: 'black', // Often same as colorTextBase for consistency
    // ... (other colors like colorPrimary, colorBgBase, etc.) ...
};

const MyCreations = () => {
    const handleClick = () => {
        window.open('https://medium.com/@priyajames29/gcp-app-engine-deploy-a-project-34d2a194f300', '_blank');
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


            <Typography style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', gap: '10vh', width: '100vw', marginTop: '10%' }}>
                    <Typography  style={{ width: '60%', height: '15vh', fontSize: '1.2rem', backgroundImage: 'url(/luffy.png)', backgroundPosition: 'center', backgroundSize: 'cover', borderRadius: '10px'}} onClick={handleClick}>
                        <div style={{ width: '50%', height: '100%', alignContent: 'center', paddingLeft: '40px', fontSize: '1.5rem'}}>
                            Blog: GCP App Engine - Deploying a project
                        </div>
                    </Typography>
                    <Typography  style={{ width: '60%', height: '15vh', textAlign: 'center', fontSize: '1.2rem', backgroundImage: 'url(/zoro1.png)', backgroundPosition: 'unset', backgroundSize: 'cover', borderRadius: '10px'}}>
                        <div style={{ width: '50%', height: '100%', alignContent: 'center', paddingLeft: '40px', fontSize: '1.5rem'}}>
                            <a style={{color:'black'}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/posts/priya-anna-james_the-rate-of-diffusion-of-this-next-generation-activity-7067358516491010048-K5jb?utm_source=share&utm_medium=member_desktop&rcm=ACoAACpavV0BbseUuuyM9F4lzhM0UlNeJEVC2BA"> 
                            Project: AI-Powered Legal QA Bot (OpenNyai Mission)
                            </a> 
                        </div>
                    </Typography>
                    <Typography  style={{ width: '60%', height: '15vh', textAlign: 'center', fontSize: '1.2rem',backgroundImage: 'url(/sanji.png)', backgroundPosition: 'unset', backgroundSize: 'cover', borderRadius: '10px'}}>
                        <div style={{ width: '50%', height: '100%', alignContent: 'center', paddingLeft: '40px', fontSize: '1.5rem'}}>
                            <a style={{color:'black'}} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/posts/priya-anna-james_ondc-mobility-app-activity-7071776917670023168-_bxE?utm_source=share&utm_medium=member_desktop&rcm=ACoAACpavV0BbseUuuyM9F4lzhM0UlNeJEVC2BA"> 
                            Project: AI-Powered Legal QA Bot (OpenNyai Mission)
                            </a> 
                        </div>
                    </Typography>
            </Typography>
        </ConfigProvider>
    )
}

export default MyCreations