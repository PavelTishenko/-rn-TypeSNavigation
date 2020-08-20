import React, { FC } from 'react'
import { Text, View } from 'react-native'
import { StackScreenProps } from '@react-navigation/stack'
import { StackType } from '../navigation/StackType'

type Props = StackScreenProps<StackType, 'Second'>

export const SecondScreen: FC<Props> = (props) => {
    console.log(props.route.params?.param);
    
    return(
        <View>
            <Text 
                onPress={()=>props.navigation.navigate('First', 
                    {param: 'Hi Tao'})}>
                    Push to get back to first
            </Text>
        </View>
    )
}