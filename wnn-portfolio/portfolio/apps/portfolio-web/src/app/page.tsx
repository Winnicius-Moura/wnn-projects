
'use client';

import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';

export default function Index() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Carregar o arquivo work.json
    fetch('/work.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.log('Arquivo work.json vazio ou inválido:', error));
  }, []);

  return (
    <div className="portfolio-container">
      {/* Background com gradiente e imagem */}
      <div className="portfolio-background"></div>

      {/* Conteúdo centralizado */}
      <div className="portfolio-content">
        {animationData ? (
          <div className="lottie-container">
            <Lottie
              animationData={animationData}
              // loop={false}
            />
          </div>
        ) : (
          <div className="fallback-text">
            <h1>Work Experiences</h1>
          </div>
        )}
      </div>
    </div>
  );
}
