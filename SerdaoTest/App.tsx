import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screen/homeScreen/HomeScreen';
import TransactionScreen from './src/screen/transactionScreen/TransactionScreen';
import { TransactionProvider } from './src/screen/transactionScreen/TransactionContext';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <TransactionProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Transaction" component={TransactionScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TransactionProvider>
  );
};

export default App;
