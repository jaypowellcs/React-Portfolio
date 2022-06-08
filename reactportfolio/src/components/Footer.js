const Footer = () => {

    return(
        <footer className="footer">
            <div className="footer__bg">
                <div className="footer__container container grid">
                    <div>
                        <h1 className="footer__title">Jay Powell</h1>
                        <span className="footer__subtitle">Full Stack Developer</span>
                    </div>

                    <ul className="footer__links">
                        <li>
                            <a href="#home" className="footer__link">Home</a>
                        </li>
                        <li>
                            <a href="#skills" className="footer__link">Skills</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="footer__link">Portfolio</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer__link">Contact</a>
                        </li>
                    </ul>

                    <div className="footer__socials">
                    <h1 className="footer__title">Connect with Me</h1>
                        <a href='https://twitter.com/jaypowellcs' className="btn btn-social-icon btn-twitter" target="_blank" rel="noreferrer"> 
                            <span className="fa fa-twitter"></span>
                        </a>
                        <a href='https://github.com/jaypowellcs' className="btn btn-social-icon btn-github" target="_blank" rel="noreferrer"> 
                            <span className="fa fa-github"></span>
                        </a>
                        <a href='https://www.linkedin.com/feed/' className="btn btn-social-icon btn-linkedin" target="_blank" rel="noreferrer"> 
                            <span className="fa fa-linkedin"></span>
                        </a>
                    </div>
                </div>
                <p className="footer__copy">&#169; Jay PowellCS, All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default Footer; 