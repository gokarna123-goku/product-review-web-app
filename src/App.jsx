import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Detail from "./pages/Detail";


function App() {

  return (
    <Router>
      <main className="w-full min-h-screen bg-neutral-50 flex flex-col text-neutral-600">

        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Detail />} />
        </Routes>

      </main>
    </Router>
  )
}

export default App
