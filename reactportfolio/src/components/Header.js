import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAddressCard, faToolbox, faHouseUser, faGraduationCap, faFolder, faAlignJustify, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react';

const Header = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
    

    return (
        <header className="header" id="header">
        <nav className="nav container">
        <a href='https://github.com/jaypowellcs' className="btn btn-social-icon btn-github" target="_blank" rel="noreferrer"> 
                            <span className="fa fa-github"></span>
                        </a>
            <div className={
          isNavExpanded ? "show-menu" : "nav__menu"
        }
>
                <ul className="nav__list grid">
                    <li className="nav__item">
                        <a href="#home" className="nav__link">
                        <FontAwesomeIcon className="nav__icon" icon={faHouseUser} /> Home
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#about" className="nav__link">
                        <FontAwesomeIcon className="nav__icon" icon={faAddressCard} /> About
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#skills" className="nav__link">
                        <FontAwesomeIcon className="nav__icon" icon={faToolbox} />Skills
                        </a>
                    </li>

                    <li className="nav__item">
                        <a href="#qualifications" className="nav__link">
                        <FontAwesomeIcon className="nav__icon" icon={faGraduationCap} /> Qualifications
                        </a>
                    </li>
                    
                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">
                        <FontAwesomeIcon className="nav__icon" icon={faFolder} /> Portfolio
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact" className="nav__link">
                        <FontAwesomeIcon className="nav__icon" icon={faEnvelope}  /> Contact
                        </a>
                    </li>
                </ul>
            </div>

            <div className='nav__btns'>
                <div className='nav__toggle' id='nav-toggle'>
                <FontAwesomeIcon icon={faAlignJustify}  onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}/> 
                </div>
            </div>
        
        </nav>
    </header>
    )
};


export default Header; 
