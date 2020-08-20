import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { StackType } from '../navigation/StackType'

type Props = StackScreenProps<StackType, 'First'>

export const FirstScreen: FC<Props> = (props) => {
    console.log(props.route.params?.param);
    return(
        <View>
            <Text onPress={()=> props.navigation.navigate('Second', { param: 'Hello'})}>To second screen</Text>
        </View>
    )
}