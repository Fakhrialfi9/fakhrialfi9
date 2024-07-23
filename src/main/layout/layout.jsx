import { Outlet } from "react-router-dom";

// Import Components
import Navbar from "../../ui/components/navbar.jsx";
import Footer from "../../ui/components/footer.jsx";

// Import Style
import layoutStyle from "../style/main.module.css";

const Layout = () => {
  return (
    <main className={layoutStyle.Layout}>
      {/* Navbar Content*/}
      <nav className={layoutStyle.Navbar}>
        <Navbar />
      </nav>
      {/* Navbar Content*/}

      {/* Navbar Content*/}
      <section className={layoutStyle.Pages}>
        <Outlet />
      </section>
      {/* Navbar Content*/}

      {/* Navbar Content*/}
      <footer className={layoutStyle.Footer}>
        <Footer />
      </footer>
      {/* Navbar Content*/}
    </main>
  );
};

export default Layout;
