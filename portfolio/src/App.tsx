import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Honors } from "./pages/Honors";

function App() {

  // Page Routes. Required later for production build
  let routes = <>
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="honors" element={<Honors />} />
    </Route>
  </>

  return (
    <BrowserRouter>
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>
  )
}

export default App
