export interface Invention {
  id: string;
  name: string;
  description: string;
  imageUrl?: string;
  votes: number;
  createdAt: Date;
  createdBy: string;
}

export interface User {
  id: string;
  username: string;
  inventions: string[];
  votedOn: string[];
}