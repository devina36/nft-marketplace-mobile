import { useRoute } from '@react-navigation/native';
import React from 'react';
import { ScrollView, Text, View, ActivityIndicator, Image } from 'react-native';
import useFecth from '../hook/useFetch';

const Details = ({ route }) => {
  const { address, tokenId } = route.params;
  const { data, isLoading, error } = useFecth(`api/v1/asset/${address}/${tokenId}`, { include_orders: 'true' });
  return (
    <ScrollView className="bg-[#161616] box-border flex-1 pt-5 px-4">
      {isLoading ? (
        <ActivityIndicator size="large" color={'#fff'} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <Image source={{ uri: data?.image_url }} resizeMode="cover" className=" rounded-xl w-full h-[400px]" />
      )}
    </ScrollView>
  );
};

export default Details;
