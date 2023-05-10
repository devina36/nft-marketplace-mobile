import { useFonts } from 'expo-font';
import Details from './pages/Details';
import Home from './pages/Home';
import Search from './components/home/common/Search';
import Notification from './components/home/common/Notification';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerStyle: { backgroundColor: '#161616' },
            headerShadowVisible: true,
            headerTitle: '',
            navigationBarColor: '#161616',
            headerLeft: () => <Search />,
            headerRight: () => <Notification />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{
            headerStyle: { backgroundColor: '#161616' },
            headerShadowVisible: true,
            headerTitle: 'Details',
            navigationBarColor: '#161616',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
