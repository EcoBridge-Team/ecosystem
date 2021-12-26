import { useState } from 'react';

interface HeaderProps {
  title: string;
  color?: string;
}

export const Header = (props: HeaderProps): JSX.Element => {
  const [image, setImage] = useState('bg-hero');
  const [color, setColor] = useState('text-green-600');

  const { title } = props;

  return (
    <div
      id="header"
      className={`${image} backdrop-filter bg-opacity-50 bg-cover h-24 sm:flex sm:justify-end`}
      onClick={() => {
        if (image === 'bg-hero') {
          setImage('church');
          setColor('text-white');
        } else if (image === 'church') {
          setImage('endless');
          setColor('text-white');
        } else if (image === 'endless') {
          setImage('parkay');
          setColor('text-white');
        } else if (image === 'parkay') {
          setImage('melt');
          setColor('text-white');
        } else if (image === 'melt') {
          setImage('bg-hero');
          setColor('text-green-600');
        }
      }}
    >
      <h1
        className={`${color} sm:w-full lg:w-3/5 my-auto text-2xl lg:text-4xl text-center md:text-right font-bold tracking-wide p-6`}
      >
        {title}
      </h1>
    </div>
  );
};
