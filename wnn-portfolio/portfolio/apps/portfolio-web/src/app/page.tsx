'use client'

import Lottie from 'lottie-react'
import { useEffect, useState } from 'react'
import FloatingActionButton from './components/FloatingActionButton'
import Header from './components/Header'
import ProfileCard from './components/ProfileCard'
import ProjectsGrid from './components/ProjectsGrid'


export default function Index() {
  const [animationData, setAnimationData] = useState(null)
  const [currentBackground, setCurrentBackground] = useState('capa.png')
  const [currentTheme, setCurrentTheme] = useState('dark')
  const [showAnimation, setShowAnimation] = useState(false)
  const [showProjectsGrid, setShowProjectsGrid] = useState(false)

  const projectImages = ['01.png', '02.png', '03.png', '04.png', '05.png', '06.png', '07.png', '09.png']

  useEffect(() => {
    fetch('/work.json')
      .then(response => response.json())
      .then(data => setAnimationData(data))
      .catch(error => console.log('Arquivo work.json vazio ou inválido:', error))
  }, [])

  const handleBackgroundChange = () => {
    setCurrentBackground(prev =>
      prev === 'capa.png' ? 'capa_2.jpg' : 'capa.png'
    )
  }

  const handleThemeChange = () => {
    setCurrentTheme(prev => prev === 'dark' ? 'light' : 'dark')
    console.log('Theme changed to:', currentTheme === 'dark' ? 'light' : 'dark')
  }

  const handleProjectsClick = () => {
    console.log('handleProjectsClick called! Before:', { showProjectsGrid })
    setShowProjectsGrid(prev => {
      console.log('Setting showProjectsGrid from', prev, 'to', !prev)
      return !prev
    })
  }

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setShowAnimation(false)
    }, 700)
  }


  const handleViewProjects = () => {
    setShowAnimation(true)
  }

  return (
    <div className="portfolio-container" data-theme={currentTheme}>
      <div style={{
        backgroundImage: `url('/${currentBackground}')`,
        transition: 'background-image 0.5s ease-in-out'
      }}>
      </div>

      <div className="portfolio-content bg-neutral">
        <div className='h-screen'>
          <Header
            onProjectsClick={handleProjectsClick}
            currentBackground={currentBackground}
          />
        </div>

        <div className='h-full w-full relative justify-center items-center mx-auto p-8'>
          <ProjectsGrid
            projectImages={projectImages}
            currentBackground={currentBackground}
            onViewProjects={handleViewProjects}
          />

          {showAnimation && animationData && (
            <div
              className="absolute inset-0 flex items-center justify-center z-50"
              style={{
                animation: 'fadeIn 0.3s ease-in-out'
              }}>
              <div className="w-full h-full rounded-lg">
                <Lottie
                  animationData={animationData}
                  loop={false}
                  autoplay={true}
                  onComplete={handleAnimationComplete}
                  style={{ width: '100%', height: '100%', }}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <FloatingActionButton
        onThemeChange={handleThemeChange}
        onBackgroundChange={handleBackgroundChange}
        currentBackground={currentBackground}
        currentTheme={currentTheme}
      />

      {/* Profile Card com toggle no canto esquerdo */}
      <ProfileCard />
    </div>
  )
}
