import Navigation from "@/components/Navigation";
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
      <Navigation />
      <MemorialHero
        name="In Loving Memory"
        dates="A Life Beautiful"
        photoUrl="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1920"
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