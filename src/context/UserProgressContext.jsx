import React, { createContext, useContext, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

const UserProgressContext = createContext();

export function UserProgressProvider({ children }) {
  const [readSections, setReadSections] = useLocalStorage('readSections', []);
  const [bookmarks, setBookmarks] = useLocalStorage('bookmarks', []);
  const [annotations, setAnnotations] = useLocalStorage('annotations', {});
  const [quizScores, setQuizScores] = useLocalStorage('quizScores', []);

  const markSectionRead = (sectionId) => {
    if (!readSections.includes(sectionId)) {
      setReadSections([...readSections, sectionId]);
    }
  };

  const toggleBookmark = (sectionId) => {
    if (bookmarks.includes(sectionId)) {
      setBookmarks(bookmarks.filter(id => id !== sectionId));
    } else {
      setBookmarks([...bookmarks, sectionId]);
    }
  };

  const addAnnotation = (sectionId, text) => {
    setAnnotations({
      ...annotations,
      [sectionId]: [...(annotations[sectionId] || []), { text, timestamp: Date.now() }]
    });
  };

  const deleteAnnotation = (sectionId, index) => {
    const updated = { ...annotations };
    updated[sectionId].splice(index, 1);
    setAnnotations(updated);
  };

  const addQuizScore = (score) => {
    setQuizScores([...quizScores, { score, timestamp: Date.now() }]);
  };

  const resetProgress = () => {
    setReadSections([]);
    setBookmarks([]);
    setAnnotations({});
    setQuizScores([]);
  };

  const getProgress = () => {
    const totalSections = 30; // Approximate total sections in thesis
    return Math.round((readSections.length / totalSections) * 100);
  };

  return (
    <UserProgressContext.Provider
      value={{
        readSections,
        bookmarks,
        annotations,
        quizScores,
        markSectionRead,
        toggleBookmark,
        addAnnotation,
        deleteAnnotation,
        addQuizScore,
        resetProgress,
        getProgress,
      }}
    >
      {children}
    </UserProgressContext.Provider>
  );
}

export function useUserProgress() {
  const context = useContext(UserProgressContext);
  if (!context) {
    throw new Error('useUserProgress must be used within UserProgressProvider');
  }
  return context;
}
