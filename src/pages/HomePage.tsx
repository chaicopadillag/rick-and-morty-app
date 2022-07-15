import { Grid } from '@nextui-org/react';
import React, { useEffect } from 'react';
import { CharacterCard, MainLayout } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getCharactersPaginate } from '../thunks';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { characters } = useAppSelector((state) => state.characterState);

  useEffect(() => {
    dispatch(getCharactersPaginate());
  }, []);
  return (
    <MainLayout title='Listado de Personales'>
      <Grid.Container gap={2} justify='center'>
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </Grid.Container>
    </MainLayout>
  );
};
