import { Hero } from "./components/Hero";
import { Menu } from "./components/Menu";
import { About } from "./components/About";
import { Location } from "./components/Location";
import { Footer } from "./components/Footer";
import { ParallaxGallery } from "./components/ParallaxGallery";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50">
      <Hero />
      <Menu />
      
      <ParallaxGallery 
        imageUrl="https://images.unsplash.com/photo-1644129408832-0de75e234257?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWZlJTIwaW50ZXJpb3IlMjB3b29kZW58ZW58MXx8fHwxNzYyNTg5NDM1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        title="心地よい空間"
        description="木のぬくもりと自然光が調和した、落ち着いた雰囲気の店内。ゆっくりとした時間をお過ごしいただけます。"
      />
      
      <About />
      
      <ParallaxGallery 
        imageUrl="https://images.unsplash.com/photo-1719282915190-9e8143efabbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2VuaWMlMjB2aWV3JTIwbmF0dXJlfGVufDF8fHx8MTc2MjU5Nzg1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
        title="窓辺の特等席"
        description="外の景色を眺めながら、こだわりのコーヒーをお楽しみください。"
      />
      
      <Location />
      <Footer />
    </div>
  );
}