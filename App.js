import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import Details from './pages/Details';
import Home from './pages/Home';
import * as SplashScreen from 'expo-splash-screen';
import { SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Regular: require('./assets/font/Poppins-Regular.ttf'),
    Medium: require('./assets/font/Poppins-Medium.ttf'),
    SemiBold: require('./assets/font/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
