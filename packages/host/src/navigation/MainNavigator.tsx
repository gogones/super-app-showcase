import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BookingScreen from '../screens/BookingScreen';
import NewsScreen from '../screens/NewsScreen';
import ShoppingScreen from '../screens/ShoppingScreen';
import DashboardScreen from '../screens/DashboardScreen';
import ServicesNavigator from './ServicesNavigator';
import AccountNavigator from './AccountNavigator';

export type MainStackParamList = {
  Service: undefined;
  Booking: undefined;
  Shopping: undefined;
  News: undefined;
  Dashboard: undefined;
  Account: undefined;
};

const Main = createNativeStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <Main.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Main.Screen name="Service" component={ServicesNavigator} />
      <Main.Screen name="Account" component={AccountNavigator} />

      <Main.Screen name="Booking" component={BookingScreen} />
      <Main.Screen name="Shopping" component={ShoppingScreen} />
      <Main.Screen name="News" component={NewsScreen} />
      <Main.Screen name="Dashboard" component={DashboardScreen} />
    </Main.Navigator>
  );
};

export default MainNavigator;
