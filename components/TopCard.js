import React from 'react';
import { Image, View, Text } from 'react-native';

const TopCard = ({ item }) => {
  return (
    <View className="rounded-xl bg-[#1d1d1d] w-[118px] h-[145px] py-4 px-3 flex items-center">
      <View className="relative mb-3">
        <View className="rounded-full overflow-hidden">
          <Image source={{ uri: item.node.imageUrl }} resizeMode="cover" className="w-[50px] h-[50px] rounded-full" />
        </View>
        {item.node.isVerified === true ? (
          <Image
            source={require('../assets/icons/isVerify.png')}
            resizeMode="contain"
            className="absolute bottom-0 right-0 w-[14px] h-[14px]"
          />
        ) : (
          ''
        )}
      </View>

      <Text className=" text-center text-sm mb-[4px]" style={{ fontFamily: 'Medium' }}>
        {item?.node.name}
      </Text>
      <Text className="text-[#7f7f7f] text-xs" style={{ fontFamily: 'Medium' }}>
        {Math.ceil(item?.node.statsV2.totalVolume.eth / 1000)}K ETH
      </Text>
    </View>
  );
};

export default TopCard;
