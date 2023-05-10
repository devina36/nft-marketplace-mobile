import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { icons } from '../../../constant';

const Notification = () => {
  return (
    <TouchableOpacity className="bg-[#262626] p-3 rounded-xl w-fit">
      <Image source={icons.notification} resizeMode="contain" className="w-[26px] h-[26px]" />
    </TouchableOpacity>
  );
};

export default Notification;
