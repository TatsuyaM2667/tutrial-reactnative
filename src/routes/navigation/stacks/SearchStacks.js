import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationProps } from './navigationProps/navigationProps'
import GradientHeader from '../../../components/GradientHeader';
import Search from '../../../scenes/search/Search'
import Sneakers from '../../../scenes/sneakers/Sneakers'
import Information from '../../../scenes/information/Information'


const Stack = createStackNavigator()

export const SearchStacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="Search"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="Search"
        component={Search}
      
        options={({ navigation }) => ({
          title: 'Search',
          headerShown: true,
          headerBackTitleVisible: true,
          headerBackground: () => <GradientHeader />,
        })}
      />
      <Stack.Screen
        name="Sneakers"
        component={Sneakers}
        options={({ navigation }) => ({
          title: 'Sneakers',
          headerShown: true,
          headerBackTitleVisible: true,
          headerBackground: () => <GradientHeader />,
        })}
      />
            <Stack.Screen
        name="Information"
        component={Information}
        options={({ navigation }) => ({
          title: 'Information',
          headerShown: true,
          headerBackTitleVisible: true,
          headerBackground: () => <GradientHeader />,
        })}
      />

        
    </Stack.Navigator>
  )
}