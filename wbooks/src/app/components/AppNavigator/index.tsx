import React, { useEffect } from 'react';
import { Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import BookList from '@screens/Library';
import BookDetail from '@screens/BookDetail';
import SearchFilter from '@screens/SearchFilter';
import Settings from '@screens/Settings';
import Login from '@app/screens/Login';
import { LibraryStackParamList, TabBarParamList } from '@interfaces/navigation';
import TabBar from '@components/AppNavigator/TabBar';
import Header from '@components/Header';
import IconHeader from '@components/Header/components/IconHeader';
import icSearch from '@assets/NavigationBar/ic_search.png';
import icBack from '@assets/NavigationBar/ic_back.png';
import icLogout from '@assets/NavigationBar/ic_logout.png';
import { useSelector, useDispatch } from 'react-redux';
import actionCreators from '@redux/auth/actions';
import Reactotron from 'reactotron-react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getCurrentUser } from '@services/AuthService';

interface RootState {
  auth: { responseAPI: Object; responseAPILoading: boolean; currentUser: string };
}

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
  const dispatch = useDispatch();

  const { responseAPI, responseAPILoading, currentUser } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const getUser = async () => {
      const user = await getCurrentUser();
      dispatch(actionCreators.setCurrentUser(user));
    };

    getUser();
  }, [dispatch, responseAPI]);

  const LoginWithLoading = () => <Login isLoading={responseAPILoading} />;

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('authData');
      dispatch(actionCreators.setCurrentUser(null));
    } catch (e) {
      if (__DEV__) Reactotron.log(e);
    }
  };

  return (
    <NavigationContainer>
      <LibraryStack.Navigator
        screenOptions={{
          headerTitleStyle: {
            color: 'white'
          }
        }}>
        {currentUser ? (
          <>
            <LibraryStack.Screen
              name="Library"
              component={Library}
              options={({ navigation }) => ({
                title: 'LIBRARY',
                headerTitleAlign: Platform.OS === 'ios' ? 'center' : 'left',
                headerBackground: () => <Header />,
                headerLeft: () => <IconHeader icon={icLogout} right={false} onPressIcon={logout} />,
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
                  <IconHeader
                    icon={icBack}
                    right={false}
                    onPressIcon={() => navigation.navigate('BookList')}
                  />
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
          </>
        ) : (
          <LibraryStack.Screen name="Login" component={LoginWithLoading} options={{ headerShown: false }} />
        )}
      </LibraryStack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
