import {Container, Col, Row} from 'reactstrap';
import Project from '../portfolio/Project';
import Project1 from '../portfolio/Project1';
import Project2 from '../portfolio/Project2';
import Project3 from '../portfolio/Project2';


const Portfolio = () => {
    return (
    <Container>
        <section className="portfolio section" id="portfolio">
        <Row>
       
        <h2 className="section__title">Portfolio</h2>
        <span className="section__subtitle">My Projects</span>
        
        </Row>

        <Row>
            <Col md='5' className='m-1'>
            <Project></Project>
            </Col>
            <Col md='5' className='m-1'>
            <Project1></Project1>
            </Col>
        </Row>
        <Row>
            <Col md='5' className='m-1'>
            <Project2></Project2>
            </Col>
            <Col md='5' className='m-1'>
            <Project3></Project3>
            </Col>
        </Row>
    </section>
    </Container>
        

    
    );
};

export default Portfolio; 