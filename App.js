import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from 'C:/Users/Gabriel/Desktop/splitBillApp/screens/Home';
import ReportScreen from 'C:/Users/Gabriel/Desktop/splitBillApp/screens/Report';
import StatsScreen from 'C:/Users/Gabriel/Desktop/splitBillApp/screens/Stats';
import ExpenseScreen from 'C:/Users/Gabriel/Desktop/splitBillApp/screens/Expense';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Expense" component={ExpenseScreen} />
        <Stack.Screen name="Stats" component={StatsScreen} />
        <Stack.Screen name="Report" component={ReportScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
