import React from 'react';
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import topChard from '../hook/topChard';
import useFecth from '../hook/useFetch';
import TopCard from './TopCard';

const Top = () => {
  const { data, isLoading, error } = topChard();

  return (
    <View>
      <View className="flex justify-between items-center flex-row mt-5 px-5">
        <Text className=" text-xl leading-[1.5] text-white" style={{ fontFamily: 'Medium' }}>
          Top Creator
        </Text>
        <TouchableOpacity>
          <Text className="text-xs leading-[1.5] text-[#848484]" style={{ fontFamily: 'Regular' }}>
            See More
          </Text>
        </TouchableOpacity>
      </View>
      <View className="mt-3 pl-5">
        {isLoading ? (
          <ActivityIndicator size="large" color={'#fff'} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={data.data.rankings.edges}
            renderItem={({ item }) => <TopCard item={item} />}
            keyExtractor={(item) => item.node.id}
            contentContainerStyle={{ columnGap: 20 }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Top;
