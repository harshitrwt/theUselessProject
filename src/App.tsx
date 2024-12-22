import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Leaderboard } from './components/Leaderboard';
import { InventionGrid } from './components/InventionGrid';
import { SubmitInventionModal } from './components/SubmitInventionModal';
import { useState, useEffect } from 'react';

interface Invention {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  votes: number;
  createdAt: Date;
  createdBy: string;
}

function App() {
  const [inventions, setInventions] = useState<Invention[]>(() => {
    const savedInventions = localStorage.getItem('inventions');
    return savedInventions ? JSON.parse(savedInventions) : [];
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [votedInventions, setVotedInventions] = useState<string[]>(() => {
    const savedVotes = localStorage.getItem('votedInventions');
    return savedVotes ? JSON.parse(savedVotes) : [];
  });

  useEffect(() => {
    localStorage.setItem('inventions', JSON.stringify(inventions));
  }, [inventions]);

  useEffect(() => {
    localStorage.setItem('votedInventions', JSON.stringify(votedInventions));
  }, [votedInventions]);

  const handleVote = (id: string) => {
    if (votedInventions.includes(id)) {
      alert('You have already voted for this invention.');
      return;
    }

    setInventions(prev =>
      prev.map(invention =>
        invention.id === id ? { ...invention, votes: invention.votes + 1 } : invention
      )
    );

    setVotedInventions(prev => [...prev, id]);
  };

  const handleSubmitInvention = (newInvention: Invention) => {
    setInventions(prev => [newInvention, ...prev]);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
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
            }
          />
          <Route path="/leaderboard" element={<Leaderboard inventions={inventions} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;