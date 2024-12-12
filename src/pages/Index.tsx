import MemorialHero from "@/components/MemorialHero";
import PhotoGrid from "@/components/PhotoGrid";

const SAMPLE_PHOTOS = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
    caption: "A beautiful summer day in the garden",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    caption: "Family gathering at the lake",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
    caption: "Starlit evening memories",
  },
  {
    id: 4,
    url: "",
    caption: "Share your memory",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-memorial-blue-light to-white">
      <MemorialHero
        name="In Loving Memory"
        dates="A Life Beautiful"
        photoUrl="/lovable-uploads/804849ce-7fe7-4774-8537-1cea1f0fd6ad.png"
      />
      
      <main className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-playfair text-center mb-12 text-gray-800">
          Cherished Memories
        </h2>
        <PhotoGrid photos={SAMPLE_PHOTOS} />
      </main>
    </div>
  );
};

export default Index;