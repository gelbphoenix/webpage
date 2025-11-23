import SvgUkraine from 'Assets/ukraine.svg?react';

export const UkraineTrident = ({ size }) => {
  return (
    <SvgUkraine
      width={size}
      height={size}
      stroke="currentColor"
      fill="currentColor"
      role="img"
    />
  );
};
