import { Route, Routes } from 'react-router-dom';
import loadable, { LoadableComponent } from '@loadable/component';
import { Box } from '@mantine/core';

const PageStart = loadable(() => import('~/pages/PageStart'));
const ListPromotion = loadable(() => import('~/pages/ListPromotion'));
const ListDeals = loadable(() => import('~/pages/ListDeals'));

export type InternalRouteProps = {
    displayName: string;
    path: string;
    element: LoadableComponent<unknown>;
    visibility: boolean;
    isExpose: boolean;
    isDefault?: boolean;
  };

  export const internalRoutes: InternalRouteProps[] = [
    {
      displayName: 'Page Start',
      path:'/',
      element: PageStart,
      isExpose: true,
      visibility: true,
    },
    {
      displayName: 'List Promotion',
      path: 'listpromotion',
      element: ListPromotion,
      isExpose: true,
      visibility: true,
    },
    {
      displayName: 'List Deals',
      path: 'listdeals',
      element: ListDeals,
      isExpose: true,
      visibility: true,
    }
  ];

  export const routes = (
    <Routes>
      {internalRoutes
        .sort((a, b) => a.displayName.localeCompare(b.displayName))
        .map((route, index) => {
          const Page = route.isExpose ? route.element : PageStart;
  
          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Box className='h-full p-2'>
                  <Page />
                </Box>
              }
            />
          );
        })}
    </Routes>
  );
  