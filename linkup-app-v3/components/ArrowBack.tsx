import { View, Text, Pressable } from 'react-native'
import React from 'react'
import ArrowLeft from '@/assets/icons/ArrowLeft'
import className from 'twrnc'
import { useRouter } from 'expo-router'

const ArrowBack = () => {
const router = useRouter()
    return (
    <Pressable onPress={()=>router.back()}
     style={className`bg-gray-300 p-2 rounded-lg w-10`}>
            <ArrowLeft/>
        </Pressable>
  )
}

export default ArrowBack