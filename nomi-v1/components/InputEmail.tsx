import { View, Text, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Mail from '@/assets/icons/Mail'

const InputEmail = () => {
  return (
    <View style={className`flex-row border gap-2 border-gray-500 rounded-xl justify-center items-center pl-5`}>
        <Mail/>
        <TextInput placeholder='Enter your email' style={className`text-lg  flex-1 p-4 rounded-xl`}/>
    </View>
  )
}

export default InputEmail