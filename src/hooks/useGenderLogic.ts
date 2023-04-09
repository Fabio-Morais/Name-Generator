import { randomArrayPick } from '../utils/random';

import React, { useState } from 'react';

const useGenderLogic = () => {
  const [name, setName] = useState('');
  const [displayName, setDisplayName] = useState(false);

  const OnClickHandler = (ev: React.MouseEvent<HTMLButtonElement>) => {
    const randomObject = randomArrayPick(ev.currentTarget.value);
    const nameParam = 3;
    setName(randomObject[nameParam]);
    setDisplayName(true);
  };

  return { name, displayName, OnClickHandler } as const;
};

export default useGenderLogic;
