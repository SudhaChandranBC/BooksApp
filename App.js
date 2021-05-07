import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { AppDrawer } from './Navigation/AppDrawer';
import { AuthContext } from './Navigation/context';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { 
  NavigationContainer, 
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme
} from '@react-navigation/native';
import { 
  Provider as PaperProvider, 
  DefaultTheme as PaperDefaultTheme,
  DarkTheme as PaperDarkTheme 
} from 'react-native-paper';

import Tabs from './Navigation/Tabs';
import SupportScreen from './Screens/SupportScreen';
import SettingsScreen from './Screens/SettingsScreen';
import BookmarkScreen from './Screens/BookmarkScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );
  return (
    <PaperProvider>
    <AuthContext.Provider>
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <AppDrawer {...props} />}>
          <Drawer.Screen name="HomeDrawer" component={Tabs} />
          <Drawer.Screen name="SupportScreen" component={SupportScreen} />
          <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
          <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
        </Drawer.Navigator>
    </NavigationContainer>
    </AuthContext.Provider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
