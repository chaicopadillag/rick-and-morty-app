import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid, Loading } from '@nextui-org/react';
import { useQuery } from '@apollo/client';

import { CharacterDetail, MainLayout } from '../components';
import { CHARACTER_QUERY } from '../graphql';
import { useAppDispatch, useAppSelector } from '../hooks';
import { clearCharacter, setCharacter } from '../slices';
import { CharacterResponseType } from '../types';
import { CustomCard } from '../components/ui';

export const CharacterPage = () => {
  const dispatch = useAppDispatch();
  const { character } = useAppSelector((state) => state.characterState);
  const { characterId } = useParams();

  const { data, loading } = useQuery<CharacterResponseType>(CHARACTER_QUERY, {
    variables: { id: characterId },
  });
  useEffect(() => {
    return () => {
      dispatch(clearCharacter());
    };
  }, []);

  useEffect(() => {
    if (data?.character) dispatch(setCharacter(data.character));
  }, [data]);

  return (
    <MainLayout title={`Pesonaje {character.name}`}>
      <>{loading ? <Loading>Cargando...</Loading> : character === null ? <CustomCard text='El personaje que busca no existe' /> : <CharacterDetail character={character} />}</>
    </MainLayout>
  );
};
