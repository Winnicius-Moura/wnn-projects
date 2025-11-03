'use client';

interface ProjectsGridProps {
  projectImages: string[];
  currentBackground: string;
  onViewProjects: () => void;
}

export default function ProjectsGrid({
  projectImages,
  currentBackground,
  onViewProjects
}: ProjectsGridProps) {
  console.log('ProjectsGrid rendering with:', { projectImages, currentBackground });

  return (
    <div className="flex items-center justify-center">
      <button onClick={onViewProjects} className={`mt-8 px-8 py-4 absolute z-50 text-center btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-md text-lg font-semibold  transition-all duration-300 transform hover:scale-105 ${currentBackground === 'capa.png'
        ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700'
        : 'bg-gradient-to-r from-blue-600 to-indigo-700 text-white hover:from-blue-700 hover:to-indigo-800'
        }`}>Projetos</button>
      <div className="w-full h-1/2 grid grid-cols-2 md:grid-cols-4 gap-4 ">
        {projectImages.slice(0, 8).map((image, index) => (
          <div
            key={index}
            className="aspect-square rounded-lg"
            style={{
              backgroundImage: `url('/${image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'blur(8px)',
              opacity: 0.8,
            }}
          />
        ))}
      </div>
    </div>
  );
}