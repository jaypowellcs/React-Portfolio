import {Container, Col, Row} from 'reactstrap';
import Velux from '../education/Velux';
import Carpenter from './Carpenter';
import Tamko from './Tamko';
import Mizzou from './Mizzou';
import Nucamp from './Nucamp';

const School = () => {
    
    return (
        
        <Container className='p-3'>
            
            <Row>
            <h2 className="section__title" id='qualifications'>Qualifications</h2>
            <span className="section__subtitle">My personal journey</span>
            </Row>
        
            <Row>
                <Col md='12' className="qualification__heading">
                <i class="fa fa-graduation-cap" aria-hidden="true"></i>
               Work
                </Col>
            </Row>

            <Row className='p-3'>
                <Col md='4'>
                    <Velux></Velux>
                </Col>
                <Col md='4'>
                <Carpenter></Carpenter>
                </Col>
                
                <Col md='4'>
                <Tamko></Tamko>
                </Col>
            </Row>
           
           <Row className='m-2'>
                <Col md='12' className="qualification__heading">
                    <i class="fa fa-briefcase" aria-hidden="true"></i>
                    Education
                </Col>
            </Row>

            <Row>  
                <Col md='6'>
                <Mizzou></Mizzou>
                </Col>
                
                <Col md='6'>
                <Nucamp></Nucamp>
                </Col>
           </Row>
        </Container> 
    );
};

export default School; 