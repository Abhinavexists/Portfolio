"use client";
import React, { useState, useEffect } from 'react';
import { shuffle } from 'lodash';
import { 
  Rocket, 
  Star, 
  Heart, 
  Cloud, 
  Sun, 
  Moon, 
  Flower, 
  Smile, 
  Umbrella, 
  Cat 
} from 'lucide-react';

export const ContactSection = () => {
  const cardIcons = [
    Rocket, Star, Heart, Cloud, 
    Sun, Moon, Flower, Smile, 
    Umbrella, Cat
  ];

  const generateCards = () => {
    const icons = [...cardIcons, ...cardIcons]
      .map((Icon, index) => ({
        id: index,
        Icon,
        isFlipped: false,
        isMatched: false
      }));
    return shuffle(icons);
  };

  const [cards, setCards] = useState(generateCards());
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);

  interface Card {
    id: number;
    Icon: React.ComponentType;
    isFlipped: boolean;
    isMatched: boolean;
  }

  const handleCardClick = (clickedCard: Card) => {
    if (clickedCard.isMatched || clickedCard.isFlipped || selectedCards.length === 2) return;

    const newCards = cards.map(card => 
      card.id === clickedCard.id 
        ? { ...card, isFlipped: true } 
        : card
    );

    setCards(newCards);
    setSelectedCards([...selectedCards, clickedCard]);

    if (selectedCards.length === 1) {
      setMoves(moves + 1);
      const firstCard = selectedCards[0];
      
      setTimeout(() => {
        const matchedCards = newCards.map(card => {
          if (
            (card.id === firstCard.id || card.id === clickedCard.id) &&
            firstCard.Icon === clickedCard.Icon
          ) {
            return { ...card, isMatched: true, isFlipped: true };
          }
          return card.isMatched ? card : { ...card, isFlipped: false };
        });

        setCards(matchedCards);
        setSelectedCards([]);

        if (matchedCards.every(card => card.isMatched)) {
          setGameWon(true);
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
    <div className="py-16 pt-12 lg:py-24 lg:pt-20 z">
      <div className="max-w-[85%] md:max-w-4xl lg:max-w-[80rem] mx-auto">
        <div className="bg-gradient-to-r from-indigo-400 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-[10]">
          {gameWon ? (
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center z-[10]">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl">
                  Congratulations! 🎉
                </h2>
                <p className="text-sm mt-2 md:text-base">
                  You won in {moves} moves!
                </p>
              </div>
              <div>
                <button 
                  onClick={resetGame}
                  className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                >
                  Play Again
                </button>
              </div>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center z-[10]">
              <div>
                <h2 className="font-serif text-2xl md:text-3xl z-[10]">
                  Memory Game (Moves: {moves})
                </h2>
                <p className="text-sm mt-2 md:text-base z-[10]">
                  Match all pairs to win!
                </p>
              </div>
              <div className="grid grid-cols-5 gap-2 w-full max-w-[300px]">
                {cards.map((card) => (
                  <button
                    key={card.id}
                    onClick={() => handleCardClick(card)}
                    className={`
                      aspect-square rounded-lg flex items-center justify-center
                      transition-all duration-300
                      ${card.isFlipped || card.isMatched 
                        ? 'bg-white text-gray-900' 
                        : 'bg-gray-900 text-white'}
                      ${card.isMatched ? 'opacity-50' : ''}
                    `}
                  >
                    {(card.isFlipped || card.isMatched) ? (
                      <card.Icon className="w-6 h-6" />
                    ) : (
                      '?'
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;