import axios from 'axios';
import React from 'react';
import { View, TextInput, TouchableOpacity, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import BottomBar from '../components/BottomBar';
import Listing from '../components/Listing';
import Top from '../components/Top';
import { icons } from '../constant';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-[#161616] pt-3 flex-1">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex flex-row justify-between px-5 w-full">
          <View className="w-[278px] h-[50px] relative mr-[18px]">
            <TouchableOpacity
              onPress={() => navigation.navigate('Details')}
              className="absolute z-10 left-4 h-full top-[10px]"
            >
              <Image source={icons.search} resizeMode="contain" className=" dark:bg-[#5b5b5b]" />
            </TouchableOpacity>
            <TextInput
              placeholder="Search NFT"
              style={{ fontFamily: 'Regular' }}
              className="bg-[#262626] w-full text-sm rounded-xl pl-12 pr-4 py-[11px] text-white"
              placeholderTextColor="#545454"
            />
          </View>
          <TouchableOpacity className="bg-[#262626] p-3  rounded-xl w-fit">
            <Image source={icons.notification} resizeMode="contain" className="w-[26px] h-[26px]" />
          </TouchableOpacity>
        </View>

        <Listing />

        <Top />

        <BottomBar />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
