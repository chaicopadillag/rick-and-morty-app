import { FC, useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Grid,
  Row,
  Text,
} from "@nextui-org/react";
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
    const existCharacter = myFavorites.find((ch) => ch.id === character.id);

    if (existCharacter) {
      myFavorites.splice(myFavorites.indexOf(existCharacter), 1);
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

  const { id, gender, image, location, name, species, status } = character;

  return (
    <>
      <Grid xs={12} sm={4}>
        <Card isHoverable variant="bordered" css={{ padding: "10px" }}>
          <Card.Body>
            <Card.Image
              objectFit="fill"
              src={image || "/no-image.png"}
              width="100%"
              height={500}
              alt={name}
            />
          </Card.Body>
        </Card>
      </Grid>
      <Grid xs={12} sm={8}>
        <Card isHoverable variant="bordered" css={{ padding: "30px" }}>
          <Card.Header
            css={{ display: "flex", justifyContent: "space-between" }}
          >
            <Text b size={40} transform="capitalize">
              {name}
            </Text>
            <Button
              color="gradient"
              ghost={!isInFavorite}
              onPress={handleToggleFavorite}
            >
              {isInFavorite ? "Quitar de favoritos" : "Agregar a favoritos"}
            </Button>
          </Card.Header>
          <Card.Body>
            <Text size={30}>Información</Text>
            <Container gap={0}>
              <Row gap={1}>
                <Col css={{ width: "30%" }}>
                  <Text b transform="uppercase">
                    ID:
                  </Text>
                </Col>
                <Col css={{ textAlign: "left" }}>
                  <Text transform="capitalize">{id}</Text>
                </Col>
              </Row>
              <Row gap={1}>
                <Col css={{ width: "30%" }}>
                  <Text b transform="uppercase">
                    Genero:
                  </Text>
                </Col>
                <Col css={{ textAlign: "left" }}>
                  <Text transform="capitalize">{gender}</Text>
                </Col>
              </Row>
              <Row gap={1}>
                <Col css={{ width: "30%" }}>
                  <Text b transform="uppercase">
                    Especie:
                  </Text>
                </Col>
                <Col css={{ textAlign: "left" }}>
                  <Text transform="capitalize">{species}</Text>
                </Col>
              </Row>
              <Row gap={1}>
                <Col css={{ width: "30%" }}>
                  <Text b transform="uppercase">
                    Estado:
                  </Text>
                </Col>
                <Col css={{ textAlign: "left" }}>
                  <Text transform="capitalize">{status}</Text>
                </Col>
              </Row>
              <Row gap={1}>
                <Col css={{ width: "30%" }}>
                  <Text b transform="uppercase">
                    Lugar:
                  </Text>
                </Col>
                <Col css={{ textAlign: "left" }}>
                  <Text transform="capitalize">{location.name}</Text>
                </Col>
              </Row>
            </Container>
          </Card.Body>
        </Card>
      </Grid>
    </>
  );
};
