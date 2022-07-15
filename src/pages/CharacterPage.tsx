import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Container, Grid, Text } from '@nextui-org/react';
import { useQuery } from '@apollo/client';

import { MainLayout } from '../components';
import { CHARACTER_QUERY } from '../graphql';
import { Result } from '../types';

const hasPokemonInFavorites = (id: number): boolean => {
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');
  return favorites.includes(id);
};

export const CharacterPage = () => {
  const { characterId } = useParams();
  console.log(characterId);

  const { data, loading } = useQuery(CHARACTER_QUERY, { variables: { id: characterId } });

  const [isInFavorite, setIsInFavorite] = useState(hasPokemonInFavorites(1));

  const handleToggleFavorite = () => {
    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') ?? '[]');

    // if (favorites.includes(pokemon.id)) {
    //   favorites.splice(favorites.indexOf(pokemon.id), 1);
    // } else {
    //   favorites.push(pokemon.id);
    // }

    localStorage.setItem('favorites', JSON.stringify(favorites));
    setIsInFavorite(!isInFavorite);
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log(data);

  return (
    <MainLayout title={`Pesonaje {character.name}`}>
      <Grid.Container css={{ marginTop: '5px' }} gap={2}>
        <Grid xs={12} sm={4}>
          <Card isHoverable isPressable css={{ padding: '30px' }}>
            <Card.Body>{/* <Card.Image objectFit='fill' src={ || '/no-image.png'} width='100%' height={200} alt={pokemon.name} /> */}</Card.Body>
          </Card>
        </Grid>
        <Grid xs={12} sm={8}>
          <Card isHoverable isPressable css={{ padding: '30px' }}>
            <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>
              <Text b size={40} transform='capitalize'>
                {'pokemon.name'}
              </Text>
              <Button color='gradient' ghost={!isInFavorite} onClick={handleToggleFavorite}>
                {isInFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text size={30}>Stripes</Text>
              <Container></Container>
            </Card.Body>
            {/* <Card.Footer>
              <Row wrap='wrap'>
                <Text b transform='capitalize'>
                  {pokemon.types.map((type) => type.type.name).join(', ')}
                </Text>
              </Row>
            </Card.Footer> */}
          </Card>
        </Grid>
      </Grid.Container>
    </MainLayout>
  );
};
