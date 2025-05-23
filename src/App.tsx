import './App.css'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import {About, Contact, Home, Projects} from "./pages";
import {Footer, Navbar} from "./components";

function App() {

    return (
        <main className={'bg-slate-300/20 h-full'}>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route
                        path='/*'
                        element={
                            <>
                                <Routes>
                                    <Route path='/about' element={<About />} />
                                    <Route path='/projects' element={<Projects />} />
                                    <Route path='/contact' element={<Contact />} />
                                </Routes>
                                <Footer />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </main>
    )
}

export default App
