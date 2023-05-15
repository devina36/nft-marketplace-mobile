import { useFonts } from 'expo-font';
import Details from './pages/Details';
import Home from './pages/Home';
import Search from './components/home/common/Search';
import ButtonBox from './components/ButtonBox';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { icons } from './constant';

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
            headerRight: () => <ButtonBox icons={icons.notification} />,
          }}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={({ navigation }) => ({
            headerStyle: { backgroundColor: '#161616' },
            headerShadowVisible: true,
            headerTitle: 'NFT Details',
            headerTitleStyle: { color: '#fff', fontFamily: 'SemiBold', fontSize: 20 },
            headerTitleAlign: 'center',
            navigationBarColor: '#161616',
            headerLeft: () => <ButtonBox icons={icons.back} handleNavigate={() => navigation.goBack()} />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
