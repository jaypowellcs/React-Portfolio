
import Resume from '../../app/assets/images/resume.pdf';
import resumePhoto from '../../app/assets/images/resumePhoto.jpg';

const About = () => {
    return (
        <section className="about selection about" id="about" >
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <div className="about__data">
                <p className="about__description">
                    I am currently a software engineer that works on personal projects. I am currently enrolled in NuCamp to further my skills 
                    and work on connecting with people. 
                </p>
               <div className="about__info">
                   <div>
                       <span className="about__info-title">08+</span>
                       <span className="about__info-name">Years <br></br>Sales Experience</span>
                   </div>

                   <div>
                    <span className="about__info-title">03+</span>
                    <span className="about__info-name">Completed <br></br> Projects</span>
                </div>

                <div>
                    <span className="about__info-title">03+</span>
                    <span className="about__info-name">Companies<br></br> Worked</span>
                </div>
                
                <div className="about__buttons">
                    <a download="" href={Resume} className="button button--flex">
                        Download my Resume<i className="uil uil-file-download-alt button__icon"></i>
                    </a>
                </div>
               </div> 
            </div>
            <img src={resumePhoto} alt='Jay Powell'  className='about__photo'></img>
        </div>
    </section>
    );
};

export default About; 