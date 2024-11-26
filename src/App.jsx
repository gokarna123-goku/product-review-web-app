import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {

  return (
    <Router>
      <main className="w-full min-h-screen bg-neutral-50 flex flex-col text-neutral-600">

        <Navbar />

        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>

      </main>
    </Router>
  )
}

export default App
