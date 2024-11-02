import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';


const Menu: React.FC = () => {
    return (
        <nav className="menu">
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/ProgrammationWEBAvancee">Programmation WEB avancee</Link></li>
                {/*}
                <li><Link to="/produits">Produits</Link></li>
                <li><Link to="/about">À propos</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/mission">Mission</Link></li> */}
            </ul>
        </nav>
    );
};

export default Menu;
