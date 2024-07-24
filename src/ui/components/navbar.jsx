// Import React Module
import { useState } from "react";
import { Link } from "react-scroll";

// Import Style
import navbarStyle from "../../assets/style/components/navbar.module.css";

// Import Dock
import Dock from "../components/dock.jsx";

// Import Database
import navbarData from "../../database/navbarData.js";

// Import Icon
import { Menu } from "lucide-react";

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

  const hadnleCloseSidebar = () => {
    setSidebarActive(false);
    document.documentElement.style.overflow = "auto";
    document.body.style.overflow = "auto";
  };

  return (
    <div className='Container'>
      <nav className={navbarStyle.main}>
        <div className={navbarStyle.navbar}>
          <div onClick={handleSidebarMenu} className={navbarStyle.toggle}>
            <Menu size={25} />
          </div>
          <div className={navbarStyle.content}>
            <ul>
              {navbarData.map((dock) => (
                <li key={dock.name} data-index={dock.index}>
                  <dock.icon size={15} />
                  <Link to={dock.name.toLowerCase()} smooth={true} duration={350} spy={true} exact='true' offset={-100}>
                    {dock.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar Menu */}
      <div className={`${navbarStyle.sidebar} ${SidebarActive ? navbarStyle.active : ""}`}>
        <ul>
          {navbarData.map((dock) => (
            <li key={dock.name} data-index={dock.index}>
              <dock.icon size={18} />
              <Link to={dock.name.toLowerCase()} smooth={true} duration={350} spy={true} exact='true' offset={-100} onClick={hadnleCloseSidebar}>
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
