// import logo from "./logo.svg";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Error from "./pages/Error";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* <Route path="fichierjson/:id" element={<Logements />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
