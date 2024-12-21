import { useState } from 'react';
import { InventionCard } from './InventionCard';
import type { Invention } from '../types';

interface InventionGridProps {
  inventions: Invention[];
  onVote: (id: string) => void;
}

export function InventionGrid({ inventions, onVote }: InventionGridProps) {
  const [sortBy, setSortBy] = useState<'votes' | 'newest'>('votes');

  const sortedInventions = [...inventions].sort((a, b) => {
    if (sortBy === 'votes') {
      return b.votes - a.votes;
    }
    return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  });

  return (
    <div className="container mx-auto px-4 py-8 bg-black">
      <div className="flex justify-end mb-6">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'votes' | 'newest')}
          className="bg-purple-600 border border-gray-300 rounded-lg px-4 py-2"
        >
          <option value="votes">Most Voted</option>
          <option value="newest">Newest</option>
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