import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/HomeScreen';
import CatalogScreen from './screens/CatalogScreen';
import MoreInformationScreen from './screens/MoreInformationScreen';
import UserScreen from './screens/UserScreen';
import CarDetails from './screens/CarDetails';

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
                                // Denne her lille if-else statement kontrollere vores icons
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
        })} //Det her er styling til vores nav-basr i bunden
        tabBarOptions={{
          activeTintColor: '#1EA896',
          inactiveTintColor: 'grey',
          labelStyle: { paddingBottom: 10, fontSize: 10 },
          style: { padding: 10, height: 60 }
        }
        // Det her er vores navbar links, hvis man kan kalde det
        }> 
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={catalogName} component={CatalogStackScreen} />
        <Tab.Screen name={moreName} component={MoreInformationScreen} />
        <Tab.Screen name={userName} component={UserScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Create a Stack Navigator for CatalogScreen and CarDetails
const CatalogStack = createStackNavigator();

function CatalogStackScreen() {
  return (
    <CatalogStack.Navigator>
      <CatalogStack.Screen name="ItemList" component={CatalogScreen} options={{ title: 'Car List'}} />
      <CatalogStack.Screen name="CarDetails" component={CarDetails} options={{ title: 'Car Details'}} />
    </CatalogStack.Navigator>
  );
}

export default MainContainer;