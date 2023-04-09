import { Gender } from '../enums/Gender';

import { HStack } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

import React from 'react';
import { GiMale } from 'react-icons/gi';
import { GiFemale } from 'react-icons/gi';

interface Props {
  clickHandler: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
const GenderButtons = (props: Props) => {
  return (
    <HStack spacing={20} width={'100%'}>
      <Button
        leftIcon={<GiMale />}
        width={'100%'}
        colorScheme="blue"
        size="lg"
        value={Gender.male}
        onClick={props.clickHandler}
      >
        Male
      </Button>
      <Button
        leftIcon={<GiFemale />}
        width={'100%'}
        colorScheme="blue"
        size="lg"
        value={Gender.female}
        onClick={props.clickHandler}
      >
        Female
      </Button>
    </HStack>
  );
};

export default GenderButtons;
