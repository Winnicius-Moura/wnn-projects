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
      <div className="w-10/12 h-1/2 grid grid-cols-2 md:grid-cols-4 gap-4 p-8">
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