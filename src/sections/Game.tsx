"use client";
import React, { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import { Rocket, Star, Heart, Cloud, Sun, Moon, Flower, Smile, Umbrella, Cat } from 'lucide-react';

export const GameSection = () => {
  const cardIcons = [Rocket, Star, Heart, Cloud, Sun, Moon, Flower, Smile, Umbrella, Cat];

  const generateCards = () => {
    return shuffle([...cardIcons, ...cardIcons].map((Icon, index) => ({
      id: index,
      Icon,
      isFlipped: false,
      isMatched: false
    })));
  };

  const [cards, setCards] = useState(generateCards());
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [topScore, setTopScore] = useState<number | null>(null);

  interface Card {
    id: number;
    Icon: React.ComponentType;
    isFlipped: boolean;
    isMatched: boolean;
  }

  useEffect(() => {
    const storedTopScore = localStorage.getItem('memoryGameTopScore');
    if (storedTopScore) setTopScore(parseInt(storedTopScore, 10));
  }, []);

  const handleCardClick = (clickedCard: Card) => {
    if (clickedCard.isMatched || clickedCard.isFlipped || selectedCards.length === 2) return;

    const newCards = cards.map(card => 
      card.id === clickedCard.id ? { ...card, isFlipped: true } : card
    );

    setCards(newCards);
    setSelectedCards([...selectedCards, clickedCard]);

    if (selectedCards.length === 1) {
      setMoves(moves + 1);
      const firstCard = selectedCards[0];
      
      setTimeout(() => {
        const matchedCards = newCards.map(card => {
          if ((card.id === firstCard.id || card.id === clickedCard.id) && firstCard.Icon === clickedCard.Icon) {
            return { ...card, isMatched: true, isFlipped: true };
          }
          return card.isMatched ? card : { ...card, isFlipped: false };
        });

        setCards(matchedCards);
        setSelectedCards([]);

        if (matchedCards.every(card => card.isMatched)) {
          setGameWon(true);
          if (topScore === null || moves + 1 < topScore) {
            setTopScore(moves + 1);
            localStorage.setItem('memoryGameTopScore', (moves + 1).toString());
          }
        }
      }, 1000);
    }
  };

  const resetGame = () => {
    setCards(generateCards());
    setSelectedCards([]);
    setMoves(0);
    setGameWon(false);
  };

  return (
    <div className="py-16 pt-12 lg:py-24 lg:pt-20">
      <div className="max-w-md mx-auto px-4">
        <div className="bg-gradient-to-r from-indigo-400 to-sky-400 text-gray-900 py-8 px-6 rounded-3xl overflow-hidden">
          <div className="flex flex-col items-center gap-6">
            <div className="text-center">
              <h2 className="font-serif text-2xl md:text-3xl font-bold">Before leaving have some fun🤓</h2>
              <p className="text-sm mt-1">Match all pairs to win!</p>
              <div className="flex justify-center text-sm mt-2 space-x-4">
                <span>Moves: {moves}</span>
                {topScore !== null && <span>Best: {topScore}</span>}
              </div>
            </div>
            <div className="grid grid-cols-5 gap-2 w-full">
              {cards.map((card) => (
                <button
                  key={card.id}
                  onClick={() => handleCardClick(card)}
                  className={`
                    aspect-square rounded-lg flex items-center justify-center
                    transition-all duration-300 text-lg
                    ${card.isFlipped || card.isMatched ? 'bg-white text-gray-900' : 'bg-gray-900 text-white'}
                    ${card.isMatched ? 'opacity-50' : ''}
                  `}
                  aria-label={card.isFlipped || card.isMatched ? card.Icon.name : "Unflipped card"}
                >
                  {(card.isFlipped || card.isMatched) ? <card.Icon className="w-5 h-5" /> : '?'}
                </button>
              ))}
            </div>
            <button 
              onClick={resetGame}
              className="w-full py-2 px-4 bg-gray-900 text-white rounded-lg text-sm hover:bg-gray-800 transition-colors"
            >
              Reset
            </button>
          </div>
          {gameWon && (
            <div className="mt-6 text-center">
              <h3 className="font-serif text-xl font-bold">Congratulations! 🎉</h3>
              <p className="text-sm mt-1">You won in {moves} moves!</p>
              {topScore === moves && (
                <p className="text-sm mt-1 font-bold">New Top Score!</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GameSection;

