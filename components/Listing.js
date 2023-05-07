import React from 'react';
import { View, Text, TouchableOpacity, ActivityIndicator, FlatList } from 'react-native';
import useFecth from '../hook/useFetch';
import LiveCard from './LiveCard';

const Listing = () => {
  const { data, isLoading, error } = useFecth('v2/orders/ethereum/seaport/listings', {
    limit: '10',
    order_by: 'created_date',
    order_direction: 'desc',
  });
  return (
    <View>
      <View className="flex justify-between items-center flex-row mt-5 px-5">
        <Text className=" text-xl leading-[1.5] text-white" style={{ fontFamily: 'Medium' }}>
          Live Bids
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
            data={data.orders}
            renderItem={({ item }) => <LiveCard item={item} />}
            keyExtractor={(item) => item.relay_id}
            contentContainerStyle={{ columnGap: 20 }}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Listing;
