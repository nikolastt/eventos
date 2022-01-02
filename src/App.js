import Login from "./view/login";
import NovoUsuario from "./view/usuario-novo";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/novousuario" element={<NovoUsuario />} />
      </Routes>
    </Router>
  );
}

export default App;
