import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faLocationPin, faPhone} from '@fortawesome/free-solid-svg-icons'


const Contact = () => {
    return (
        <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get in touch</span>

        <div className="contact__container container grid">
            <div>
                <div className="contact__information">
                <FontAwesomeIcon icon={faPhone} className='contact__icon' /> 
                   <div>
                       <h3 className="contact__title">Call Me</h3>
                       <span className="contact__subtitle">417-629-6885</span>
                   </div>
                </div>
                <div className="contact__information">
                <FontAwesomeIcon icon={faAt} className='contact__icon' /> 

                   <div>
                       <h3 className="contact__title">Email Me</h3>
                       <span className="contact__subtitle">jay.powellcs@gmail.com</span>
                   </div>
                </div>
                <div className="contact__information">
                <FontAwesomeIcon icon={faLocationPin} className='contact__icon' /> 

                   <div>
                       <h3 className="contact__title">Location</h3>
                       <span className="contact__subtitle">Grapevine, Texas</span>
                   </div>
                </div>
            </div>

            <form action="" className="contact__form grid">
                <div className="contact__inputs grid">
                    <div className="contact__content">
                        <label htmlFor="" className="contact__label">Name</label>
                        <input type="text" className="contact__input"></input>
                    </div>
                    <div className="contact__content">
                       <label htmlFor="" className="contact__label">Email</label>
                       <input type="email" className="contact__input"></input>
                   </div>
                   <div className="contact__content">
                       <label htmlFor="" className="contact__label">Company</label>
                       <input type="text" className="contact__input"></input>
                   </div>
                   <div className="contact__content">
                       <label htmlFor="" className="contact__label">Message</label>
                       <textarea name="" id="" cols="0" rows="7" className="contact__input"></textarea>
                   </div>

                   <div>
                       <button type='submit' className="button button--flex"> 
                       Send Messsage 
                       <i className="uil uil-message button__icon"></i>
                       </button>
                   </div>
                </div>
            </form>
        </div>
    </section>

    );
};

export default Contact; 