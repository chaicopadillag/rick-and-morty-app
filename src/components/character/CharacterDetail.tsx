import { FC, useEffect, useState } from "react";
import { Button, Card, Container, Grid, Row, Text } from "@nextui-org/react";
import { CharacterType } from "../../types";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { setFavorites } from "../../slices";

type CharacterDetailProp = { character: CharacterType };

export const CharacterDetail: FC<CharacterDetailProp> = ({ character }) => {
  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.characterState);

  const [isInFavorite, setIsInFavorite] = useState(false);

  const handleToggleFavorite = () => {
    const myFavorites = [...favorites];

    if (favorites.includes(character)) {
      myFavorites.splice(myFavorites.indexOf(character), 1);
    } else {
      myFavorites.push(character);
    }

    localStorage.setItem("favorites", JSON.stringify(myFavorites));
    dispatch(setFavorites(myFavorites));
    setIsInFavorite(!isInFavorite);
  };

  useEffect(() => {
    const existCharacter = favorites.find((ch) => ch.id === character.id);

    if (existCharacter) setIsInFavorite(true);
  }, [character]);

  return (
    <>
      <Grid xs={12} sm={4}>
        <Card
          isHoverable
          isPressable
          variant="bordered"
          css={{ padding: "10px" }}
        >
          <Card.Body>
            <Card.Image
              objectFit="fill"
              src={character?.image || "/no-image.png"}
              width="100%"
              height={500}
              alt={character?.name}
            />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={8}>
        <Card
          isHoverable
          isPressable
          variant="bordered"
          css={{ padding: "30px" }}
        >
          <Card.Header
            css={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text b size={40} transform="capitalize">
              {character?.name}
            </Text>
            <Button
              color="gradient"
              ghost={!isInFavorite}
              onClick={handleToggleFavorite}
            >
              {isInFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Text size={30}>Información</Text>
            <Container></Container>
          </Card.Body>
          <Card.Footer>
            <Row wrap="wrap">
              <Text b transform="capitalize">
                {character?.location.name}
              </Text>
            </Row>
          </Card.Footer>
        </Card>
      </Grid>
    </>
  );
};

// const hasCharacterInFavorites = (id:number) => {
//     const characterExist=
// };
