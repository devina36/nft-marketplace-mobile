import React from 'react';
import { ScrollView, Text, View, ActivityIndicator, Image, TouchableOpacity } from 'react-native';

import useFecth from '../hook/useFetch';

const Details = ({ route }) => {
  const { address, tokenId } = route.params;
  const { data, isLoading, error } = useFecth(`api/v1/asset/${address}/${tokenId}`, { include_orders: 'true' });
  return (
    <View className="bg-[#161616] box-border flex-1 pt-5 px-4">
      <ScrollView showsVerticalScrollIndicator={false}>
        {isLoading ? (
          <ActivityIndicator size="large" color={'#fff'} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <View>
            <Image source={{ uri: data?.image_url }} resizeMode="cover" className=" rounded-xl w-full h-[400px]" />

            <View className="flex flex-row justify-between items-center mt-5">
              <View className="flex flex-row gap-2">
                <View className="w-[42px] h-[42px] rounded-full overflow-hidden">
                  <Image
                    source={{ uri: data?.collection?.image_url }}
                    resizeMode="cover"
                    className="rounded-full w-full h-full"
                  />
                </View>

                <View>
                  <Text className="text-white text-lg font-medium truncate" style={{ fontFamily: 'Medium' }}>
                    {data?.name}
                  </Text>
                  <View className="flex flex-row gap-[2px] items-center">
                    <Text className="text-[#848484]" style={{ fontFamily: 'Regular' }}>
                      Owned by {data?.collection?.name}
                    </Text>
                    {data?.collection?.safelist_request_status === 'verified' && (
                      <Image
                        source={require('../assets/icons/verify.png')}
                        resizeMode="contain"
                        className=" w-[14px] h-[14px]"
                      />
                    )}
                  </View>
                </View>
              </View>

              <TouchableOpacity className=" bg-[#1D1D1D] px-5 py-[6px] rounded-full">
                <Text className="text-white">Follow</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      </ScrollView>

      <View className=" w-full bottom-12 px-5">
        <View className="p-4 bg-[#1d1d1d]/60 flex flex-row border-[#848484] justify-between border-[0.3px] rounded-[20px]">
          <Text>Place Bid</Text>
        </View>
      </View>
    </View>
  );
};

export default Details;
