import { CharacterCard, MainLayout } from '../components';
import { CustomCard } from '../components/ui';
import { useAppSelector } from '../hooks';

export const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.characterState);

  return (
    <MainLayout title='Listado de Personales'>
      <>
        {favorites.map((character) => (
          <CharacterCard character={character} key={character.id} />
        ))}
        {favorites.length <= 0 && <CustomCard text='No tienes personajes favoritos' />}
      </>
    </MainLayout>
  );
};
