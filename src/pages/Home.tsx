import './Home.css';
import { useEffect, useState } from 'react';

function Home() {
  const [showLepage, setShowLepage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLepage(true); // Changer le texte après un certain temps
    }, 3000); // Délai avant de commencer la transition

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <header>
        <h1 className="fade-in">
          Bienvenue sur {showLepage ? <span className="highlight">LepageSolutions</span> : 'LeSolutions'}
        </h1>
        {/* Autres contenus de la page d'accueil */}
        <div>
          {/* 
          <p>
            LepageSolutions est votre partenaire pour optimiser vos infrastructures informatiques et améliorer vos performances opérationnelles. 
            Nous écoutons attentivement vos besoins et développons des outils personnalisés pour vous accompagner dans vos projets. 
            Faites confiance à LepageSolutions pour transformer vos défis en succès !
          </p> 
          */}
        </div>
      </header>
    </div>
  );
}

export default Home;
