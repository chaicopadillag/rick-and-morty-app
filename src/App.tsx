import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useAppDispatch } from './hooks';
import { getCharactersFavorites } from './thunks';
import { CharacterPage, FavoritesPage, HomePage, OderNamesPage, PageNotFound } from './pages';

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharactersFavorites());
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/character/:characterId' element={<CharacterPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/order-names' element={<OderNamesPage />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
