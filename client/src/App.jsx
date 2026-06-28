import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import AddTask from "./pages/AddTask";
import EditTask from "./pages/EditTask";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add"
          element={<AddTask />}
        />

        <Route
          path="/edit/:id"
          element={<EditTask />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;