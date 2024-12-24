interface HeroProps {
  onSubmitClick: () => void;
}

export function Hero({ onSubmitClick }: HeroProps) {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in-up">
          Where Useless Meets Brilliant <span role="img" aria-label="lightbulb">💡</span>
        </h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Welcome to the world's premier showcase of completely unnecessary inventions. <span role="img" aria-label="face with monocle"></span>
          Because sometimes the best ideas are the ones we absolutely don't need! <span role="img" aria-label="laughing">😂</span>
        </p>
        <button 
          onClick={onSubmitClick}
          className="bg-white text-purple-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-black duration-600 transition-colors animate-fade-in-up"
        >
          Submit Your Useless Idea <span role="img" aria-label="rocket">🚀</span>
        </button>
      </div>
    </div>
  );
}

export default Hero;
