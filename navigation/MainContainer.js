import * as React from 'react';

import {NavigationContainer} from '@react-navigation/native'; // npm install @react-navigation/native
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './screens/HomeScreen';
import CatalogScreen from './screens/CatalogScreen';
import MoreInformationScreen from './screens/MoreInformationScreen';
import SearchScreen from './screens/SearchScreen';
import UserScreen from './screens/UserScreen';

const homeName = 'Home';
const moreName = 'More';
const catalogName = 'Catalog';
const searchName = 'Search'
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
              } else if (rn === searchName) {
                iconName = focused ? 'search' : 'search';
              } else if (rn === userName) {
                iconName = focused ? 'person' : 'person';
              }
              
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          
          tabBarOptions={{
            activeTintColor: '#1EA896',
            inactiveTintColor: 'grey',
            labelStyle: { paddingBottom: 10, fontSize: 10 },
            style: { padding: 10, height: 60}
          }}>
  
          <Tab.Screen name={homeName} component={HomeScreen} />
          <Tab.Screen name={catalogName} component={CatalogScreen} />
          <Tab.Screen name={searchName} component={SearchScreen} />
          <Tab.Screen name={moreName} component={MoreInformationScreen} />
          <Tab.Screen name={userName} component={UserScreen} />
          
          </Tab.Navigator>

        </NavigationContainer>
    )
}

export default MainContainer;