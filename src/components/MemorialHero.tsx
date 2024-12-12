import { Heart } from "lucide-react";

interface MemorialHeroProps {
  name: string;
  dates: string;
  photoUrl: string;
}

const MemorialHero = ({ name, dates, photoUrl }: MemorialHeroProps) => {
  return (
    <div className="relative w-full h-[80vh] min-h-[600px] mt-14">
      <div className="absolute inset-0 bg-black/10" />
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
        style={{ 
          backgroundImage: `url(${photoUrl})`,
          backgroundPosition: 'center center'
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      <div className="absolute bottom-0 left-0 right-0 p-12 text-white text-center">
        <h1 className="text-6xl md:text-7xl font-playfair mb-6 animate-fadeIn">
          {name}
        </h1>
        <p className="text-2xl md:text-3xl font-inter mb-8 animate-fadeIn opacity-90">
          {dates}
        </p>
        <Heart className="mx-auto w-10 h-10 text-white/90 animate-pulse" />
      </div>
    </div>
  );
};

export default MemorialHero;