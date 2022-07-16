import { Card, Grid, Text } from '@nextui-org/react';
import { MainLayout } from '../components';
import { CustomCard } from '../components/ui';

export const PageNotFound = () => {
  return (
    <MainLayout title='Listado de Personales'>
      <Card variant='bordered' css={{ mw: 'max-content' }}>
        <CustomCard text='Página no encontrada' />
      </Card>
    </MainLayout>
  );
};
