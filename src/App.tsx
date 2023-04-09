import DatasetCard from './components/DatasetCard';
import GenderButtons from './components/GenderButtons';
import useGenderLogic from './hooks/useGenderLogic';

import { Container, Stack } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';

import React from 'react';

function App() {
  const { name, displayName, OnClickHandler } = useGenderLogic();
  return (
    <Container maxW="container.lg" height="100vh" centerContent>
      <Stack spacing={'30px'} mt={10} width="100%" height={'100%'}>
        <Heading mb={20} size="3xl" style={{ textAlign: 'center' }}>
          Name Generator
        </Heading>
        <GenderButtons clickHandler={OnClickHandler} />
        {displayName && <DatasetCard name={name} />}
      </Stack>
    </Container>
  );
}

export default App;
