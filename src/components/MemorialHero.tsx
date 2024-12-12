import { Heart } from "lucide-react";

interface MemorialHeroProps {
  name: string;
  dates: string;
  photoUrl: string;
}

const MemorialHero = ({ name, dates, photoUrl }: MemorialHeroProps) => {
  return (
    <div className="relative w-full h-[60vh] min-h-[400px] bg-memorial-blue-light">
      <div className="absolute inset-0 bg-black/20" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ 
          backgroundImage: `url(${photoUrl})`,
          backgroundPosition: 'center 30%'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-8 text-white text-center">
        <h1 className="text-5xl md:text-6xl font-playfair mb-4 animate-fadeIn">
          {name}
        </h1>
        <p className="text-xl md:text-2xl font-inter mb-8 animate-fadeIn">
          {dates}
        </p>
        <Heart className="mx-auto w-8 h-8 text-white/80" />
      </div>
    </div>
  );
};

export default MemorialHero;