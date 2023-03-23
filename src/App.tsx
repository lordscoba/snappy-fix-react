import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home, Portifolio } from "./screens";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portifolio/:id" element={<Portifolio />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
