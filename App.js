import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Homepage from './src/homepage';
import Categorypage from './src/categorypage';
import Productdetailpage from './src/productdetailpage';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Homepage"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Homepage} />
        <Stack.Screen name="Categorypage" component={Categorypage} />
        <Stack.Screen name="Productdetailpage" component={Productdetailpage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
