import React from 'react';
import {Container, Title, Scroll, Wrapper, Subtitle} from '../styles/LandingPageStyle'
import home01 from '../images/home01.jpg'
import home02 from '../images/home02.jpg'
import home03 from '../images/home03.jpg'
import { Parallax } from 'react-parallax';

const styles = {
    height: "100%", 
    zIndex: "-2", 
    margin: "0 20px 20px", 
    filter: "brightness(.5)", 
    marginBottom: "20px"

    
}

const LandingPage = () => {

    return(
        <Container>
            <Parallax bgImage={home03} strength={900} className="styles"/>
            
                
                <Title><Subtitle>NAJBOLJE RJEŠENJE</Subtitle>AUTO CAMP LISICINA</Title> 
             
            <Scroll/>
        </Container>
    )

}

export default LandingPage;