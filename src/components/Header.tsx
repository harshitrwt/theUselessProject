
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Component, Home, Trophy, Menu } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-black to-purple-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 text-2xl font-bold">
            <Component className="h-8 w-8" />
            <span>UseLess Inventions</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="flex items-center space-x-1 hover:text-purple-200">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/leaderboard" className="flex items-center space-x-1 hover:text-purple-200">
              <Trophy className="h-5 w-5" />
              <span>Leaderboard</span>
            </Link>
            
            
            <a href="https://github.com/itsharshitrwt/theUselessProject">
             <button className="bg-purple-500 hover:bg-purple-400 px-4 py-2 rounded-lg font-semibold">
              Star Invention
            </button>
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu className="h-8 w-8" />
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            <Link to="/" className="block text-center hover:text-purple-200">
              Home
            </Link>
            <Link to="/leaderboard" className="block text-center hover:text-purple-200">
              Leaderboard
            </Link>
          
            <button className="block w-full bg-purple-500 hover:bg-purple-400 px-4 py-2 rounded-lg font-semibold">
              Submit Invention
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}