import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BookList from '@screens/Library';
import BookDetail from '@screens/BookDetail';
import SearchFilter from '@screens/SearchFilter';
import Settings from '@screens/Settings';
import { LibraryStackParamList, TabBarParamList } from '@interfaces/navigation';
import TabBar from '@components/AppNavigator/TabBar';
import Header from '@components/Header';
import IconHeader from '@components/Header/components/IconHeader';
import icSearch from '@assets/NavigationBar/ic_search.png';
import icBack from '@assets/NavigationBar/ic_back.png';
import icNotification from '@assets/NavigationBar/ic_notifications.png';

const Tab = createBottomTabNavigator<TabBarParamList>();
const LibraryStack = createStackNavigator<LibraryStackParamList>();

const Library = () => (
  <LibraryStack.Navigator
    screenOptions={{
      headerTitleStyle: {
        color: 'white'
      }
    }}>
    <LibraryStack.Screen
      name="BookList"
      component={BookList}
      options={({ navigation }) => ({
        title: 'LIBRARY',
        headerTitleAlign: Platform.OS === 'ios' ? 'center' : 'left',
        headerBackground: () => <Header />,
        headerLeft: () => <IconHeader icon={icNotification} right={false} />,
        headerRight: () => (
          <IconHeader icon={icSearch} onPressIcon={() => navigation.navigate('SearchFilter')} />
        )
      })}
    />
    <LibraryStack.Screen
      name="BookDetail"
      component={BookDetail}
      options={({ navigation }) => ({
        title: 'BOOK DETAIL',
        headerTitleAlign: Platform.OS === 'ios' ? 'center' : 'left',
        headerBackground: () => <Header />,
        headerLeft: () => (
          <IconHeader icon={icBack} right={false} onPressIcon={() => navigation.navigate('BookList')} />
        )
      })}
    />
    <LibraryStack.Screen
      name="SearchFilter"
      component={SearchFilter}
      options={({ route }) => ({
        header: () => <Header routeName={route.name} />
      })}
    />
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
