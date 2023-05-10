import React from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from '../components/home/BottomBar';
import Listing from '../components/home/Listing';
import Top from '../components/home/Top';

const Home = () => {
  return (
    <View className="bg-[#161616] flex-1 justify-center pt-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* <View className="flex flex-row justify-between px-5 w-full">
          
        </View> */}
        <Listing />
        <Top />
      </ScrollView>

      <BottomBar />
    </View>
  );
};
export default Home;
