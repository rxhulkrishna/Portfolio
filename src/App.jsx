import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen lg:overflow-hidden text-body">
      <div className="fixed inset-0 -z-10 h-full w-full"></div>
      <div className="max-w-7xl mx-auto px-8 py-5">
        <Navbar />
        <main className="mt-8 flex-1 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
