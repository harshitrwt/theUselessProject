import React, { useState } from 'react';
import { X } from 'lucide-react';
import type { Invention } from '../types';

interface SubmitInventionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (invention: Omit<Invention, 'id' | 'votes' | 'createdAt'>) => void;
}

export function SubmitInventionModal({ isOpen, onClose, onSubmit }: SubmitInventionModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    imageUrl: '',
    createdBy: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', description: '', imageUrl: '', createdBy: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Submit Your Useless Invention</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Invention Name
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
              className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., Selfie Toaster"
            />
          </div>

          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              id="description"
              required
              value={formData.description}
              onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
              className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-purple-500 h-32"
              placeholder="Describe your unnecessary invention..."
            />
          </div>

          <div>
            <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
              Image URL (optional)
            </label>
            <input
              type="url"
              id="imageUrl"
              value={formData.imageUrl}
              onChange={(e) => setFormData(prev => ({ ...prev, imageUrl: e.target.value }))}
              className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-purple-500"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <div>
            <label htmlFor="createdBy" className="block text-sm font-medium text-gray-700 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="createdBy"
              required
              value={formData.createdBy}
              onChange={(e) => setFormData(prev => ({ ...prev, createdBy: e.target.value }))}
              className="w-full rounded-lg border-gray-300 border p-2 focus:ring-2 focus:ring-purple-500"
              placeholder="e.g., abcdef45"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-500 transition-colors font-semibold"
          >
            Submit Invention
          </button>
        </form>
      </div>
    </div>
  );
}