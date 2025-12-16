import EUStars from 'Assets/european-flag.svg?react';
import { useContext } from 'react';
import { ThemeContext } from 'Contexts/ThemeContext';

export const EuropeanStars = ({ size }) => {
  const { theme } = useContext(ThemeContext);
  const color = theme ? '#D6D3D1' : '#001b5e';

  return (
    <EUStars
      width={size}
      height={size}
      stroke={color}
      fill={color}
      role="img"
    />
  );
};
