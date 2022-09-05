import { SetStateAction } from 'react';

export interface CardRatingProps {
  isSent: boolean;
  setSent: React.Dispatch<SetStateAction<boolean>>;
}
