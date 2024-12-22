import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Leaderboard } from './components/Leaderboard';
import { InventionGrid } from './components/InventionGrid';
import { SubmitInventionModal } from './components/SubmitInventionModal';
import { useState, useEffect } from 'react';
import { Footer } from './components/Footer';

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
  const [message, setMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  
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
      setMessage('You have already voted for this invention. Thank you for your enthusiasm!'); // Improved message
      setShowMessage(true);
      return;
    }

    setInventions(prev =>
      prev.map(invention =>
        invention.id === id ? { ...invention, votes: invention.votes + 1 } : invention
      )
    );

    setVotedInventions(prev => [...prev, id]);
    setMessage('Thank you for your vote! Your support makes a difference!'); // Improved message
    setShowMessage(true);
  };

  const handleSubmitInvention = (newInvention: Invention) => {
    setInventions(prev => [newInvention, ...prev]);
  };

  // Automatically hide the message after a few seconds
  useEffect(() => {
    if (showMessage) {
      const timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000); // Message will disappear after 3 seconds

      return () => clearTimeout(timer);
    }
  }, [showMessage]);

  return (
    <Router>
      <div className="min-h-screen bg-gray-950">
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
                {showMessage && (
                  <div className="fixed top-20 right-10 bg-white text-purple-600 border border-purple-600 rounded-lg p-4 shadow-lg">
                    {message}
                  </div>
                )}
              </>
            }
          />
          <Route path="/leaderboard" element={<Leaderboard inventions={inventions} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
