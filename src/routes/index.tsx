import React, { FC } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { FavoritesMovies } from '../pages/Favorites';
import { StackRoutes } from './stack-routes';
import colors from '../shared/styles/colors';

const Drawer = createDrawerNavigator();

export const Routes: FC = () => (
  <Drawer.Navigator
    screenOptions={{
      headerShown: false,
      drawerStyle: {
        backgroundColor: colors.dark,
        paddingTop: 20,
      },
      drawerActiveBackgroundColor: colors.red,
      drawerActiveTintColor: colors.white,
      drawerInactiveTintColor: colors.white,
    }}
  >
    <Drawer.Screen
      name='HomeDrawer'
      component={StackRoutes}
      options={{
        title: 'Home',
        drawerIcon: ({ focused, size, color }) => (
          <MaterialCommunityIcons
            name={focused ? 'movie-open' : 'movie-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />
    <Drawer.Screen
      name='Favorites'
      component={FavoritesMovies}
      options={{
        title: 'Meus filmes',
        drawerIcon: ({ focused, size, color }) => (
          <MaterialCommunityIcons
            name={focused ? 'archive' : 'archive-outline'}
            size={size}
            color={color}
          />
        ),
      }}
    />
  </Drawer.Navigator>
);
