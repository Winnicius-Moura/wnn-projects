'use client';

import { Image, Moon, Palette, Settings, Sun } from 'lucide-react';
import { useState } from 'react';

interface FloatingActionButtonProps {
  onThemeChange: () => void;
  onBackgroundChange: () => void;
  currentBackground: string;
  currentTheme: string;
}

export default function FloatingActionButton({
  onThemeChange,
  onBackgroundChange,
  currentBackground,
  currentTheme
}: FloatingActionButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleFAB = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="fixed bottom-24 right-8 z-50">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-md btn-primary btn-circle"
        onClick={toggleFAB}
        onKeyDown={(e) => e.key === 'Enter' && toggleFAB()}
        style={{
          position: 'relative',
          backgroundColor: '#8B5CF6',
          border: 'none',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.6)'
        }}
      >
        <Settings className="w-5 h-5" />
      </div>

      {isOpen && (
        <>
          <div
            className="tooltip tooltip-left absolute -top-16 -left-2"
            style={{
              transform: 'scale(1)',
              opacity: 1,
              transition: 'all 0.3s ease',
              color: `${currentBackground === 'capa.png' ? '#8B5CF6' : '#1E3A8A'}`,
            }}
          >
            <button
              className="btn btn-md btn-circle btn-secondary shadow-lg"
              onClick={() => {
                onThemeChange();
                setIsOpen(false);
              }}
            >
              {currentBackground === 'capa.png' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>

          <div
            className="tooltip tooltip-left absolute -top-12 -left-16"
            style={{
              transform: 'scale(1)',
              opacity: 1,
              transition: 'all 0.3s ease 0.1s',
              color: `${currentBackground === 'capa.png' ? '#8B5CF6' : '#1E3A8A'}`,

            }}
          >
            <button
              className="btn btn-md btn-circle btn-accent shadow-lg"
              onClick={() => {
                onBackgroundChange();
                setIsOpen(false);
              }}
            >
              <Image className="w-5 h-5" />
            </button>
          </div>

          <div
            className="tooltip absolute -top-2 -left-20"
            style={{
              transform: 'scale(1)',
              opacity: 1,
              transition: 'all 0.3s ease 0.2s',
              color: `${currentBackground === 'capa.png' ? '#8B5CF6' : '#1E3A8A'}`,

            }}
          >
            <button className="btn btn-md btn-circle btn-info shadow-lg">
              <Palette className="w-5 h-5" />
            </button>
          </div>
        </>
      )}
    </div>
  );
}