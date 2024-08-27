import { View, Text, Pressable, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ArrowLeft from '@/assets/icons/ArrowLeft'
import { Link, useRouter } from 'expo-router'
import Camera from '@/assets/icons/Camera'
import Button from '@/components/Button'
import User from '@/assets/icons/User'
import Call from '@/assets/icons/Call'
import Location from '@/assets/icons/Location'

const editProfile = () => {
    const router = useRouter()
  return (
    <View style={className`flex-1 p-5 gap-5 `}>
        
        
        <View style={className`flex-row  justify-between items-center`}>
            <Pressable style={className`bg-gray-300 rounded-xl p-2`} onPress={()=>router.back()}>
                <ArrowLeft/>
            </Pressable>
            <Text style={className`text-2xl font-bold`}>Edit Profile</Text>
            <View>
            </View>
        </View>


        <View style={className`gap-1 justify-center items-center`}>
            <Image source={require('../assets/creator-1.jpg')} style={className`h-30 w-30 rounded-2xl`}/>
            <Link href='/editProfile' style={className`absolute shadow-xl rounded-lg p-1 right-27 top-22 z-10 bg-white`}>
                <Camera/>
            </Link>
        </View>

        <Text style={className`text-md text-gray-700 font-semibold`}>Please fill your profile details</Text>


        <View style={className`border border-gray-500 rounded-xl p-4 flex-row justify-start items-center gap-3`}>
            <User/>
            <Text style={className`text-lg font-semibold`}>Spaqoo Tech</Text>
        </View>


        <View style={className`border border-gray-500 rounded-xl p-4 flex-row justify-start items-center gap-3`}>
            <Call/>
            <Text style={className`text-lg font-semibold`}> 123456789 </Text>
        </View>


        <View style={className`border border-gray-500 rounded-xl p-4 flex-row justify-start items-center gap-3`}>
            <Location/>
            <Text style={className`text-lg font-semibold`}>New York</Text>
        </View>


        <View style={className`border border-gray-500 rounded-xl p-4 flex-row justify-start items-center gap-3 pb-20`}>
            <Text style={className`text-md text-gray-700 font-semibold`}>
                Hey Code </Text>
        </View>

        <Button title='Update' href='/profile'/>

    </View>
  )
}

export default editProfile