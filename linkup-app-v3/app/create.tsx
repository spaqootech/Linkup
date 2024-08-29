import { View, Text, Image, TextInput } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ArrowBack from '@/components/ArrowBack'
import Video from '@/assets/icons/Video'
import ImageIcon from '@/assets/icons/Image'
import Button from '@/components/Button'

const create = () => {
  return (
    <View style={className`flex-1 p-5 gap-5`}>
       <View style={className`flex-row justify-between items-center`}>
      <ArrowBack/>
      <Text style={className`text-2xl font-bold`}>Create Post</Text>
      <View></View>
      </View>


      <View style={className`flex-row justify-start items-center gap-3`}>
        <Image source={require('../assets/creator-1.jpg')} style={className`h-12 w-12 rounded-xl`}/>
        <View>
          <Text style={className`font-semibold text-lg`}>Spaqoo Tech</Text>
          <Text style={className`font-semibold text-gray-700`}>Public</Text>
        </View>
      </View>

      <TextInput placeholder="What's on your mind?" style={className`p-3 border border-gray-300 rounded-xl font-semibold text-md text-gray-500`}/>

      <View style={className`p-3 border border-gray-300 rounded-xl flex-row justify-between items-center`}>
        <Text style={className`text-lg font-semibold text-gray-500`}>Add to your post</Text>
        <View style={className`flex-row gap-3`}>
        <ImageIcon/>
        <Video/>
        </View>
      </View>

      <Button title='Post' href='/home'/>

    </View>
  )
}

export default create