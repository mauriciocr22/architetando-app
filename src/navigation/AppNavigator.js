import React from 'react';
import { Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../constants/colors';

import HomeScreen from '../pages/HomeScreen';
import VideosScreen from '../pages/VideosScreen';
import AboutScreen from '../pages/AboutScreen';
import GalleryScreen from '../pages/GalleryScreen';
import CursosScreen from '../pages/CursosScreen';
import CursoDetailScreen from '../pages/CursoDetailScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const CursosStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CursosList" component={CursosScreen} />
      <Stack.Screen name="CursoDetail" component={CursoDetailScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: colors.primary,
          tabBarInactiveTintColor: colors.textLight,
          tabBarStyle: {
            backgroundColor: colors.white,
            borderTopColor: colors.border,
            borderTopWidth: 1,
            height: Platform.OS === 'ios' ? 85 : 60,
            paddingBottom: Platform.OS === 'ios' ? 20 : 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 22 }}>🏠</Text>,
          }}
        />
        <Tab.Screen
          name="Cursos"
          component={CursosStack}
          options={{
            tabBarLabel: 'Cursos',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 22 }}>📚</Text>,
          }}
        />
        <Tab.Screen
          name="Videos"
          component={VideosScreen}
          options={{
            tabBarLabel: 'Vídeos',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 22 }}>▶️</Text>,
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{
            tabBarLabel: 'Galeria',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 22 }}>🖼️</Text>,
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: 'Sobre',
            tabBarIcon: ({ color }) => <Text style={{ fontSize: 22 }}>ℹ️</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
