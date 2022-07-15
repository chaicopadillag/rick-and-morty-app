import { Card, Grid, Text } from "@nextui-org/react";
import { MainLayout } from "../components";

export const PageNotFound = () => {
  return (
    <MainLayout title="Listado de Personales">
      <Grid.Container gap={2} css={{ marginTop: "$10" }} justify="center">
        <Card variant="bordered" css={{ mw: "max-content" }}>
          <Card.Body>
            <Text
              h1
              size={60}
              css={{
                textGradient: "45deg, $red500 -20%, $red600 100%",
              }}
              weight="bold"
            >
              Página no encontrada
            </Text>
          </Card.Body>
        </Card>
      </Grid.Container>
    </MainLayout>
  );
};
