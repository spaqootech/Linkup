import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ThreeDotsHorizontal from '@/assets/icons/ThreeDotsHorizontal'
import Heart from '@/assets/icons/Heart'
import Comment from '@/assets/icons/Comment'
import Share from '@/assets/icons/Share'

const Post = ({image , name ,date , title , postImage }) => {
  return (
    <View style={className`p-3 shadow-lg rounded-lg gap-2 my-1`}>
      <View style={className`flex-row justify-between items-start gap-2`}>
        <Image source={image} style={className`h-10 w-10 rounded-lg mt-1`}/>
        <View style={className`flex-1`}>
            <Text style={className`font-semibold text-lg`}>{name}</Text>
            <Text style={className`font-semibold text-md text-gray-700`}>{date}</Text>
        </View>
        <ThreeDotsHorizontal/>
      </View>

      
      <Text style={className`font-semibold text-lg`}>{title}</Text>

      <Image source={postImage} style={className`h-70 w-81 rounded-2xl`}/>

      <View style={className`flex-row justify-start items-center gap-5 py-2`}>
        <Heart/> <Comment/> <Share/>
      </View>

    </View>
  )
}

export default Post