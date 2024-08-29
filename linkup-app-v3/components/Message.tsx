import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'

const Message = () => {
  return (
    <View style={className`bg-white p-3 rounded-2xl my-2 flex-row justify-between items-center gap-3`}>
      <Image source={require('../assets/images/defaultUser.png')} style={className`h-8 w-8`}/>
      <View style={className`flex-1`}>
        <Text style={className`font-semibold text-lg`}>Spaqoo</Text>
        <Text style={className`font-semibold text-md`}>commented  your post</Text>
      </View>
      <Text style={className`font-semibold`}>29 Aug</Text>
    </View>
  )
}

export default Message