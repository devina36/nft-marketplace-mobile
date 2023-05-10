import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { bottomNav } from '../../constant';
import { BlurView } from '@react-native-community/blur';

const BottomBar = () => {
  const navigation = useNavigation();

  return (
    <View className=" w-full bottom-12 px-5">
      <View className="p-4 bg-[#1d1d1d]/60 flex flex-row border-[#848484] justify-between border-[0.3px] rounded-[20px]">
        {bottomNav.map((item, i) => (
          <TouchableOpacity
            key={i}
            className="w-[43px] flex items-center"
            onPress={() => navigation.navigate('Details')}
          >
            <Image source={item.icon} className=" w-6 h-6" style={item.icon !== 15 && { tintColor: '#848484' }} />
            <Text
              className="text-center text-[#848484] text-[10px] leading-normal mt-1"
              style={{ fontFamily: 'Regular' }}
            >
              {item.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default BottomBar;
