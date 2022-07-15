import { Row, Switch, Text } from "@nextui-org/react";
import { useState } from "react";
import { ListNicknames, MainLayout } from "../components";

const names = [
  "Triviño TI",
  "Homer Dev",
  " ",
  " Ragnar Front",
  "Loki UX",
  "Anonymous",
];

export const OderNamesPage = () => {
  const [isDesc, setIsDesc] = useState<boolean>(false);
  return (
    <MainLayout title="Listado de Personales">
      <div>
        <Row>
          <Switch
            squared
            color="primary"
            checked={true}
            onChange={(e) => {
              setIsDesc((status) => !status);
            }}
          />
          <Text size={18} css={{ marginLeft: "$4" }}>
            {isDesc ? "DESC" : "ASC"}
          </Text>
        </Row>
        <ListNicknames names={names} order={isDesc ? "DESC" : "ASC"} />
      </div>
    </MainLayout>
  );
};
