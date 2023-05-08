import React, { Fragment } from 'react';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import ButtomNavigation from './ButtomNavigation';
import { forSlideAnimate, configAnimate } from './NavigationAnimate';
import Stories from '../src/components/screenComponents/Stories';
import Status from '../src/components/screenComponents/Status';
import FriendProfile from '../src/components/screenComponents/FriendProfile';
import EditProfile from '../src/components/screenComponents/EditProfile';

const Stack = createStackNavigator();
const StackNavigation = () => {

  return (
    <Fragment>
      <Stack.Navigator screenOptions={{ headerShown: false, transitionSpec: { open: configAnimate, close: configAnimate }, cardStyleInterpolator: forSlideAnimate, /* presentation: 'modal', headerShown: false, gestureDirection: 'horizontal', cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS, gestureEnabled: false, */ }}>
        <Stack.Screen name='ButtomNavigation' component={ButtomNavigation} />
        <Stack.Screen name='Stories' component={Stories} />
        <Stack.Screen name='Status' component={Status} />
        <Stack.Screen name='FriendProfile' component={FriendProfile} />
        <Stack.Screen name='EditProfile' component={EditProfile} />

      </Stack.Navigator>
    </Fragment>
  )
}

export default StackNavigation