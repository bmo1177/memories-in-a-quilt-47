import { useState } from "react";
import { Image, Plus } from "lucide-react";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

interface Photo {
  id: number;
  url: string;
  caption: string;
}

interface PhotoGridProps {
  photos: Photo[];
  onPhotoAdd: (file: File) => void;
}

const PhotoGrid = ({ photos, onPhotoAdd }: PhotoGridProps) => {
  const { toast } = useToast();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Create array of 25 cells (5x5 grid)
  const gridCells = Array(25).fill(null).map((_, index) => {
    const photo = photos[index];
    return { id: index, photo };
  });

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        onPhotoAdd(file);
      } else {
        toast({
          title: "Invalid file type",
          description: "Please select an image file",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="grid grid-cols-5 gap-4">
      {gridCells.map(({ id, photo }) => (
        <div
          key={id}
          className="relative aspect-square group"
          onMouseEnter={() => setHoveredIndex(id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          {photo ? (
            <div className="w-full h-full relative overflow-hidden rounded-lg shadow-md">
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-0 left-0 right-0 p-4 text-white text-sm">
                  {photo.caption}
                </p>
              </div>
            </div>
          ) : (
            <label className="w-full h-full flex items-center justify-center border-2 border-dashed border-memorial-gray rounded-lg cursor-pointer hover:bg-memorial-gray-light/20 transition-colors">
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileChange}
              />
              <Plus className="w-8 h-8 text-memorial-gray-dark" />
            </label>
          )}
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;