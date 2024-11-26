import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ProductPage from "./components/ProductPage";
import Product from "./pages/Product";

function App() {

  return (
    <Router>
      <main className="w-full min-h-screen bg-neutral-50 flex flex-col text-neutral-600">

        <Navbar />

        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>

      </main>
    </Router>
  )
}

export default App
