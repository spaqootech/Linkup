import { View, Text, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
import User from '@/assets/icons/User'

const InputName = () => {
  return (
    <View style={className`border border-gray-500 rounded-2xl flex-row justify-start items-center gap-3 pl-3`}>
      <User/>
      <TextInput placeholder='Enter your name' style={className`text-lg text-gray-500 p-4 rounded-2xl flex-1`}/>
    </View>
  )
}

export default InputName