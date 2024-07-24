// Import Style
import bannerStyle from "../../../assets/style/views/banner.module.css";

// Import Module Package
import Marquee from "react-fast-marquee";

// Import Databasee
import skillData from "../../../database/skillData.js";
import profileData from "../../../database/profileData.js";

const Banner = () => {
  return (
    <header id='profile' className={bannerStyle.main}>
      <div className={bannerStyle.header}>
        <div className={bannerStyle.shapeblur}></div>
        <div className={bannerStyle.GlowLine}></div>
        <div className={bannerStyle.GlowLine}></div>
        <div className='Container'>
          <div className={bannerStyle.content}>
            {/* Heading Content */}
            <div className={bannerStyle.heading}>
              <span>
                <h2>{profileData.main.name}</h2>
                <h6>{profileData.main.summary}</h6>
              </span>
              <span>
                <h5>{profileData.about.heading}</h5>
                <p>{profileData.about.paragraph}</p>
              </span>
            </div>
            {/* Heading Content */}

            {/* Card  Skill */}
            <Marquee className={bannerStyle.marquee} pauseOnClick='true' pauseOnHover='true'>
              <div className={bannerStyle.card}>
                {skillData.map((image) => (
                  <div key={image.id} className={bannerStyle.box}>
                    <div className={bannerStyle.image}>
                      <img src={image.src} alt={image.alt} />
                    </div>
                  </div>
                ))}
              </div>
            </Marquee>
            {/* Card  Skill */}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
