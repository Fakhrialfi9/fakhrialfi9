// Import Style
import experienceStyle from "../../../assets/style/views/experience.module.css";

// Import Database
import experienceData from "../../../database/experienceData.js"; // Gantilah dengan path yang sesuai

const Experience = () => {
  return (
    <section className={experienceStyle.main}>
      <div className={experienceStyle.experience}>
        <div className='Container'>
          <div className={experienceStyle.content}>
            {/* Heading Content */}
            <div className={experienceStyle.heading}>
              <span>
                <code>Works Experience</code>
                <h5>Milestones in Work Experience</h5>
                <p>Ive worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
              </span>
            </div>
            {/* Heading Content */}

            {/* Card Content */}
            <div className={experienceStyle.card}>
              <div className={experienceStyle.GlowLine}></div>
              <div className={experienceStyle.GlowLine}></div>
              <div className={experienceStyle.GlowLine}></div>
              {experienceData.map((item, index) => (
                <div key={index} className={experienceStyle.box}>
                  <div className={experienceStyle.image}>
                    <div className={experienceStyle.border}>
                      <img src={item.image} alt={item.headline}></img>
                    </div>
                  </div>
                  <div className={experienceStyle.information}>
                    <code className={experienceStyle.badges}>{item.department}</code>
                    <div className={experienceStyle.date}>
                      <h6>{item.date}</h6>
                    </div>
                    <div className={experienceStyle.headline}>
                      <h5>{item.headline}</h5>
                    </div>
                    <div className={experienceStyle.location}>
                      <h6>{item.location}</h6>
                    </div>
                    <div className={experienceStyle.description}>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Card Content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
