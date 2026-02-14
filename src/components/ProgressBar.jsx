import React from 'react';
import { useUserProgress } from '../context/UserProgressContext';

export default function ProgressBar() {
  const { getProgress } = useUserProgress();
  const progress = getProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-200 z-50">
      <div
        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
