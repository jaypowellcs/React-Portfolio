
import {Fade, Container, Row, Col } from 'reactstrap';
import { useState } from 'react';

const Backend = () => {

    const [open, setOpen] = useState(true); 
    return (
       <Container>
            <div className="skills__container container grid">
           <Row>
               <Col>
                     {/* <!-- Skills 2 --> */}
                     <div className="skills__header">
                        <button className="button button--flex"
                            onClick={() => setOpen(!open)}>
                                Backend
                        </button>
                    </div>
               </Col>
           </Row>

           <Row>
                <Col>
                <Fade
                     in={open}
                     >
                    <div className="skills__list grid">
                        <div className="skills__data">
                            <h3 className="skills__name">PHP</h3>
                            <span className="skills__number">90%</span>
                        </div>
                        <div className="skills__bar">
                            <span className="skills__percentage skills__php"></span>
                        </div>

                        <div className="skills__data">
                           <h3 className="skills__name">Node Js</h3>
                           <span className="skills__number">90%</span>
                       </div>
                       <div className="skills__bar">
                           <span className="skills__percentage skills__node"></span>
                       </div>

                       <div className="skills__data">
                           <h3 className="skills__name">Mongo DB</h3>
                           <span className="skills__number">90%</span>
                       </div>
                       <div className="skills__bar">
                           <span className="skills__percentage skills__firebase"></span>
                       </div>

                       <div className="skills__data">
                           <h3 className="skills__name">Python</h3>
                           <span className="skills__number">90%</span>
                       </div>
                       <div className="skills__bar">
                           <span className="skills__percentage skills__python"></span>
                       </div>
                    </div>
                    </Fade>
                </Col>
           </Row>
           </div>
       </Container>
    );
};

export default Backend; 