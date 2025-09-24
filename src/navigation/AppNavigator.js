import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import CartScreen from '../screens/CartScreen';

const Stack = createNativeStackNavigator();
const AppNavigator = () => {

   const screenOptions = {
    header: () => null,
  };
  return (
    <NavigationContainer >
      <Stack.Navigator 
      screenOptions={screenOptions}
      initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
        <Stack.Screen name="CartScreen" component={CartScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
