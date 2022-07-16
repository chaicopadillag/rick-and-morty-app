import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { render, screen } from '@testing-library/react';

import { HomePage } from '../../src/pages/HomePage';
import { characterSlice } from '../../src/slices';
import { getCharactersPaginate } from '../../src/thunks/characterThunk';

const store = configureStore({
  reducer: {
    characterState: characterSlice.reducer,
  },
});

describe('Pruebas en <HomePage/>', () => {
  test('debe de mostrar el componente', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );
    // screen.debug();

    expect(screen.getAllByText('Rick and Morty').length).toBeGreaterThanOrEqual(1);
  });

  test('el dispatch debe de invocar "getCharactersPaginate"', () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <HomePage />
        </MemoryRouter>
      </Provider>
    );
    expect(store.dispatch(getCharactersPaginate())).toBeTruthy();
  });
});
