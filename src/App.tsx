import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import PokemonPage from "./pages/PokemonPage";
import TodosPage from "./pages/TodosPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/pokemons" element={<PokemonPage />} />
        <Route path="/todos" element={<TodosPage />} />
        <Route path="*" element={<Navigate replace to="/pokemons" />} />
      </Routes>
    </Router>
  );
}

export default App;

