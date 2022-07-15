import { Routes, Route, Link } from 'react-router-dom';
import { CharacterPage, HomePage } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/character/:characterId' element={<CharacterPage />} />
        <Route path='/favorites' element={<Link to='/favorites'>Favoritos</Link>} />
      </Routes>
    </>
  );
};

export default App;
