import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Projetos from "./pages/Projetos";
import Obrigado from "./pages/Obrigado";

function RoutesApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/contato" element={<Contato />} />
                <Route path="/projetos" element={<Projetos />} />
                <Route path="/obrigado" element={<Obrigado />} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
