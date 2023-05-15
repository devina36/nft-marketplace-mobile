import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { TouchableOpacity, Image } from 'react-native';

const ButtonBox = ({ icons, handleNavigate }) => {
  return (
    <TouchableOpacity className="bg-[#262626] p-3 rounded-xl w-fit" onPress={handleNavigate}>
      <Image source={icons} resizeMode="contain" className="w-[26px] h-[26px]" />
    </TouchableOpacity>
  );
};

export default ButtonBox;
