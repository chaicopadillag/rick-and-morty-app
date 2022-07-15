import { FC } from 'react';
import { Card, Grid, Row, Text } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';
import { Result } from '../../types';

export const CharacterCard: FC<{ character: Result }> = ({ character: { name, id, image } }) => {
  const navigate = useNavigate();

  const handleViewDetail = () => {
    navigate(`/character/${id}`);
  };

  return (
    <Grid xs={12} sm={6} md={3} xl={2}>
      <Card isHoverable isPressable onClick={handleViewDetail}>
        <Card.Body css={{ p: 1 }}>
          <Card.Image objectFit='fill' src={image} width='100%' height={200} alt={name} />
        </Card.Body>
        <Card.Footer>
          <Row wrap='wrap' justify='space-between'>
            <Text b transform='capitalize'>
              {name}
            </Text>
          </Row>
        </Card.Footer>
      </Card>
    </Grid>
  );
};
