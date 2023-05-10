import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Image, ImageBackground, TouchableOpacity } from 'react-native';
import CountDown from 'react-native-countdown-component';

const LiveCard = ({ item }) => {
  // const time = Date.now(0).toString().slice(0, 10);
  // const now = parseInt(item.expiration_time) - parseInt(time);
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      className="relative rounded-xl overflow-hidden"
      onPress={() => {
        navigation.navigate({
          name: 'Details',
          params: {
            address: item?.maker_asset_bundle?.assets[0]?.asset_contract?.address,
            tokenId: item?.maker_asset_bundle?.assets[0]?.token_id,
          },
        });
      }}
    >
      <Image
        source={{ uri: `${item?.maker_asset_bundle?.assets[0]?.image_url}` }}
        resizeMode="cover"
        className=" rounded-xl w-[280px] h-[400px]"
      />
      <View className='absolute w-fit"'>
        {/* <View className="bg-white/20 rounded-full" blurRadius={19}>
          <CountDown
            until={now}
            onFinish={() => alert('Finished')}
            digitStyle={{ backgroundColor: 'transparent' }}
            digitTxtStyle={{ color: '#fff' }}
            separatorStyle={{ color: '#fff' }}
            timeToShow={['D', 'H', 'M', 'S']}
            timeLabels={{ d: null, h: null, m: null, s: null }}
            showSeparator
          />
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default LiveCard;
