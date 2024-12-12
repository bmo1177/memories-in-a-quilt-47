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
    <div className="memorial-grid">
      {photos.map((photo) => (
        <div key={photo.id} className="memorial-card">
          <div className="relative aspect-square">
            {photo.url ? (
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-memorial-gray-light">
                <Image className="w-12 h-12 text-memorial-gray-dark" />
              </div>
            )}
          </div>
          <div className="photo-caption">{photo.caption}</div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;