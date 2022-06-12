import{ useState } from 'react'; 
import { 
  useSpring,
  animated, 
} from 'react-spring';
import { Card,
         CardImg, 
         CardText,
        CardBody,
        CardTitle, 
        CardSubtitle,
        Container, 
        Row,
       } from 'reactstrap';
import greenpines from '../../app/assets/images/greenpines1.png'

const Project = () => {
    const [panelOpen, setPanelOpen] = useState(false);
    const panelProps = useSpring({
    transform: panelOpen ? 'translate3d(0%, 0, 0)' : 'translate3d(-100%, 0, 0)'
    });
    const buttonProps = useSpring({
    transform: panelOpen ? 'translate3d(0%, 0, 0)' : 'translate3d(-250%, 0, 0)',
    delay: 100
    })


    return (

    <Container>
        <Row>
        <button className="button" onClick={() => setPanelOpen(a => !a)}>
          Green Pines Apartment Complex Website  
        </button>
        <animated.div style={panelProps} className="panel">
        <animated.div style={buttonProps}>
        <button className="toggleButton" onClick={() => setPanelOpen(a => !a)}>
            React Portfolio Website - Jay Powell 
            <div>
            <Card className='p-1 m-1'>
              <CardImg top width="100%" src={greenpines} alt="Jay Powell Portfolio Website" />
              <CardBody>
                <CardTitle>Green Pines Apartment Complex Website</CardTitle>
                <CardSubtitle>Skills Used: CSS, React, JS, Bootstrap, React Spring</CardSubtitle>
                <CardText>Website I built for a Apartment Complex based in Grapevine, Texas</CardText>
                <button>
                  <a href="https://github.com/jaypowellcs/Green-Pine-Multifamily" target="_blank"  rel="noreferrer" className="button">
                        Press Here to go to the Website. 
                  </a>
                </button>
              </CardBody>
            </Card>
            </div>
        </button>
            </animated.div>
        </animated.div>
        </Row>
    </Container>

    );
};

export default Project; 