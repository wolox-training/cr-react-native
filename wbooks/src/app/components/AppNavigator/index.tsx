import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Library from '@app/screens/Library';
import BookDetail from '@app/screens/BookDetail';
import { LibraryStackParamList } from '@interfaces/navigation';
import Header from '@components/Header';
import Back from '@components/Back';
import Notification from '@components/Notification';
import Search from '@components/Search';

const LibraryStack = createStackNavigator<LibraryStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <LibraryStack.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: 'white'
          }
        }}>
        <LibraryStack.Screen
          name="Library"
          component={Library}
          options={{
            title: 'LIBRARY',
            headerTitleAlign: Platform.OS === 'ios' ? 'center' : 'left',
            headerBackground: () => <Header />,
            headerLeft: () => <Notification />,
            headerRight: () => <Search />
          }}
        />
        <LibraryStack.Screen
          name="BookDetail"
          component={BookDetail}
          options={({ navigation }) => ({
            title: 'BOOK DETAIL',
            headerTitleAlign: Platform.OS === 'ios' ? 'center' : 'left',
            headerBackground: () => <Header />,
            headerLeft: () => <Back goLibrary={() => navigation.navigate('Library')} />
          })}
        />
      </LibraryStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
