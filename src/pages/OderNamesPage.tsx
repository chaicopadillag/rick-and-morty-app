import { ListNicknames, MainLayout } from "../components";

const names = ["Triviño TI", "Homer Dev", " ", " Ragnar Front", "Loki UX"];

export const OderNamesPage = () => {
  return (
    <MainLayout title="Listado de Personales">
      <ListNicknames names={names} order="ASC" />
    </MainLayout>
  );
};
