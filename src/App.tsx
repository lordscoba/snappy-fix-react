import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home, Portifolio, PushNotifications } from "./screens";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/portifolio/:id" element={<Portifolio />} />
          <Route path="/notifications" element={<PushNotifications />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
