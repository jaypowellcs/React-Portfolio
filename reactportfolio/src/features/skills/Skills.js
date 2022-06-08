import Backend from "./Backend";
import Frontend from "./Frontend";
import { Container, Col, Row } from "reactstrap";


const Skills = () => {

    return (
        <Container>
            <Row>
            <section className="section skills sections" id="skills">
            <h2 className="section__title">Skills</h2>
            <span className="section__subtitle">Technical Skills</span>
            </section>
                <Col md='5' className='m-1'>
                <Frontend></Frontend>
                </Col>

                <Col md='5' className='m-1'>
                <Backend></Backend>
                </Col>
            </Row>
        </Container>
        
    );
};

export default Skills; 