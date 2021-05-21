import React from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Library from '@app/screens/Library';
import BookDetail from '@app/screens/BookDetail';
import { LibraryStackParamList } from '@interfaces/navigation';
import Header from '@components/Header';
import Back from '@components/Back';
import IconHeader from '@app/components/Header/components/IconHeader';
import icSearch from '@assets/NavigationBar/ic_search.png';
import icNotification from '@assets/NavigationBar/ic_notifications.png';

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
            headerLeft: () => <Back goLibrary={() => navigation.navigate('Library')} />
          })}
        />
      </LibraryStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
