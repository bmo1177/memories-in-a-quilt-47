import MemorialHero from "@/components/MemorialHero";
import PhotoGrid from "@/components/PhotoGrid";

const SAMPLE_PHOTOS = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
    caption: "A beautiful summer day in the garden",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    caption: "Family gathering at Christmas",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81",
    caption: "Celebrating their 50th anniversary",
  },
  {
    id: 4,
    url: "",
    caption: "Add your memory here",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-memorial-gray-light">
      <MemorialHero
        name="Sarah Johnson"
        dates="1945 - 2024"
        photoUrl="https://images.unsplash.com/photo-1721322800607-8c38375eef04"
      />
      
      <main className="container mx-auto py-12">
        <h2 className="text-3xl font-playfair text-center mb-8">
          Cherished Memories
        </h2>
        <PhotoGrid photos={SAMPLE_PHOTOS} />
      </main>
    </div>
  );
};

export default Index;