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
        Button,
        Container, 
        Row,
       } from 'reactstrap';
import reactportfolio from '../../shared/images/reactportfolio.jpg'


const Project3 = () => {
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
            React Portfolio 
          </button>
            <animated.div style={panelProps} className="panel">
            <animated.div style={buttonProps}>
            <button className="toggleButton" onClick={() => setPanelOpen(a => !a)}>
                React Portfolio Website - Jay Powell 
                <div>
                <Card>
                  <CardImg top width="100%" src={reactportfolio} alt="Jay Powell Portfolio Website" />
                  <CardBody>
                    <CardTitle>React Portfolio Website</CardTitle>
                    <CardSubtitle>Skills Used: CSS, React, JS, Bootstrap, React Spring</CardSubtitle>
                    <CardText>Website I built for my Portfolio website using React</CardText>
                    <Button> 
                      <a href="https://www.linkedin.com/in/jay-powell-b9b7168a/" target="_blank"  rel="noreferrer" className="footer__social">
                          Press Here to go to the Website. 
                      </a></Button>
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

export default Project3; 