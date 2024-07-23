// Import Style
import navbarStyle from "../../assets/style/components/navbar.module.css";

// Import Dock
import Dock from "../components/dock.jsx";

// Import Database
import navbarData from "../../database/navbarData.js";

const Navbar = () => {
  return (
    <div className='Container'>
      <nav className={navbarStyle.main}>
        <div className={navbarStyle.navbar}>
          <div className={navbarStyle.content}>
            <ul>
              {navbarData.map((dock) => (
                <li key={dock.name} data-index={dock.index}>
                  <dock.icon size={15} />
                  <a href='#'>{dock.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Dock Contact */}
      <Dock />
      {/* Dock Contact */}
    </div>
  );
};

export default Navbar;
