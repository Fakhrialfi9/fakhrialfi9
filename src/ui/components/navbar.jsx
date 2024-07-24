// Import React Module
import { useState, useEffect } from "react";
import { Link } from "react-scroll";

// Import Style
import navbarStyle from "../../assets/style/components/navbar.module.css";

// Import Dock
import Dock from "../components/dock.jsx";

// Import Database
import navbarData from "../../database/navbarData.js";

const Navbar = () => {
  const [SidebarActive, setSidebarActive] = useState(false);

  const handleSidebarMenu = () => {
    setSidebarActive(!SidebarActive);
    if (!SidebarActive) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
    }
  };

  // Handle Scroll to Set Active Link
  useEffect(() => {
    const sections = navbarData.map((dock) => ({
      name: dock.name.toLowerCase(),
      element: document.getElementById(dock.name.toLowerCase()),
    }));

    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const { element, name } = section;

        if (element) {
          const { offsetTop, offsetHeight } = element;
          const isActive = scrollPosition >= offsetTop - 350 && scrollPosition < offsetTop + offsetHeight - 350;

          if (isActive) {
            setActiveLink(name);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [activeLink, setActiveLink] = useState(navbarData[0].name.toLowerCase());

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setSidebarActive(false);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };

  return (
    <div className='Container'>
      <nav className={navbarStyle.main}>
        <div className={`${navbarStyle.navbar} ${SidebarActive ? navbarStyle.open : ""}`}>
          <div onClick={handleSidebarMenu} className={`${navbarStyle.toggle} ${SidebarActive ? navbarStyle.open : ""}`}>
            <div className={navbarStyle.bar}></div>
            <div className={navbarStyle.bar}></div>
            <div className={navbarStyle.bar}></div>
          </div>
          <div className={navbarStyle.content}>
            <ul>
              {navbarData.map((dock) => (
                <li key={dock.name} data-index={dock.index}>
                  <dock.icon size={15} />
                  <Link
                    className={activeLink === dock.name.toLowerCase() ? navbarStyle.active : ""}
                    onClick={() => handleLinkClick(dock.name.toLowerCase())}
                    to={dock.name.toLowerCase()}
                    smooth={true}
                    duration={350}
                    spy={true}
                    exact='true'
                    offset={-100}>
                    {dock.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      <div className={`${navbarStyle.backgroundblur} ${SidebarActive ? navbarStyle.active : ""}`}></div>

      {/* Sidebar Menu */}
      <div className={`${navbarStyle.sidebar} ${SidebarActive ? navbarStyle.active : ""}`}>
        <ul>
          {navbarData.map((dock) => (
            <li key={dock.name} data-index={dock.index}>
              <dock.icon size={18} />
              <Link
                className={activeLink === dock.name.toLowerCase() ? navbarStyle.active : ""}
                to={dock.name.toLowerCase()}
                smooth={true}
                duration={350}
                spy={true}
                exact='true'
                offset={-100}
                onClick={() => handleLinkClick(dock.name.toLowerCase())}>
                {dock.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Sidebar Menu */}

      {/* Dock Contact */}
      <Dock />
      {/* Dock Contact */}
    </div>
  );
};

export default Navbar;
