import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BookList from '@app/screens/Library';
import BookDetail from '@app/screens/BookDetail';
import Settings from '@app/screens/Settings';
import { LibraryStackParamList, TabBarParamList } from '@interfaces/navigation';
import TabBar from '@components/AppNavigator/TabBar';

const Tab = createBottomTabNavigator<TabBarParamList>();
const LibraryStack = createStackNavigator<LibraryStackParamList>();

const Library = () => (
  <LibraryStack.Navigator>
    <LibraryStack.Screen name="BookList" component={BookList} />
    <LibraryStack.Screen name="BookDetail" component={BookDetail} />
  </LibraryStack.Navigator>
);

function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => <TabBar focused={focused} route={route} />
        })}>
        <Tab.Screen name="Library" component={Library} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
