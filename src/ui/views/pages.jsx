// Import Style
import pagesStyle from "../../assets/style/views/pages.module.css";

// import Section
import Banner from "./section/banner.jsx";
import Project from "./section/project.jsx";
import Experiece from "./section/experience.jsx";
import Education from "./section/education.jsx";

const Pages = () => {
  return (
    <section className={pagesStyle.main}>
      <div className={pagesStyle.pages}>
        <div className={pagesStyle.content}>
          {/* Hero Section */}
          <header className={pagesStyle.header}>
            <Banner />
          </header>
          {/* Hero Section */}

          {/* Projct Section */}
          <header className={pagesStyle.header}>
            <Project />
          </header>
          {/* Projct Section */}

          {/* Experiece Section */}
          <header className={pagesStyle.header}>
            <Experiece />
          </header>
          {/* Experiece Section */}

          {/* Education Section */}
          <header className={pagesStyle.header}>
            <Education />
          </header>
          {/* Education Section */}
        </div>
      </div>
    </section>
  );
};

export default Pages;
