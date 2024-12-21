
import { Trophy } from 'lucide-react';
import type { Invention } from '../types';

interface LeaderboardProps {
  inventions: Invention[];
}

export function Leaderboard({ inventions }: LeaderboardProps) {
  const topInventions = [...inventions]
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 3);

  const medals = ['🥇', '🥈', '🥉'];

  return (
    <div className="bg-black shadow-lg px-6 py-10 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="h-6 w-6 text-purple-600" />
        <h2 className="text-2xl font-bold text-white">Top Useless Inventions</h2>
      </div>
      
      <div className="space-y-4">
        {topInventions.map((invention, index) => (
          <div
            key={invention.id}
            className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
          >
            <span className="text-2xl">{medals[index]}</span>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-800">{invention.name}</h3>
              <p className="text-sm text-gray-600">by {invention.createdBy}</p>
            </div>
            <div className="text-purple-600 font-semibold">
              {invention.votes} votes
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}