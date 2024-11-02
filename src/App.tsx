import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './Menu'; // Assurez-vous d'importer Menu
import Home from './pages/Home'; // Importez le nouveau composant
import Mission from './pages/Mission';
import ProgrammationWEBAvancee from './pages/ProgrammationWEBAvancee';

const App: React.FC = () => {
    return (
        <Router>
            <Menu /> {/* Ajoutez le menu ici */}
            <Routes>
            <Route path="/" element={<Home />} /> {/* Utilisez le nouveau composant ici */}
                <Route path="/" element={<div>Accueil</div>} /> {/* Exemple d'élément pour la page d'accueil */}
                <Route path="/ProgrammationWEBAvancee" element={<ProgrammationWEBAvancee />} />
                <Route path="/mission" element={<Mission />} />
                {/* <Route path="/mission" element={<Mission />} /> */}
            </Routes>
        </Router>
    );
};

export default App;
