import {Fade, Container, Row, Col } from 'reactstrap';
import { useState } from 'react';



const Frontend = () => {
    const [open, setOpen] = useState(true); 

    return (
        <Container>
            <div className="skills__container container grid">
            <Row>
                <Col>
                {/* Skills 1 */}
                <div className="skills__header">
                             <button className="button button--flex"
                            onClick={() => setOpen(!open)}>
                                Frontend 
                             </button>
                     </div>
                </Col>
            </Row>

            <Row>
                <Col>
                <Fade
                     in={open}
                     baseClassActive='show'
                     >
                     <div className="skills__list grid">
                         <div className="skills__data">
                             <h3 className="skills__name">HTML</h3>
                             <span className="skills__number">100%</span>
                         </div>
                         <div className="skills__bar">
                             <span className="skills__percentage skills__html"></span>
                         </div>

                         <div className="skills__data">
                            <h3 className="skills__name">CSS</h3>
                            <span className="skills__number">100%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__css"></span>
                        </div>

                        <div className="skills__data">
                            <h3 className="skills__name">Javascript</h3>
                            <span className="skills__number">100%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__js"></span>
                        </div>

                        <div className="skills__data">
                            <h3 className="skills__name">React</h3>
                            <span className="skills__number">100%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__react"></span>
                        </div>
                     </div>
                     </Fade>
                </Col>
            </Row>

            </div>
        </Container> 
    );
};

export default Frontend; 