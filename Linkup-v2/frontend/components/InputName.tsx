import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import User from '@/assets/icons/User'

import className from 'twrnc'

const InputName = ({value , onChangeText}) => {
  return (
    <View style={className`flex-row justify-start items-center border border-gray-500 rounded-xl gap-3 pl-3`}>
        <User/>
        <TextInput value={value} onChangeText={onChangeText} placeholder='Enter your name' style={className`text-lg text-gray-500 p-4 flex-1 rounded-lg`}/>
    </View>
  )
}

export default InputName