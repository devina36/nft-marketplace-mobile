import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, Image, FlatList, ActivityIndicator, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import LiveCard from '../components/LiveCard';
import { icons } from '../constant';
import useFecth from '../hook/useFetch';

const Home = ({ navigation }) => {
  const { data, isLoading, error } = useFecth('v2/orders/ethereum/seaport/listings', {
    limit: '10',
    order_by: 'created_date',
    order_direction: 'desc',
  });

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
              className="bg-[#262626] text-red-300 w-full text-sm rounded-xl pl-12 pr-4 py-[11px] placeholder:text-white"
            />
          </View>
          <TouchableOpacity className="bg-[#262626] p-3  rounded-xl w-fit">
            <Image source={icons.notification} resizeMode="contain" className="w-[26px] h-[26px]" />
          </TouchableOpacity>
        </View>

        <View className="pl-5 py-5">
          {isLoading ? (
            <ActivityIndicator size="large" color={'#fff'} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : (
            <FlatList
              data={data.orders}
              renderItem={({ item }) => <LiveCard item={item} />}
              keyExtractor={(item) => item.relay_id}
              contentContainerStyle={{ columnGap: 20 }}
              horizontal
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
