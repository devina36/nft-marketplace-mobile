import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { bottomNav } from '../constant';

const BottomBar = () => {
  return (
    <ScrollView className=" w-full bottom-0 px-5">
      <View className="p-4 bg-gray-800 border-white flex flex-row justify-between border-[1px] rounded-[20px]">
        {bottomNav.map((item, i) => (
          <TouchableOpacity key={i} className="w-[43px] flex items-center">
            <Image source={item.icon} className=" w-6 h-6" />
            <Text className="text-center text-[10px] leading-normal mt-1" style={{ fontFamily: 'Regular' }}>
              {item.text}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default BottomBar;
