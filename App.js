import React from "react";
import { LogBox } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { Provider as AuthProvider } from "./src/context/AuthContext";

import ResolveScreen from "./src/screens/splash/ResolveScreen";
import SigninScreen from "./src/screens/SigninScreen";
import SignupScreen from "./src/screens/SignupScreen";
import HomeScreen from "./src/screens/HomeScreen";
import HistoryScreen from "./src/screens/HistoryScreen";
import AccountScreen from "./src/screens/AccountScreen";
import TermAndPrivacy from "./src/screens/TermAndPrivacy";
import HelpAndSupport from "./src/screens/HelpAndSupport";
import EditProfile from "./src/screens/EditProfile";

const stackNavigator = createStackNavigator();
const buttomTabNavigator = createBottomTabNavigator();

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const MainFlow = () => {
  return (
    <buttomTabNavigator.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          if (route.name === "Home") {
            return (
              <FontAwesome5
                name={focused ? "indent" : "indent"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Account") {
            return (
              <MaterialCommunityIcons
                name={focused ? "account" : "account"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "History") {
            return (
              <MaterialCommunityIcons
                name={focused ? "material-design" : "material-design"}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: "grey",
        tabBarActiveTintColor: "green",
      })}
    >
      <buttomTabNavigator.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />

      <buttomTabNavigator.Screen
        name="History"
        component={HistoryScreen}
        options={{ headerShown: false }}
      />

      <buttomTabNavigator.Screen
        name="Account"
        component={AccountScreen}
        options={{ headerShown: false }}
      />
    </buttomTabNavigator.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <stackNavigator.Navigator initialRouteName="Resolve">
        <stackNavigator.Screen
          name="Resolve"
          component={ResolveScreen}
          options={{
            headerShown: false,
          }}
        />
        <stackNavigator.Screen
          name="Signin"
          component={SigninScreen}
          options={{
            headerShown: false,
          }}
        />

        <stackNavigator.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            headerShown: false,
          }}
        />

        <stackNavigator.Screen
          name="MainFlow"
          component={MainFlow}
          options={{
            headerShown: false,
          }}
        />
        <stackNavigator.Screen
          name="TermAndPrivacy"
          component={TermAndPrivacy}
          options={{
            headerShown: false,
          }}
        />

        <stackNavigator.Screen
          name="EditProfile"
          component={EditProfile}
          options={{
            headerShown: false,
          }}
        />
        <stackNavigator.Screen
          name="HelpAndSupport"
          component={HelpAndSupport}
          options={{
            headerShown: false,
          }}
        />
      </stackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
};
