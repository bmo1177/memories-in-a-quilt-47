import { useState } from "react";
import { Image, Plus } from "lucide-react";
import { Button } from "./ui/button";

interface Photo {
  id: number;
  url: string;
  caption: string;
}

interface PhotoGridProps {
  photos: Photo[];
}

const PhotoGrid = ({ photos }: PhotoGridProps) => {
  if (photos.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-12 bg-memorial-gray-light/20 rounded-lg border-2 border-dashed border-memorial-gray">
        <Image className="w-16 h-16 text-memorial-gray-dark mb-4" />
        <h3 className="text-xl font-medium text-gray-700 mb-2">No memories added yet</h3>
        <p className="text-gray-500 mb-6">Be the first to contribute a cherished memory</p>
        <Button>
          <Plus className="w-4 h-4 mr-2" />
          Add Memory
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {photos.map((photo) => (
        <div 
          key={photo.id} 
          className="group relative overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:shadow-xl"
          role="button"
          tabIndex={0}
          aria-label={`View memory: ${photo.caption}`}
        >
          <div className="relative aspect-[4/3]">
            {photo.url ? (
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-memorial-gray-light/50 backdrop-blur-sm">
                <Plus className="w-12 h-12 text-memorial-gray-dark" />
              </div>
            )}
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/60 to-transparent transform translate-y-2 transition-transform duration-300 group-hover:translate-y-0">
            <p className="text-white text-lg font-medium">{photo.caption}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;