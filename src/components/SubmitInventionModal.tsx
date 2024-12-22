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
  const [createdBy, setCreatedBy] = useState('');

  const handleSubmit = () => {
    const newInvention = {
      id: Date.now().toString(),
      name,
      description,
      imageUrl,
      votes: 0,
      createdAt: new Date(),
      createdBy,
    };
    onSubmit(newInvention);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-black p-8 rounded-lg shadow-lg border border-purple-600 w-[95%] md:w-full">
        <h2 className="text-4xl font-bold text-purple-600 mb-4">Submit Your Useless Idea 😎</h2>
        <input
          type="text"
          placeholder="Project Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-purple-600 bg-gray-800 text-white p-2 mb-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-600"
        />
        <textarea
          placeholder="Explain your project"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border border-purple-600 bg-gray-800 text-white p-2 mb-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-600"
        />
        <input
          type="text"
          placeholder="Image"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          className="border border-purple-600 bg-gray-800 text-white p-2 mb-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-600"
        />
        <input
          type="text"
          placeholder="Your Name"
          value={createdBy}
          onChange={(e) => setCreatedBy(e.target.value)}
          className="border border-purple-600 bg-gray-800 text-white p-2 mb-4 w-full rounded focus:outline-none focus:ring focus:ring-purple-600"
        />
        <div className="flex justify-between">
          <button 
            onClick={handleSubmit} 
            className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700 transition duration-200">
            Submit
          </button>
          <button 
            onClick={onClose} 
            className="ml-4 bg-gray-700 text-white px-6 py-2 rounded hover:bg-gray-600 transition duration-200">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
