import React from 'react';
import { Grid, Loading } from '@nextui-org/react';
import { useEffect } from 'react';
import { CharacterCard, MainLayout } from '../components';
import { useAppDispatch, useAppSelector } from '../hooks';
import { getCharactersPaginate } from '../thunks';

export const HomePage = () => {
  const dispatch = useAppDispatch();
  const { characters, isLoading } = useAppSelector((state) => state.characterState);

  useEffect(() => {
    dispatch(getCharactersPaginate());
  }, []);
  return (
    <MainLayout title='Listado de Personales'>
      <>
        {isLoading && <Loading>Cargando...</Loading>}
        {characters.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
      </>
    </MainLayout>
  );
};
