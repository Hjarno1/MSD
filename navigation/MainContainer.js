import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import SignScreen from './screens/SignScreen';
import CatalogScreen from './screens/CatalogScreen';
import MoreInformationScreen from './screens/MoreInformationScreen';
import UserScreen from './screens/UserScreen';
import CarDetails from './screens/CarDetails';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import GuestScreen from './screens/GuestScreen';
import PersonalScreen from './screens/PersonalScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import PreviousRentScreen from './screens/PreviousRentScreen';
import NewHomeScreen from './screens/NewHomeScreen'

const homeName = 'Home';
const moreName = 'More';
const catalogName = 'Catalog';
const userName = 'User';

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';
            } else if (rn === moreName) {
              iconName = focused ? 'information-circle' : 'information-circle-outline';
            } else if (rn === catalogName) {
              iconName = focused ? 'book' : 'book-outline';
            }  else if (rn === userName) {
              iconName = focused ? 'person' : 'person';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#003459',
          inactiveTintColor: 'white',
          activeBackgroundColor: '#007EA7',
          inactiveBackgroundColor: '#007EA7',
          labelStyle: { paddingBottom: 10, fontSize: 10},
          style: { padding: 10, height: 60},
        }}
      >
        <Tab.Screen name={homeName} component={NewHomeScreen} />
        <Tab.Screen name={catalogName} component={CatalogStackScreen} />
        <Tab.Screen name={moreName} component={MoreInformationScreen} />
        <Tab.Screen name={userName} component={UserStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Create a Stack Navigator for CatalogScreen and CarDetails
const CatalogStack = createStackNavigator();

function CatalogStackScreen() {
  return (
    <CatalogStack.Navigator>
      <CatalogStack.Screen name="ItemList" component={CatalogScreen} options={{ title: 'Item List', headerShown: false }} />
      <CatalogStack.Screen name="CarDetails" component={CarDetails} options={{ title: 'Car Details' }} />
    </CatalogStack.Navigator>
  );
}


const userStack = createStackNavigator();

function UserStackScreen() {
  return (
    <userStack.Navigator>
      <userStack.Screen name="UserScreen" component={UserScreen} options={{ headerShown: false}}/>
      <userStack.Screen name="PersonalScreen" component={PersonalScreen} options={{ }}/>
      <userStack.Screen name="ChangePasswordScreen" component={ChangePasswordScreen} options={{ }}/>
      <userStack.Screen name="PreviousRentScreen" component={PreviousRentScreen} options={{ }}/>
      <userStack.Screen name="SignScreen" component={SignScreen} options={{ headerShown: false}}/>
      <userStack.Screen name="SignInScreen" component={SignInScreen} options={{}}/>
      <userStack.Screen name="SignUpScreen" component={SignUpScreen} options={{}}/>
      <userStack.Screen name="GuestScreen" component={GuestScreen}  options={{ }}/>
      {/* Add any other screens related to authentication here if needed */}
    </userStack.Navigator>
  );
}


export default MainContainer;