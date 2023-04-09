import { Card, CardBody, CardFooter, CardHeader } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';

import React from 'react';

interface Props {
  name: string;
}

const DatasetCard = (props: Props) => {
  return (
    <Card variant={'elevated'} p={5}>
      <CardBody>
        <Text style={{ textAlign: 'center', fontWeight: 'bold' }} fontSize="3xl">
          {props.name}
        </Text>
      </CardBody>
    </Card>
  );
};

export default DatasetCard;
