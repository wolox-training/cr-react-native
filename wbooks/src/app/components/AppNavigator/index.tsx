import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '@app/screens/Login';
import Library from '@app/screens/Library';
import BookDetail from '@app/screens/BookDetail';
import { LibraryStackParamList } from '@interfaces/navigation';

const LibraryStack = createStackNavigator<LibraryStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <LibraryStack.Navigator>
        <LibraryStack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <LibraryStack.Screen name="Library" component={Library} />
        <LibraryStack.Screen name="BookDetail" component={BookDetail} />
      </LibraryStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
