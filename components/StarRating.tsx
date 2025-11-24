import React from 'react';
import { StarIcon } from './icons/StarIcon';

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({ rating, onRatingChange, interactive = false }) => {
  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={interactive ? () => onRatingChange?.(star) : undefined}
          disabled={!interactive}
          className={`transition-transform duration-150 ${interactive ? 'hover:scale-125 focus:outline-none focus:scale-125' : ''}`}
          aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
        >
          <StarIcon
            className={`w-7 h-7 ${interactive ? 'cursor-pointer' : ''} ${
              star <= Math.round(rating) ? 'text-amber-400' : 'text-gray-500'
            }`}
            filled={star <= Math.round(rating)}
          />
        </button>
      ))}
    </div>
  );
};
