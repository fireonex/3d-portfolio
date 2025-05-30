import {
  Route,
  Routes,
  Outlet,
  Navigate,
  useParams,
  BrowserRouter as Router,
} from "react-router-dom";
import { Home, About, Contact, Projects } from "./pages";
import { Footer, Navbar } from "./widgets";
import { useTranslation } from "react-i18next";

const LayoutWithFooter = () => (
  <>
    <Outlet />
    <Footer />
  </>
);

function App() {
  const { i18n } = useTranslation();
  if (!i18n.language) return null;

  return (
    <main className="bg-slate-300/20 h-full">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/:lang/*" element={<LanguageRoute />} />
          <Route path="*" element={<Navigate replace to={`/${i18n.language}`} />} />
        </Routes>
      </Router>
    </main>
  );
}

function LanguageRoute() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  if (lang && i18n.language !== lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<LayoutWithFooter />}>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
