import React, { useLayoutEffect } from 'react';
import { View, Text, Dimensions, StatusBar } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import ReelsComponent from '../screenComponents/ReelsComponent';
import { useNavigation, getFocusedRouteNameFromRoute } from '@react-navigation/native';

const Reels = ({ navigation, route }) => {
  const Navigation = useNavigation()
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log(route)
    if (routeName === "Group") {
      navigation.setOptions({ tabBarVisible: false });
    } else {
      navigation.setOptions({ tabBarVisible: true });
    }
  }, [navigation, route]);

  return (
    <View
      style={{
        width: windowWidth,
        height: windowHeight,
        backgroundColor: 'white',
        position: 'relative',
        backgroundColor: 'black',
      }}>
      <StatusBar barStyle={'light-content'} backgroundColor={"#000000"} />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
          zIndex: 1,
          padding: 10,
        }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>
          Reels
        </Text>
        <Feather name="camera" style={{ fontSize: 25, color: 'white' }} />
      </View>
      <ReelsComponent />
    </View>
  );
};

export default Reels;
