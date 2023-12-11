import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Signin from './Signin';
import Signup from './Signup';
import ForgetPassword from './ForgetPassword';
import Verification from './Verification';
import ChangePassword from './ChangePassword';
import PasswordChanged from './PasswordChanged';

const Stack = createNativeStackNavigator();

function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home}
          options={{ headerShown: false }} />
        <Stack.Screen name="Signup" component={Signup}
          options={{ headerShown: false }} />
        <Stack.Screen name="Signin" component={Signin}
          options={{ headerShown: false }} />
        <Stack.Screen name="ForgetPassword" component={ForgetPassword}
          options={{ headerShown: false }} />
        <Stack.Screen name="Verification" component={Verification}
          options={{ headerShown: false }} />
        <Stack.Screen name="ChangePassword" component={ChangePassword}
          options={{ headerShown: false }} />
        <Stack.Screen name="PasswordChanged" component={PasswordChanged}
          options={{ headerShown: false }} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;