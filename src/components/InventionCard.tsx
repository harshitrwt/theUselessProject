
import { ThumbsUp } from 'lucide-react';
import type { Invention } from '../types';
import { hasVoted } from '../utils/voting';

interface InventionCardProps {
  invention: Invention;
  onVote: (id: string) => void;
}

export function InventionCard({ invention, onVote }: InventionCardProps) {
  const voted = hasVoted(invention.id);

  return (
    <div className="bg-black text-white border 5 border-purple-600 rounded-xl shadow-md overflow-hidden transition-transform hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={invention.imageUrl || 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80'}
          alt={invention.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{invention.name}</h3>
        <p className="text-white mb-4">{invention.description}</p>
        <div className="flex items-center justify-between">
          <button
            onClick={() => !voted && onVote(invention.id)}
            className={`flex items-center space-x-2 ${
              voted 
                ? 'text-purple-300 cursor-not-allowed' 
                : 'text-purple-600 hover:text-purple-500'
            }`}
            disabled={voted}
          >
            <ThumbsUp className="h-5 w-5" />
            <span>{invention.votes} votes</span>
          </button>
          <span className="text-sm text-white">
            by {invention.createdBy}
          </span>
        </div>
      </div>
    </div>
  );
}