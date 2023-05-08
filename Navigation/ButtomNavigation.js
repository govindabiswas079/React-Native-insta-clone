import React, { Fragment } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Home from '../src/components/screens/Home';
import Search from '../src/components/screens/Search';
import Reels from '../src/components/screens/Reels';
import Activity from '../src/components/screens/Activity';
import Profile from '../src/components/screens/Profile';

const Tab = createBottomTabNavigator();
const ButtomNavigation = () => {

  return (
    <Fragment>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
          tabBarInactiveTintColor: '#67748E',
          tabBarActiveTintColor: '#4646F2',
          tabBarStyle: { borderTopLeftRadius: 10, borderTopRightRadius: 10, paddingTop: 10, paddingBottom: 10, height: 65, backgroundColor: '#FFFFFF', },
          tabBarHideOnKeyboard: true,
          tabBarVisible: true,
          tabBarShowLabel: false,
          safeAreaInset: {
            bottom: "always"
          },
          headerShown: false,
        }}
      >

        <Tab.Screen
          name="HomeScreen"
          component={Home}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <>
                {!focused ?
                  <MaterialCommunityIcons name="view-dashboard-outline" color={color} size={20} />
                  :
                  <MaterialIcons name="dashboard" color={color} size={20} />
                }
              </>
            ),
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={Search}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={!focused ? "search-circle-outline" : "search-circle"} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="ReelsScreen"
          component={Reels}
          tabBarVisible={false}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={!focused ? "videocam-outline" : "videocam"} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="ActivityScreen"
          component={Activity}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <Ionicons name={!focused ? "heart-outline" : "heart"} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="ProfileScreen"
          component={Profile}
          options={{
            tabBarLabelStyle: {
              fontFamily: 'OpenSans-Regular', fontSize: 12
            },
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, focused }) => (
              <FontAwesome name={!focused ? "user-circle" : "user-circle-o"} color={color} size={20} />
            ),
          }}
        />


      </Tab.Navigator>
    </Fragment>
  )
}

export default ButtomNavigation