
import { Aperture } from 'lucide-react';

interface HeroProps {
  onSubmitClick: () => void;
}

export function Hero({ onSubmitClick }: HeroProps) {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <Aperture className="h-16 w-16 animate-pulse" />
        </div>
        <h1 className="text-5xl font-bold mb-6">Where Useless Meets Brilliant</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Welcome to the world's premier showcase of completely unnecessary inventions.
          Because sometimes the best ideas are the ones we absolutely don't need!
        </p>
        <button 
          onClick={onSubmitClick}
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-purple-100 transition-colors"
        >
          Submit Your Useless Idea
        </button>
      </div>
    </div>
  );
}

export default Hero;