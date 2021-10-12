import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as AuthProvider} from './src/context/AuthContext';

import ResolveScreen from './src/screens/splash/ResolveScreen';
import SigninScreen from './src/screens/SigninScreen';
import SigninScreen2 from './src/screens/SigninScreen2';
import SignupScreen from './src/screens/SignupScreen';
import HomeScreen from './src/screens/HomeScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import AccountScreen from './src/screens/AccountScreen';


const stackNavigator = createStackNavigator();
const buttomTabNavigator = createBottomTabNavigator();


const mainFlow = ()=>{
  return(
    <buttomTabNavigator.Navigator>
      <buttomTabNavigator.Screen
        name = "Home"
        component = {HomeScreen}
        options = {{
          headerShown: false
        }}
      />

      <buttomTabNavigator.Screen
        name = "History"
        component = {HistoryScreen}
      />

      <buttomTabNavigator.Screen
        name = "Account"
        component = {AccountScreen}
      />
    </buttomTabNavigator.Navigator>
  )
}

const App = ()=>{
  return(
    <NavigationContainer>
      <stackNavigator.Navigator initialRouteName="Resolve">
        <stackNavigator.Screen
          name = "Resolve"
          component = {ResolveScreen}
          options = {{
            headerShown: false
          }}
        />
        <stackNavigator.Screen
          name = "Signin"
          component = {SigninScreen}
          options = {{
            headerShown: false
          }}
        />
        <stackNavigator.Screen
          name = "Signin2"
          component = {SigninScreen2}
          options = {{
            headerShown: false
          }}
        />

        <stackNavigator.Screen
          name = "Signup"
          component = {SignupScreen}
          options = {{
            headerShown: false
          }}
        />

        <stackNavigator.Screen
          name = "mainFlow"
          component = {mainFlow}
          options = {{
            headerShown: false
          }}
        />
      </stackNavigator.Navigator>
    </NavigationContainer>
  )
}

export default ()=>{
  return(
    <AuthProvider>
      <App/>
    </AuthProvider>
  )
};
