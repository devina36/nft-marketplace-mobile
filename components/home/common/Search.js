import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, TouchableOpacity, TextInput, Image } from 'react-native';

import { icons } from '../../../constant';

const Search = () => {
  const navigation = useNavigation();
  return (
    <View className="w-[278px] h-[50px]  relative">
      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
        className="absolute z-10 left-4 h-full top-[10px]"
      >
        <Image source={icons.search} resizeMode="contain" className=" dark:bg-[#5b5b5b]" />
      </TouchableOpacity>
      <TextInput
        placeholder="Search NFT"
        style={{ fontFamily: 'Regular' }}
        className="bg-[#262626] w-full text-sm rounded-xl pl-12 pr-4 py-[11px] text-white"
        placeholderTextColor="#545454"
      />
    </View>
  );
};

export default Search;
