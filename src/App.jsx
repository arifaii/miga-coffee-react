import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import useScrollToHash from "./hooks/useScrollToHash";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  useScrollToHash();

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
