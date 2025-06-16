import { useState, useEffect } from 'react';

export function useTypewriter(words: string[], speed = 150, deleteSpeed = 75, pauseTime = 2000) {
  const [currentWord, setCurrentWord] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = words[currentIndex];
    
    const timer = setTimeout(() => {
      if (isDeleting) {
        setCurrentWord(word.substring(0, currentWord.length - 1));
        if (currentWord === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % words.length);
        }
      } else {
        setCurrentWord(word.substring(0, currentWord.length + 1));
        if (currentWord === word) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    }, isDeleting ? deleteSpeed : speed);

    return () => clearTimeout(timer);
  }, [currentWord, currentIndex, isDeleting, words, speed, deleteSpeed, pauseTime]);

  return currentWord;
}