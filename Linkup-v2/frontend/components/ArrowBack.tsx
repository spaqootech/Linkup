import { View, Text, Pressable } from 'react-native'
import React from 'react'
import ArrowLeft from '@/assets/icons/ArrowLeft'
import { useRouter } from 'expo-router'
import className from 'twrnc'

const ArrowBack = () => {
    const router = useRouter()
  return (
    <Pressable onPress={()=>router.back()} style={className`bg-gray-300 w-8 p-1 rounded-lg`}>
    <ArrowLeft/>
    </Pressable>
  )
}

export default ArrowBack