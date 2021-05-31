import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@app/screens/Login';
import BookList from '@app/screens/Library';
import BookDetail from '@app/screens/BookDetail';
import Settings from '@app/screens/Settings';
import { LibraryStackParamList, TabBarParamList } from '@interfaces/navigation';
import TabBar from '@components/AppNavigator/TabBar';
import Header from '@components/Header';
import IconHeader from '@app/components/Header/components/IconHeader';
import icSearch from '@assets/NavigationBar/ic_search.png';
import icBack from '@assets/NavigationBar/ic_back.png';
import icNotification from '@assets/NavigationBar/ic_notifications.png';

const Tab = createBottomTabNavigator<TabBarParamList>();
const LibraryStack = createStackNavigator<LibraryStackParamList>();

const Library = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => <TabBar focused={focused} route={route} />
    })}>
    <Tab.Screen name="BookList" component={BookList} />
    <Tab.Screen name="Settings" component={Settings} />
  </Tab.Navigator>
);

function AppNavigator() {
  return (
    <NavigationContainer>
      <LibraryStack.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: 'white'
          }
        }}>
        <LibraryStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <LibraryStack.Screen
          name="Library"
          component={Library}
          options={{
            title: 'LIBRARY',
            headerTitleAlign: Platform.OS === 'ios' ? 'center' : 'left',
            headerBackground: () => <Header />,
            headerLeft: () => <IconHeader icon={icNotification} right={false} />,
            headerRight: () => <IconHeader icon={icSearch} />
          }}
        />
        <LibraryStack.Screen
          name="BookDetail"
          component={BookDetail}
          options={({ navigation }) => ({
            title: 'BOOK DETAIL',
            headerTitleAlign: Platform.OS === 'ios' ? 'center' : 'left',
            headerBackground: () => <Header />,
            headerLeft: () => (
              <IconHeader icon={icBack} right={false} onPressIcon={() => navigation.goBack()} />
            )
          })}
        />
      </LibraryStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
