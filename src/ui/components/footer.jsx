// Import Style
import footerStyle from "../../assets/style/components/footer.module.css";

const Footer = () => {
  return (
    <footer className={footerStyle.main}>
      <div className={footerStyle.footer}>
        <div className={footerStyle.shapeblur}></div>
        <div className={footerStyle.GlowLine}></div>
        <div className={footerStyle.GlowLine}></div>
        <div className='Container'>
          <div className={footerStyle.content}>
            {/* Heading Content */}
            <div className={footerStyle.heading}>
              <span>
                <code>Contact</code>
                <h5>Get in Touch</h5>
                <p>
                  We are Fakhrialfi9 Studio, a creative design agency based in Indonesia. We are here to provide you with a complete Design,
                  Development, Branding solution for your business. <br /> <br /> Do you have any design projects? Lets work together to create
                  something fantastic.
                </p>
              </span>
            </div>
            {/* Heading Content */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
