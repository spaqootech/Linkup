import { View, Text, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
import User from '@/assets/icons/User'

const InputUser = () => {
  return (
    <View style={className`flex-row border gap-2 border-gray-500 rounded-xl justify-center items-center pl-5`}>
        <User/>
        <TextInput placeholder='Enter your name' style={className`text-lg  flex-1 p-4 rounded-xl`}/>
    </View>
  )
}

export default InputUser