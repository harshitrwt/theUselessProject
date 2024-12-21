const STORAGE_KEY = 'voted_inventions';

export function getVotedInventions(): string[] {
  const voted = localStorage.getItem(STORAGE_KEY);
  return voted ? JSON.parse(voted) : [];
}

export function hasVoted(inventionId: string): boolean {
  const votedInventions = getVotedInventions();
  return votedInventions.includes(inventionId);
}

export function recordVote(inventionId: string): void {
  const votedInventions = getVotedInventions();
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify([...votedInventions, inventionId])
  );
}