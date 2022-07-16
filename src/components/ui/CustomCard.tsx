import { Card, Text } from '@nextui-org/react';
import { FC } from 'react';

export const CustomCard: FC<{ text: string }> = ({ text }) => {
  return (
    <Card variant='bordered' css={{ mw: 'max-content' }}>
      <Card.Body>
        <Text
          h1
          size={60}
          css={{
            textGradient: '45deg, $blue600 -20%, $pink600 50%',
          }}
          weight='bold'
        >
          {text}
        </Text>
      </Card.Body>
    </Card>
  );
};
