import React, { useState } from 'react'
import { useSpring, animated as a } from 'react-spring'
import { 
        Card, 
        CardText, 
        CardBody,
        CardTitle, 
        CardSubtitle, 
     } from 'reactstrap';
import VeluxSkylights from '../../app/assets/images/velux.jpg';


const Velux = () => {


  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })


  return (
    <div onClick={() => set(state => !state)}>
        <a.div className="c back" style={{ opacity: opacity.to(o => 1 - o), transform }}>
            <img src={VeluxSkylights} alt='Tamko Building Products logo'></img>
        </a.div>
     
        <a.div className="c front" style={{ opacity, transform: transform.to(t => `${t} rotateX(180deg)`) }} >
            <Card>
                <CardBody>
                    <CardTitle className="qualifiication__title">Velux Skylights</CardTitle>
                    <CardSubtitle className="qualification__subtitle">Sales Representative</CardSubtitle>
                    <CardText className="qualification__calendar">
                        <i class="fa fa-calendar" aria-hidden="true"></i>
                            2021-Present
                    </CardText>

                    <CardText>
                    Represented and sold the Velux skylights product line which consisted of skylights and sun tunnels. 
                    </CardText>
                </CardBody>
            </Card>
        </a.div>
    </div>
  )
}

export default Velux; 