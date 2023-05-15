import React from 'react';

export const Route = () => {
  return (
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
        options={{
          headerStyle: { backgroundColor: '#161616' },
          headerShadowVisible: true,
          headerTitle: 'NFT Details',
          headerTitleStyle: { color: '#fff', fontFamily: 'SemiBold', fontSize: 20 },
          headerTitleAlign: 'center',
          navigationBarColor: '#161616',
        }}
      />
    </Stack.Navigator>
  );
};
