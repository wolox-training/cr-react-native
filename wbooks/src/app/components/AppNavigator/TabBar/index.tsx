import React, { useState, useEffect } from 'react';
import { View, Image } from 'react-native';
import { TabBarParamList } from '@interfaces/navigation';
import { RouteProp } from '@react-navigation/native';
import icLibrary from '@assets/ToolBar/ic_library.png';
import icLibraryActive from '@assets/ToolBar/ic_library_active.png';
import icSettings from '@assets/ToolBar/ic_settings.png';
import icSettingsActive from '@assets/ToolBar/ic_settings_active.png';

type TabBarRouteProp = RouteProp<TabBarParamList, keyof TabBarParamList>;

interface Props {
  route: TabBarRouteProp;
  focused: boolean;
}

const TabBar = ({ focused, route }: Props) => {
  const [image, setImage] = useState(icLibrary);
  const [imageActive, setImageActive] = useState(icLibraryActive);

  const setImageWithRoute = () => {
    switch (route.name) {
      case 'Library':
        setImage(icLibrary);
        setImageActive(icLibraryActive);
        break;
      case 'Settings':
        setImage(icSettings);
        setImageActive(icSettingsActive);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    setImageWithRoute();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <View>
      <Image source={focused ? imageActive : image} />
    </View>
  );
};

export default TabBar;
