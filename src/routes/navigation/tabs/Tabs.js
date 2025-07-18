import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome'
import { colors } from 'theme'



// stack navigators
import { HomeStacks } from '../stacks/HomeStacks'
import { ProfileStacks } from '../stacks/ProfileStacks'
import { ReadWriteStacks } from '../stacks/ReadWriteStacks'
import { PlayStacks } from '../stacks/PlayStacks'
import { SearchStacks } from '../stacks/SearchStacks'

const Tab = createBottomTabNavigator()

export default function TabNavigator() {
  return (
    <Tab.Navigator
      options={{
        tabBarActiveTintColor: colors.lightPurple,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          // backgroundColor: 'white',
          // borderTopColor: 'gray',
          // borderTopWidth: 1,
          // paddingBottom: 5,
          // paddingTop: 5,
        }
      }}
      defaultScreenOptions={{
        headerShown:false,
        headerTransparent:true
      }}
      screenOptions={({ route }) => ({
        headerShown: false,
      })}
      initialRouteName="HomeTab"
      swipeEnabled={false}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeStacks}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <FontIcon
              name="home"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ProfileTab"
        component={ProfileStacks}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <FontIcon
              name="user"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="ReadWriteTab"
        component={ReadWriteStacks}
        options={{
          tabBarLabel: 'R/W',
          tabBarIcon: ({ color, size }) => (
            <FontIcon
              name="address-card"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="PlayTab"
        component={PlayStacks}
        options={{
          tabBarLabel: 'Play',
          tabBarIcon: ({ color, size }) => (
            <FontIcon
              name="play-circle"
              color={color}
              size={size}
            />
          ),
        }}
      />

      <Tab.Screen
        name="SearchTab"
        component={SearchStacks}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color, size }) => (
            <FontIcon
              name="search"
              color={color}
              size={size}
            />
          ),
        }}
      />


    </Tab.Navigator>
  )
}
