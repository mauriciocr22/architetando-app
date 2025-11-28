import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../constants/colors';

// Importar as telas
import HomeScreen from '../screens/HomeScreen';
import VideosScreen from '../screens/VideosScreen';
import AboutScreen from '../screens/AboutScreen';
import GalleryScreen from '../screens/GalleryScreen';

const Tab = createBottomTabNavigator();

/**
 * Navegação principal do aplicativo
 * Bottom Tabs com 4 telas: Home, Vídeos, Sobre e Galeria
 */
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
            height: 60,
            paddingBottom: 8,
            paddingTop: 8,
          },
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Início',
            tabBarIcon: ({ color }) => (
              <TabIcon icon="🏠" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Videos"
          component={VideosScreen}
          options={{
            tabBarLabel: 'Vídeos',
            tabBarIcon: ({ color }) => (
              <TabIcon icon="▶️" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="About"
          component={AboutScreen}
          options={{
            tabBarLabel: 'Sobre',
            tabBarIcon: ({ color }) => (
              <TabIcon icon="ℹ️" color={color} />
            ),
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={GalleryScreen}
          options={{
            tabBarLabel: 'Galeria',
            tabBarIcon: ({ color }) => (
              <TabIcon icon="🖼️" color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// Componente auxiliar para ícones de emoji
const TabIcon = ({ icon, color }) => {
  return <Text style={{ fontSize: 24 }}>{icon}</Text>;
};

export default AppNavigator;
