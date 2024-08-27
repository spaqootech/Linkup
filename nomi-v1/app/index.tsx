import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'
import Button from '@/components/Button'

const index = () => {
  return (
    <View style={className`flex-1 justify-evenly items-center p-5`}>
        <Image source={require('../assets/images/welcome.png')} style={className`h-66 w-61`}/>

        <View>
            <Text style={className`text-4xl font-bold text-gray-700 text-center`}>LinkUp</Text>
            <Text style={className` text-center text-lg text-gray-700 mt-5`}>Where every thought finds a home and every image tells a story</Text>
        </View>

        <View>
            <Button href='/auth/signUp' title='Getting Started'/>
            <Text style={className`text-gray-700 text-lg text-center mt-5`}>
                Already have an Account! 
                <Link href='/auth/signIn' style={className`text-green-500 font-semibold`}> Login</Link>
            </Text>
        </View>
    </View>
  )
}

export default index