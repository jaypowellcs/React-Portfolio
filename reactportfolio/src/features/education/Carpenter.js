import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import { 
        Card, 
        CardText, 
        CardBody,
        CardTitle, 
        CardSubtitle, 
     } from 'reactstrap';
import CarpenterCompany from '../../app/assets/images/carpenter.png';


const Carpenter = () => {


  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })


  return (
    <div onClick={() => set(state => !state)}>
        <a.div className="c back" style={{ opacity: opacity.to(o => 1 - o), transform }}>
            <img src={CarpenterCompany} alt='Carpenter Company Logo'></img>
        </a.div>
     
        <a.div className="c front" style={{ opacity, transform: transform.to(t => `${t} rotateX(180deg)`) }} >
            <Card>
                <CardBody>
                    <CardTitle className="qualifiication__title">Carpenter Company</CardTitle>
                    <CardSubtitle className="qualification__subtitle">District Manager</CardSubtitle>
                    <CardText className="qualification__calendar">
                        <i className="fa fa-calendar" aria-hidden="true"></i>
                            2021
                    </CardText>

                    <CardText>
                    Represented and sold the Carpenter EPS insulation product line which included roofing, construction, and packaging segments. 

                    </CardText>
                </CardBody>
            </Card>
        </a.div>
    </div>
  )
}

export default Carpenter; 