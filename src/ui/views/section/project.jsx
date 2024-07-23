// Import Style
import projectStyle from "../../../assets/style/views/project.module.css";

// Import Database
import projectData from "../../../database/projectData";

const Project = () => {
  const maxLength = 280; // Maximum number of characters before truncating

  // Function to truncate text
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + "...";
  };

  return (
    <section id='Experience' className={projectStyle.main}>
      <div className={projectStyle.project}>
        <div className='Container'>
          <div className={projectStyle.content}>
            {/* Heading Content */}
            <div className={projectStyle.heading}>
              <span>
                <code>My Projects</code>
                <h5>Check out my latest work</h5>
                <p>Ive worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.</p>
              </span>
            </div>
            {/* Heading Content */}

            {/* Card Experiece Content */}
            <div className={projectStyle.card}>
              {projectData.map((project) => (
                <div key={project.id} className={projectStyle.box}>
                  <div className={projectStyle.image}>
                    <img src={project.image} alt={`${project.company} Logo`} />
                  </div>

                  <div className={projectStyle.information}>
                    <div className={projectStyle.headline}>
                      <h5>{project.company}</h5>
                      <h6>{project.date}</h6>
                    </div>

                    <div className={projectStyle.description}>
                      <p>{truncateText(project.description, maxLength)}</p>
                    </div>
                  </div>

                  <div className={projectStyle.footer}>
                    <div className={projectStyle.skill}>
                      {project.skills.map((skill, index) => (
                        <span key={index}>{skill}</span>
                      ))}
                    </div>

                    <button>
                      <a href={project.website} target='_blank' rel='noopener noreferrer'>
                        Priview Website
                      </a>
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* Card Experiece Content */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
