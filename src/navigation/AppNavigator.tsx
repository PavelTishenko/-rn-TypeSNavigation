import React, { FC } from 'react'
// Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { FirstScreen } from '../screen/FirstScreen'
import { SecondScreen } from '../screen/SecondScreen'

const Stack = createStackNavigator()

export const AppNavigator: FC = () => {
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='First' component={FirstScreen}/>
                <Stack.Screen name='Second' component={SecondScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}