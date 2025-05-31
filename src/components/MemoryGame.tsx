"use client";
import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { shuffle } from 'lodash';
import { Rocket, Star, Heart, Cloud, Sun, Moon, Flower, Smile, Umbrella, Cat, Trophy, RotateCw, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Card {
  id: number;
  Icon: LucideIcon;
  isFlipped: boolean;
  isMatched: boolean;
}

const GameCard = React.memo(({ 
  card, 
  onClick, 
  isDisabled 
}: { 
  card: Card; 
  onClick: (card: Card) => void; 
  isDisabled: boolean;
}) => {
  const handleClick = useCallback(() => {
    if (!isDisabled && !card.isFlipped && !card.isMatched) {
      onClick(card);
    }
  }, [card, onClick, isDisabled]);

  const cardStyle = useMemo(() => `
    aspect-square rounded-lg flex items-center justify-center
    transition-all duration-300 shadow-md transform cursor-pointer
    ${card.isFlipped || card.isMatched
      ? 'bg-gradient-to-br from-white to-gray-100 text-gray-900 ' + 
        (card.isMatched ? 'ring-2 ring-green-400 ring-opacity-50 scale-105' : '')
      : 'bg-gradient-to-br from-indigo-600 to-indigo-700 text-white hover:from-indigo-500 hover:to-indigo-600'}
  `, [card.isFlipped, card.isMatched]);

  return (
    <motion.button
      onClick={handleClick}
      className={cardStyle}
      whileHover={!card.isFlipped && !card.isMatched ? { scale: 1.05 } : {}}
      whileTap={!card.isFlipped && !card.isMatched ? { scale: 0.95 } : {}}
      animate={{
        rotateY: card.isFlipped || card.isMatched ? 180 : 0,
        scale: card.isMatched ? 1.05 : 1
      }}
      transition={{ duration: 0.3 }}
      disabled={isDisabled || card.isFlipped || card.isMatched}
    >
      <div className="w-full h-full flex items-center justify-center transform-gpu" style={{ backfaceVisibility: 'hidden' }}>
        {(card.isFlipped || card.isMatched) ? (
          <card.Icon className={`w-8 h-8 ${card.isMatched ? 'text-green-600' : 'text-indigo-600'}`} />
        ) : (
          <span className="text-lg font-medium text-white/80">?</span>
        )}
      </div>
    </motion.button>
  );
});

GameCard.displayName = 'GameCard';

const MemoryGame = () => {
  const cardIcons = useMemo(() => [Rocket, Star, Heart, Cloud, Sun, Moon, Flower, Smile, Umbrella, Cat], []);

  const generateCards = useCallback((): Card[] =>
    shuffle([...cardIcons, ...cardIcons].map((Icon, i) => ({
      id: i,
      Icon,
      isFlipped: false,
      isMatched: false,
    }))), [cardIcons]);

  const [cards, setCards] = useState<Card[]>(() => generateCards());
  const [selectedCards, setSelectedCards] = useState<Card[]>([]);
  const [moves, setMoves] = useState(0);
  const [gameWon, setGameWon] = useState(false);
  const [topScore, setTopScore] = useState<number | null>(null);
  const [isResetting, setIsResetting] = useState(false);

  // Load top score only once
  useEffect(() => {
    const stored = localStorage.getItem('memoryGameTopScore');
    if (stored) setTopScore(Number(stored));
  }, []);

  const handleCardClick = useCallback((clickedCard: Card) => {
    if (clickedCard.isFlipped || clickedCard.isMatched || selectedCards.length === 2 || isResetting) return;

    const updatedCards = cards.map(c => c.id === clickedCard.id ? { ...c, isFlipped: true } : c);
    const updatedSelection = [...selectedCards, { ...clickedCard, isFlipped: true }];
    
    setCards(updatedCards);
    setSelectedCards(updatedSelection);

    if (updatedSelection.length === 2) {
      setMoves(m => m + 1);
      const [first, second] = updatedSelection;

      // Reduced timeout for better UX
      setTimeout(() => {
        const isMatch = first.Icon === second.Icon;
        const finalCards = updatedCards.map(c => {
          if (c.id === first.id || c.id === second.id) {
            return isMatch ? { ...c, isMatched: true } : { ...c, isFlipped: false };
          }
          return c;
        });

        setCards(finalCards);
        setSelectedCards([]);

        if (isMatch && finalCards.every(c => c.isMatched)) {
          setGameWon(true);
          if (topScore === null || moves + 1 < topScore) {
            const newTop = moves + 1;
            setTopScore(newTop);
            localStorage.setItem('memoryGameTopScore', newTop.toString());
          }
        }
      }, 600); // Reduced from 800ms
    }
  }, [cards, selectedCards, isResetting, moves, topScore]);

  const resetGame = useCallback(() => {
    setIsResetting(true);
    setCards(cards.map(c => ({ ...c, isFlipped: false })));

    setTimeout(() => {
      setCards(generateCards());
      setSelectedCards([]);
      setMoves(0);
      setGameWon(false);
      setIsResetting(false);
    }, 300); // Reduced from 400ms
  }, [cards, generateCards]);

  // Memoize expensive computations
  const gameStats = useMemo(() => ({
    isNewTopScore: topScore === moves && gameWon,
    canReset: !isResetting
  }), [topScore, moves, gameWon, isResetting]);

  return (
    <div className="h-full flex flex-col">
      <div className="text-center mb-4">
        <h3 className="text-xl font-medium text-white mb-1">Memory Game</h3>
        <p className="text-sm text-gray-400">Match all pairs to win! Click on cards to flip them.</p>
        <div className="flex justify-center items-center mt-2 space-x-6">
          <div className="flex items-center px-3 py-1 rounded-full bg-gray-800/50 text-gray-300 text-sm">
            <span className="mr-1">Moves:</span>
            <span className="font-semibold text-indigo-400">{moves}</span>
          </div>
          {topScore !== null && (
            <div className="flex items-center px-3 py-1 rounded-full bg-indigo-900/30 text-indigo-300 text-sm">
              <Trophy className="w-3.5 h-3.5 mr-1" />
              <span>Best: {topScore}</span>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-5 gap-2.5 flex-1">
        {cards.map(card => (
          <GameCard
            key={card.id}
            card={card}
            onClick={handleCardClick}
            isDisabled={selectedCards.length === 2 || isResetting}
          />
        ))}
      </div>

      <AnimatePresence>
        {gameWon && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 p-4 bg-gradient-to-r from-indigo-600/20 to-blue-600/20 rounded-lg text-center"
          >
            <p className="text-white font-medium text-lg">🎉 Congratulations!</p>
            <p className="text-sm text-gray-300 mt-1">You won in {moves} moves!</p>
            {gameStats.isNewTopScore && (
              <p className="text-sm text-indigo-400 font-medium mt-1">New Best Score! 🏆</p>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={resetGame}
        className="mt-4 py-2.5 px-4 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg text-sm font-medium hover:from-indigo-500 hover:to-indigo-600 transition-colors w-full flex items-center justify-center disabled:opacity-50"
        disabled={!gameStats.canReset}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <RotateCw className={`w-4 h-4 mr-2 ${isResetting ? 'animate-spin' : ''}`} />
        {isResetting ? "Resetting..." : "Reset Game"}
      </motion.button>
    </div>
  );
};

export default React.memo(MemoryGame);
