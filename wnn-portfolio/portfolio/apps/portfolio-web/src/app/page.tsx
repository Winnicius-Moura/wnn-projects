
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
  const [animationCompleted, setAnimationCompleted] = useState(false);
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
    setAnimationCompleted(true);
    setShowAnimation(false);
  };

  // Função para o botão "Ver Projetos" na grade
  const handleViewProjects = () => {
    setShowAnimation(true);
    setShowProjectsGrid(false);
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
        {showAnimation && animationData && !animationCompleted ? (
          <div className="lottie-container">
            <Lottie
              animationData={animationData}
              loop={false}
              autoplay={true}
              onComplete={handleAnimationComplete}
            />
          </div>
        ) : animationCompleted ? (
          <div className="fallback-text">
            <h1>Work Experiences</h1>
            <p className="mt-4 text-white/80">
              Experiências profissionais concluídas!
            </p>
            <button
              onClick={() => {
                setAnimationCompleted(false);
                setShowAnimation(false);
              }}
              className={`mt-8 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 ${currentBackground === 'capa.png'
                ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
                : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
                }`}
              style={{
                boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}
            >
              Voltar aos Projetos
            </button>
          </div>
        ) : (
          <>
            <Header
              onProjectsClick={handleProjectsClick}
              currentBackground={currentBackground}
            />

            <div className='h-[500px] my-96 w-full absolute'>
              <ProjectsGrid
                projectImages={projectImages}
                currentBackground={currentBackground}
                onViewProjects={handleViewProjects}
              />
            </div>




          </>
        )}
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
