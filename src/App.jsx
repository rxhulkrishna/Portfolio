import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#212121_1px,transparent_1px)] bg-size-[24px_24px]"></div>
      <div className="max-w-7xl mx-auto px-8 py-10 h-full overflow-hidden">
        <Navbar/>
        <main className="mt-10 flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
