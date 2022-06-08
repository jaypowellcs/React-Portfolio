import HomePhoto from '../../app/assets/images/jaypowellcs.jpg';



const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <div className="home__social">
                    <a href='https://twitter.com/jaypowellcs' className="btn btn-social-icon btn-twitter" target="_blank" rel="noreferrer"> 
                            <span className="fa fa-twitter"></span>
                        </a>
                        <a href='https://twitter.com/jaypowellcs' className="btn btn-social-icon btn-github" target="_blank" rel="noreferrer"> 
                            <span className="fa fa-github"></span>
                        </a>
                        <a href='https://twitter.com/jaypowellcs' className="btn btn-social-icon btn-linkedin" target="_blank" rel="noreferrer"> 
                            <span className="fa fa-linkedin"></span>
                        </a>
                    </div>
                <div>
            </div>
            
            <div className='home__blob'>
            <div>
                <img src={HomePhoto} alt='Jay Powell'></img>
            </div>
            </div>
    
                    <div className="home__data">
                        <h1 className="home__title"> Hello, I'm Jay!</h1>
                        <h3 className="home_subtitle">Full Stack Developer</h3>
                        <p className="home__description">Self taught programer in web design and development commited to producing quality work</p>
                        <a href="#contact" className="button button--flex">
                            Contact Me <i className="uil uil-envelope-check button__icon"></i>
                        </a>
                    </div>
                </div>
                
               
            </div>
        </section>
    );
};

export default Home; 