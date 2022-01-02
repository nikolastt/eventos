import Login from "./view/login";
import NovoUsuario from "./view/usuario-novo";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/home";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/novousuario" element={<NovoUsuario />} />
          <Route exact path="/login" element={<Login />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
