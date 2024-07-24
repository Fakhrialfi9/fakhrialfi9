// Import Style
import educationStyle from "../../../assets/style/views/education.module.css";

// Import Database
import educationData from "../../../database/educationData.js"; // Gantilah dengan path yang sesuai

const Experience = () => {
  return (
    <section id='education' className={educationStyle.main}>
      <div className={educationStyle.education}>
        <div className='Container'>
          <div className={educationStyle.content}>
            {/* Heading Content */}
            <div className={educationStyle.heading}>
              <span>
                <code>Education</code>
                <h5>Milestones in Education</h5>
                <p>Ive worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
              </span>
            </div>
            {/* Heading Content */}

            {/* Card Content */}
            <div className={educationStyle.card}>
              <div className={educationStyle.GlowLine}></div>
              <div className={educationStyle.GlowLine}></div>
              <div className={educationStyle.GlowLine}></div>
              {educationData.map((item, index) => (
                <div key={index} className={educationStyle.box}>
                  <div className={educationStyle.image}>
                    <div className={educationStyle.border}>
                      <img src={item.image} alt={item.headline}></img>
                    </div>
                  </div>
                  <div className={educationStyle.information}>
                    <code className={educationStyle.badges}>{item.status}</code>
                    <div className={educationStyle.date}>
                      <h6>{item.date}</h6>
                    </div>
                    <div className={educationStyle.headline}>
                      <h5>{item.headline}</h5>
                    </div>
                    <div className={educationStyle.location}>
                      <h6>{item.location}</h6>
                    </div>
                    <div className={educationStyle.description}>
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
