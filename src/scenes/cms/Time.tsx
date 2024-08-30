export const getGreeting = (): string => {
  const hours = new Date().getHours();
  if (hours < 12) return 'Good Morning';
  if (hours < 6) return 'Good Afternoon';
  return 'Good Evening';
};

export const getCurrentTime = (): string => {
  const now = new Date();
  return now.toLocaleTimeString(); 
};
