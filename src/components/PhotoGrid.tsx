import { useState } from "react";
import { Image } from "lucide-react";

interface Photo {
  id: number;
  url: string;
  caption: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {photos.map((photo) => (
        <div key={photo.id} className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl">
          <div className="relative aspect-[4/3]">
            {photo.url ? (
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-memorial-gray-light/50 backdrop-blur-sm">
                <Image className="w-12 h-12 text-memorial-gray-dark" />
              </div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white text-lg font-medium">{photo.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;