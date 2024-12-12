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
        <div className="max-w-prose mx-auto text-center mb-12">
          <h2 className="text-4xl font-playfair text-gray-800 mb-4">
            Cherished Memories
          </h2>
          <p className="text-gray-600">
            Join us in celebrating a life well-lived by sharing your favorite memories
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr,300px] gap-8">
          <PhotoGrid photos={SAMPLE_PHOTOS} />
          
          <aside className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="font-medium text-gray-800 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <p className="text-sm text-gray-600">John added a photo 5 minutes ago</p>
                <p className="text-sm text-gray-600">Sarah shared a memory yesterday</p>
                <p className="text-sm text-gray-600">Mike contributed 2 photos last week</p>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Index;