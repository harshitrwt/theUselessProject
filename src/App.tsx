import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { InventionGrid } from './components/InventionGrid';
import { Leaderboard } from './components/Leaderboard';
import { SubmitInventionModal } from './components/SubmitInventionModal';
import { createInvention } from './utils/inventions';
import { recordVote, hasVoted } from './utils/voting';
import { MOCK_INVENTIONS } from './data/mockData';
import type { Invention } from './types';

export function App() {
  const [inventions, setInventions] = useState<Invention[]>(MOCK_INVENTIONS);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleVote = (id: string) => {
    if (hasVoted(id)) return;
    
    setInventions(prevInventions =>
      prevInventions.map(invention =>
        invention.id === id
          ? { ...invention, votes: invention.votes + 1 }
          : invention
      )
    );
    recordVote(id);
  };

  const handleSubmitInvention = (data: Omit<Invention, 'id' | 'votes' | 'createdAt'>) => {
    const newInvention = createInvention(data);
    setInventions(prev => [newInvention, ...prev]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <Hero onSubmitClick={() => setIsModalOpen(true)} />
              <div className="container mx-auto px-4 py-8">
                
                <InventionGrid inventions={inventions} onVote={handleVote} />
              </div>
              <SubmitInventionModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmitInvention}
              />
            </>
          } />
          <Route path="/leaderboard" element={<Leaderboard inventions={inventions} />} />
        </Routes>
      </div>
    </Router>
  );
}