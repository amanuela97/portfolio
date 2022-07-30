import { useState, useRef, useEffect } from "react";

const TypeWritter = ({ words }) => {
  const wordIndex = useRef(0);
  const wordsIndex = useRef(0);
  const isDelete = useRef(false);
  const [currentLetter, setCurrentLetter] = useState("");

  useEffect(() => {
    wordsIndex.current = 0;
    wordIndex.current = 0;
    setCurrentLetter("");
  }, [words]);

  useEffect(() => {
    const time = isDelete.current ? 400 : 1000;
    const timeoutId = setTimeout(() => {
      let word = words[wordsIndex.current].split("");
      if (word.length > wordIndex.current) {
        setCurrentLetter((letter) => letter + word[wordIndex.current]);
        wordIndex.current += 1;
        if (word.length === wordIndex.current) isDelete.current = true;
      } else {
        if (currentLetter.length > 0) {
          setCurrentLetter((value) => value.substring(0, value.length - 1));
          if (currentLetter.length === 1) {
            isDelete.current = false;
            wordIndex.current = 0;
            if (words.length > wordsIndex.current + 1) {
              wordsIndex.current += 1;
            } else {
              wordsIndex.current = 0;
            }
          }
        }
      }
    }, time);
    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentLetter, words]);

  return (
    <>
      <span className="inline dark:text-cyan-700 text-slate-400">{currentLetter}</span>
      <span className="inline animate-blink">|</span>
    </>
  );
};

export default TypeWritter;
