import React from 'react';
import { render } from '@testing-library/react';
import { CharacterCard } from '../../../src/components';
import { characterDemo } from '../../fixture/characterFixture';
import { MemoryRouter } from 'react-router-dom';

describe('Prueba Snapshot de Componente <CharacterCard/>', () => {
  test('debe de mostrar el componente', () => {
    const { container } = render(
      <MemoryRouter>
        <CharacterCard character={characterDemo} />
      </MemoryRouter>
    );
    expect(container).toMatchSnapshot();
  });
});
