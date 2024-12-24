import type { Invention } from '../types';

export function generateInventionId(): string {
  return Math.random().toString(36).substr(2, 9);
}

export function createInvention(
  data: Omit<Invention, 'id' | 'votes' | 'createdAt'>
): Invention {
  return {
    id: generateInventionId(),
    votes: 0,
    createdAt: new Date(),
    ...data
  };
}