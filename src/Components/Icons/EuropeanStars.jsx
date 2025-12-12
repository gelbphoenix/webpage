import EUStars from 'Assets/european-flag.svg?react';

export const EuropeanStars = ({ size }) => {
  return (
    <EUStars
      width={size}
      height={size}
      stroke="currentColor"
      fill="currentColor"
      role="img"
    />
  );
};
