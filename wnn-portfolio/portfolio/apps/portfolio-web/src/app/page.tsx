
'use client';

import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import FloatingActionButton from './components/FloatingActionButton';

export default function Index() {
  const [animationData, setAnimationData] = useState(null);
  const [currentBackground, setCurrentBackground] = useState('capa.png');
  const [currentTheme, setCurrentTheme] = useState('dark');

  useEffect(() => {
    // Carregar o arquivo work.json
    fetch('/work.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.log('Arquivo work.json vazio ou inválido:', error));
  }, []);

  // Função para alternar entre as capas de fundo
  const handleBackgroundChange = () => {
    setCurrentBackground(prev =>
      prev === 'capa.png' ? 'capa_2.jpg' : 'capa.png'
    );
  };

  // Função para alternar tema (futuro uso)
  const handleThemeChange = () => {
    setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark');
    // Aqui você pode implementar lógica de tema se necessário
    console.log('Theme changed to:', currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="portfolio-container" data-theme={currentTheme}>
      {/* Background com gradiente e imagem dinâmica */}
      <div
        className="portfolio-background"
        style={{
          backgroundImage: `url('/${currentBackground}')`,
          transition: 'background-image 0.5s ease-in-out'
        }}
      ></div>

      {/* Conteúdo centralizado */}
      <div className="portfolio-content">
        {animationData ? (
          <div className="lottie-container">
            <Lottie
              animationData={animationData}
            // loop={false}
            // autoplay={true}
            />
          </div>
        ) : (
          <div className="fallback-text">
            <h1>Work Experiences</h1>
            <p className="mt-4 text-white/80">
              Current Background: <span className="font-semibold">{currentBackground}</span>
            </p>
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton
        onThemeChange={handleThemeChange}
        onBackgroundChange={handleBackgroundChange}
        currentBackground={currentBackground}
        currentTheme={currentTheme}
      />

      {/* Botão de teste para verificar se está funcionando */}
      <div
        className="fixed bottom-4 left-4 z-50 bg-red-500 text-white p-4 rounded-full cursor-pointer"
        onClick={handleBackgroundChange}
      >
        TEST
      </div>
    </div>
  );
}
