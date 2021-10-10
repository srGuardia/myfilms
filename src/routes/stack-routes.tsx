import React, { FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from '../pages/Home';
import { Details } from '../pages/Detail';

const Stack = createNativeStackNavigator();

export const StackRoutes: FC = () => (
  <Stack.Navigator>
    <Stack.Screen
      name='Home'
      component={Home}
      options={{ headerShown: false }}
    />

    <Stack.Screen
      name='Detail'
      component={Details}
      options={{ headerShown: false, title: 'Detalhes' }}
    />
  </Stack.Navigator>
);
