import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Home, About, Contact, Projects } from "./pages";
import { Footer, Navbar } from "./widgets";

function App() {
  return (
    <main className={"bg-slate-300/20 h-full"}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route path="/contact" element={<Contact />} />
                </Routes>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
