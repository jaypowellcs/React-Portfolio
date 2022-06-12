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
import BuyHomes from '../../app/assets/images/buyhomes.png'


const Project1 = () => {
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
          Right at Home Properties Website 
        </button>
          <animated.div style={panelProps} className="panel">
          <animated.div style={buttonProps}>
          <button className="toggleButton" onClick={() => setPanelOpen(a => !a)}>
              Right at Home Properties 
              <div>
              <Card>
                <CardImg top width="100%" height='50%' src={BuyHomes} alt="Jay Powell Portfolio Website" />
                <CardBody>
                  <CardTitle>Right at Home Properties Website</CardTitle>
                  <CardSubtitle>Skills Used: Bootstrap, Jquery, Html</CardSubtitle>
                  <CardText>Website I built for a company focused on buying properties off market</CardText>
                  <button>
                  <a className="button" href="https://github.com/jaypowellcs/BuyHomesQuickDFW" target="_blank"  rel="noreferrer" >
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

export default Project1; 