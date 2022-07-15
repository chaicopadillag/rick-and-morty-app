import { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { useAppDispatch } from "./hooks";
import { CharacterPage, FavoritesPage, HomePage, PageNotFound } from "./pages";
import { getCharactersFavorites } from "./thunks";

const App = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCharactersFavorites());
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/character/:characterId" element={<CharacterPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
