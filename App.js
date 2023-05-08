/* import { View, Text, StyleSheet, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import Video from 'react-native-video';
import { Video_1, Video_2 } from './Videos/ReelsVideos'


const App = () => {

  const data = [
    { id: 1, video: Video_1 },
    { id: 2, video: Video_2 },
    { id: 3, video: Video_1 },
    { id: 4, video: Video_2 },
    { id: 5, video: Video_1 },
    { id: 6, video: Video_2 },
  ]
  return (
    <ScrollView ref={ref => { }}
      horizontal={false}
      automaticallyAdjustContentInsets={true}
      onMomentumScrollEnd={() => { }}
      contentContainerStyle={{ flexGrow: 1 }}
      style={{ height: '100%' }}
      onContentSizeChange={() => { }}
      pagingEnabled={true}
    >
      {data.map((value, index) => (
        <View
          key={index}
          style={styles.videoView} >
          <Video
            source={value?.video}
            ref={(ref) => {

            }}
            resizeMode="stretch"
            repeat={true}
            onBuffer={() => { }}
            onError={() => { }}
            controls={true}
            style={styles.videoStyle} />
        </View >
      ))}
    </ScrollView>
  )
}

var styles = StyleSheet.create({
  videoView: {
    // flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    backgroundColor: '#000000',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  videoStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});

export default App
 */


import React, { Fragment } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './Navigation/StackNavigation';

const App = () => {

  return (
    <NavigationContainer>
      <StackNavigation />
    </NavigationContainer>
  );
};

export default App;
