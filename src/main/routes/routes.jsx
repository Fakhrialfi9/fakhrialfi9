import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Components
import Layout from "../layout/layout.jsx";
import Pages from "../../ui/views/pages.jsx";

const routes = () => (
  <Router>
    <Routes>
      <Route path='fakhrialfi9/' element={<Layout />}>
        <Route index element={<Pages />} />
      </Route>
    </Routes>
  </Router>
);
export default routes;
