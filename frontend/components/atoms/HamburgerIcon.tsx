export default function HamburgerIcon({ isOpen, handleClick }: { isOpen: boolean, handleClick: () => void }) {
  // Base classes that are always applied
  const baseClasses = "bg-misty-rose-800 duration-250 ease-in-out h-1 w-8 rounded-sm";
  
  return (
    <button onClick={handleClick} className="flex flex-col justify-center items-center gap-1.5 lg:hidden">
      {/* Top line */}
      <div className={`${baseClasses} ${isOpen 
        ? "rotate-45 translate-y-3" 
        : ""}`} 
      />
      
      {/* Middle line */}
      <div className={`${baseClasses} ${isOpen 
        ? "opacity-0 translate-x-12 bg-red-900" 
        : ""}`} 
      />
      
      {/* Bottom line */}
      <div className={`${baseClasses} ${isOpen 
        ? "-rotate-45 -translate-y-2" 
        : ""}`} 
      />
    </button>
  );
}