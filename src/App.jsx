import { Routes, Route } from "react-router";
import Logement from "./pages/Logement";
import Navbar from "./components/Navbar";
import "./styles/global.scss";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
    return (
        <>
            <Navbar />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={ <About />} />
                    <Route path="/logement/:id" element={<Logement />} />
                    <Route path="*" element={<h1>404 Not Found</h1>} />
                </Routes>
            </main>
            <Footer />
        </>
    );
}

export default App;
