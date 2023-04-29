import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import CountDown from 'react-native-countdown-component';

const LiveCard = ({ item }) => {
  const time = Date.now(0).toString().slice(0, 10);
  const now = parseInt(item.expiration_time) - parseInt(time);

  const backdrop = StyleSheet.create({
    blur: {},
  });

  return (
    <View className="relative rounded-xl ">
      <Image
        source={{ uri: `${item.maker_asset_bundle.assets[0].image_url}` }}
        resizeMode="cover"
        className=" rounded-xl w-[280px] h-[400px]"
      />
      <View className='absolute w-fit"'>
        <Text className="text-red-600">{item.closing_date}</Text>

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
    </View>
  );
};

export default LiveCard;
