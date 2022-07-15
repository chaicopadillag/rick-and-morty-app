import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Grid, Loading } from "@nextui-org/react";
import { useQuery } from "@apollo/client";

import { CharacterDetail, MainLayout } from "../components";
import { CHARACTER_QUERY } from "../graphql";
import { useAppDispatch, useAppSelector } from "../hooks";
import { clearCharacter, setCharacter } from "../slices";
import { CharacterResponseType } from "../types";

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
      <Grid.Container
        css={{ marginTop: "10px", justifyContent: "center" }}
        gap={2}
      >
        {loading && <Loading>Cargando...</Loading>}
        {character && <CharacterDetail character={character} />}
      </Grid.Container>
    </MainLayout>
  );
};
