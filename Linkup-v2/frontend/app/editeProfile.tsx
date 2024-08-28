import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ArrowBack from '@/components/ArrowBack'
import Camera from '@/assets/icons/Camera'

const editeProfile = () => {
  return (
    <View style={className`flex-1 p-5`}>
      <View style={className`flex-row justify-between items-center`}>
        <ArrowBack/>
      <Text style={className`text-2xl font-bold`}>Edite Profile</Text>
      <View></View>
      </View>

      {/* Profile page */}
      <View style={className`flex-row justify-center items-center`}>
        
        <View>
        <Image source={require('../assets/creator-3.jpg')} style={className`h-30 w-30 my-5 rounded-xl`}/>
        <View style={className`p-2 w-10 rounded-lg absolute z-10 bottom-0 right-0 shadow-xl bg-white`}>
        <Camera/>
        </View>
        </View>

      </View>
      {/* Profile page */}
    </View>
  )
}

export default editeProfile