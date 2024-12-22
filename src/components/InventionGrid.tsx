import React from 'react';
import { Invention } from '../types';
import { InventionCard } from './InventionCard';

interface InventionGridProps {
  inventions: Invention[];
  onVote: (id: string) => void;
}

export function InventionGrid({ inventions, onVote }: InventionGridProps) {
  const [sortBy, setSortBy] = React.useState<'votes' | 'newest'>('votes');

  const sortedInventions = [...inventions].sort((a, b) => {
    if (sortBy === 'votes') {
      return b.votes - a.votes;
    }
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div className="container mx-auto px-4 py-8 bg-gray-950">
      <div className='text-white mx-auto flex justify-center items-center font-bold text-2xl mb-8 md:mb-0 md:text-5xl'>Top Useless Inventions 🙂‍↔️</div>
      <div className="flex justify-end mb-6">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'votes' | 'newest')}
          className="bg-purple-600 border border-yellow-700 rounded-lg px-4 py-2"
        >
          <option value="votes" className='text-white'>Most Voted</option>
          <option value="newest" className='text-white'>Newest</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedInventions.map((invention) => (
          <InventionCard
            key={invention.id}
            invention={invention}
            onVote={onVote}
          />
        ))}
      </div>
    </div>
  );
}