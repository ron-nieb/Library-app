// import Navbar from "./Navbar";

// function App(){
//   return <Navbar />
// }

import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import { Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Footer />} />
        </Routes>
      </div>
      {/* <Home />
      <About />
      <Services />
      <Footer/> */}
    </>
  )
}

export default App
