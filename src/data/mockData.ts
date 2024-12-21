import type { Invention } from '../types';

export const MOCK_INVENTIONS: Invention[] = [
  {
    id: '1',
    name: 'Selfie Toaster',
    description: 'A toaster that burns your selfie onto your morning toast. Because regular toast is too boring!',
    imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80',
    votes: 42,
    createdAt: new Date('2024-03-10'),
    createdBy: 'harshit'
  },
  {
    id: '2',
    name: 'Pet Umbrella',
    description: 'A tiny umbrella that attaches to your pet\'s head. Because they hate getting wet too!',
    imageUrl: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&q=80',
    votes: 38,
    createdAt: new Date('2024-03-09'),
    createdBy: 'harshit'
  },
  {
    id: '3',
    name: 'WiFi-Blocking Paint',
    description: 'Paint that blocks WiFi signals. Perfect for when you want to disconnect... literally!',
    imageUrl: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80',
    votes: 27,
    createdAt: new Date('2024-03-08'),
    createdBy: 'harshit'
  }
];