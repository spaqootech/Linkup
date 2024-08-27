import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ThreeDotsHorizontal from '@/assets/icons/ThreeDotsHorizontal'
import Heart from '@/assets/icons/Heart'
import Comment from '@/assets/icons/Comment'
import Share from '@/assets/icons/Share'

const Post = ({creator , name , date , title ,postImage}) => {
  return (
    <View style={className`shadow-lg rounded-xl p-2 gap-1 my-3`}>
      <View style={className`flex-row justify-between items-center gap-2`}>
        <Image source={creator} style={className`h-10 w-10 rounded-lg`}/>
        <View style={className`flex-1 flex-col justify-center items-start`}>
        <Text style={className`text-md text-lg font-semibold`}>{name}</Text>
        <Text style={className`text-md font-semibold text-gray-700`}>{date}</Text>
        </View>
        <ThreeDotsHorizontal/>
      </View>

      <Text style={className`text-md text-lg font-semibold`}>{title}</Text>

      <Image source={postImage} style={className`h-60 w-83 rounded-2xl`}/>

      <View style={className`flex-row justify-start items-center gap-2 my-1`}>
        <Heart/>
        <Comment/>
        <Share/>
      </View>

    </View>
  )
}

export default Post