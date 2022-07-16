import { Grid } from '@nextui-org/react';
import React, { FC } from 'react';
import { Navbar } from '../ui';

type LayoutProps = {
  children: JSX.Element | JSX.Element[];
  title?: string;
};

export const MainLayout: FC<LayoutProps> = ({ children, title }) => {
  return (
    <>
      <Navbar />
      <main
        style={{
          padding: '0 1rem',
        }}
      >
        <Grid.Container gap={2} justify='center' css={{ marginTop: '10px' }}>
          {children}
        </Grid.Container>
      </main>
    </>
  );
};
