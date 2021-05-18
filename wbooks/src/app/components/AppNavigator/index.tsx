import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Library from '@app/screens/Library';
import BookDetail from '@app/screens/BookDetail';
import { LibraryStackParamList } from '@interfaces/navigation';

const LibraryStack = createStackNavigator<LibraryStackParamList>();

function AppNavigator() {
  return (
    <NavigationContainer>
      <LibraryStack.Navigator>
        <LibraryStack.Screen name="Library" component={Library} />
        <LibraryStack.Screen name="BookDetail" component={BookDetail} />
      </LibraryStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
