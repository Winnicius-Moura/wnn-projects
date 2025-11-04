export interface GlowButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export function GlowButton({ children, onClick, className = "" }: GlowButtonProps) {
  return (
    <div className="relative group">
      {/* Animated glowing background element */}
      <div 
        className="absolute inset-0 rounded-full opacity-75 blur-sm transition-all duration-500 group-hover:opacity-100 group-hover:blur-md"
        style={{
          background: 'linear-gradient(90deg, #f97316, #a855f7, #3b82f6, #22c55e, #f97316)',
          backgroundSize: '300% 100%',
          animation: 'gradient-shift 3s ease infinite',
        }}
      ></div>
      
      {/* Main button */}
      <button
        onClick={onClick}
        className={`
          relative px-8 py-4 
          bg-black text-white 
          rounded-full 
          font-bold uppercase tracking-wide
          border-2 border-transparent
          shadow-lg shadow-black/30
          hover:shadow-2xl hover:shadow-black/50
          transition-all duration-500 ease-out
          hover:scale-110
          group-hover:scale-110
          ${className}
        `}
        style={{
          background: `
            linear-gradient(black, black) padding-box,
            linear-gradient(90deg, #f97316, #a855f7, #3b82f6, #22c55e, #f97316) border-box
          `,
          backgroundSize: '300% 100%, 300% 100%',
          animation: 'gradient-shift 3s ease infinite',
        }}
      >
        <span className="relative z-10 text-white">{children}</span>
      </button>
    </div>
  );
}