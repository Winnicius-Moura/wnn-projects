
'use client';

import Lottie from 'lottie-react';
import { useEffect, useState } from 'react';
import FloatingActionButton from './components/FloatingActionButton';
import Header from './components/Header';
import ProjectsGrid from './components/ProjectsGrid';


export default function Index() {
  const [animationData, setAnimationData] = useState(null);
  const [currentBackground, setCurrentBackground] = useState('capa.png');
  const [currentTheme, setCurrentTheme] = useState('dark');
  const [showAnimation, setShowAnimation] = useState(false);
  const [showProjectsGrid, setShowProjectsGrid] = useState(false);

  // Array com as imagens dos projetos
  const projectImages = ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png', '07.png', '09.png'];

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

  // Função para lidar com o clique em Projects (mostra a grade abaixo do header)
  const handleProjectsClick = () => {
    console.log('handleProjectsClick called! Before:', { showProjectsGrid });
    setShowProjectsGrid(prev => {
      console.log('Setting showProjectsGrid from', prev, 'to', !prev);
      return !prev;
    });
  };

  // Função chamada quando a animação termina
  const handleAnimationComplete = () => {
    // Quando a animação termina, apenas a esconde
    setTimeout(() => {
      setShowAnimation(false);
    }, 500); // Pequeno delay para suavizar a transição
  };

  // Função para o botão "Ver Projetos" na grade
  const handleViewProjects = () => {
    setShowAnimation(true);
  };

  return (
    <div className="portfolio-container" data-theme={currentTheme}>
      <div
        className="portfolio-background"
        style={{
          backgroundImage: `url('/${currentBackground}')`,
          transition: 'background-image 0.5s ease-in-out'
        }}
      ></div>

      <div className="portfolio-content">
        <div className='h-screen'>
          <Header
            onProjectsClick={handleProjectsClick}
            currentBackground={currentBackground}
          />
        </div>
       

        {/* Session projects - Container com posição relativa */}
        <div
          className='h-full w-full relative'
        >
          {/* Projects Grid */}
          <ProjectsGrid
            projectImages={projectImages}
            currentBackground={currentBackground}
            onViewProjects={handleViewProjects}
          />

          {/* Animação sobreposta ao grid */}
          {showAnimation && animationData && (
            <div
              className="absolute inset-0 flex items-center justify-center z-50"
              style={{
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                backdropFilter: 'blur(10px)',
                animation: 'fadeIn 0.3s ease-in-out'
              }}
            >
              <div className="w-full h-full">
                <Lottie
                  animationData={animationData}
                  loop={false}
                  autoplay={true}
                  onComplete={handleAnimationComplete}
                  style={{ width: '100%', height: '100%' }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton
        onThemeChange={handleThemeChange}
        onBackgroundChange={handleBackgroundChange}
        currentBackground={currentBackground}
        currentTheme={currentTheme}
      />



    </div>
  );
}
