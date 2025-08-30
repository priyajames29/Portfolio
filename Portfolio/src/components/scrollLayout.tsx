import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import Home from "./Home"
import AboutPage from "./AboutPage"
import MyCreations from "./MyCreations"
import Contacts from "./Contact"
import Navbar from "./Navbar"
import { useRef } from "react"

const ScrollLayout = () => {
    const parallaxRef = useRef<any>(null);

    return (
        <div style={{ backgroundColor: 'rgb(233, 231, 231)', display: 'flex', justifyContent: 'center' }}>
            <Navbar onMenuClick={(key) => {
                switch (key) {
                    case 'home':
                        parallaxRef.current?.scrollTo(0);
                        break;
                    case 'about':
                        parallaxRef.current?.scrollTo(1);
                        break;
                    case 'creations':
                        parallaxRef.current?.scrollTo(2);
                        break;
                    case 'contact':
                        parallaxRef.current?.scrollTo(3);
                        break;
                    default:
                        break;
                }
            }} />
            <Parallax pages={4} ref={parallaxRef} style={{ width: '100vw', height: '100vh', backgroundColor: 'rgb(233, 231, 231)' }}>
                <ParallaxLayer offset={0} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Home />
                </ParallaxLayer>
                <ParallaxLayer offset={1} style={{ display: 'flex', justifyContent: 'center' }}>
                    <AboutPage />
                </ParallaxLayer>
                <ParallaxLayer offset={2} style={{ display: 'flex', justifyContent: 'center' }}>
                    <MyCreations />
                </ParallaxLayer>
                <ParallaxLayer offset={3} style={{ display: 'flex', justifyContent: 'center' }}>
                    <Contacts />
                </ParallaxLayer>
            </Parallax>
        </div>
    )
}

export default ScrollLayout