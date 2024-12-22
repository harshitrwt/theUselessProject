import { useState } from 'react';

interface SubmitInventionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newInvention: any) => void;
}

export function SubmitInventionModal({ isOpen, onClose, onSubmit }: SubmitInventionModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    const newInvention = {
      id: Date.now().toString(),
      name,
      description,
      imageUrl,
      votes: 0,
      createdAt: new Date(),
      createdBy: 'anonymous',
    };
    onSubmit(newInvention);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg">
        <h2 className="text-2xl mb-4">Submit Your Useless Idea</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        <button onClick={handleSubmit} className="bg-purple-600 text-white px-4 py-2 rounded">
          Submit
        </button>
        <button onClick={onClose} className="ml-4 bg-gray-600 text-white px-4 py-2 rounded">
          Cancel
        </button>
      </div>
    </div>
  );
}