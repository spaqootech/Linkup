import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ThreeDotsHorizontal from '@/assets/icons/ThreeDotsHorizontal'
import Heart from '@/assets/icons/Heart'
import Comment from '@/assets/icons/Comment'
import Share from '@/assets/icons/Share'

const Post = ({image , name , date , title , postImage }) => {
  return (
    <View style={className`p-3 gap-3 rounded-2xl shadow-lg my-2`}>
        {/* post header */}
        <View style={className`flex-row justify-between items-start gap-3`}>
            <Image source={image} style={className`h-10 w-10 mt-1 rounded-xl`}/>
            <View style={className`flex-1`}>
        <Text style={className`font-semibold text-lg`}>{name}</Text>
        <Text style={className`font-semibold text-md text-gray-700`}>{date}</Text>
            </View>
            <ThreeDotsHorizontal/>
        </View>
        {/* post header */}
      <Text style={className`text-lg font-semibold`}>{title}</Text>

        {/* Post Image */}
        <Image source={postImage} style={className`h-60 w-82 rounded-2xl `}/>
        {/* Post Image */}

        {/* option icons */}
        <View style={className`flex-row justify-start items-center gap-3 py-2`}>
            <Heart/> <Comment/> <Share/>
        </View>
        {/* option icons */}
    </View>
  )
}

export default Post