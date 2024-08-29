import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Button from '@/components/Button'
import { Link } from 'expo-router'

const index = () => {
  return (
    <View style={className`flex-1 p-5 justify-evenly items-center`}>
        <Image source={require('../assets/images/welcome.png')} style={className`h-76 w-70`}/>
        
        <View>
      <Text style={className`text-4xl font-bold text-gray-700 text-center`}>LinkUp!</Text>
      <Text style={className`mt-5 text-center text-lg text-gray-700`}>Where every thought finds a home and every image tells a story</Text>
        </View>

        <View>
            <Button title='Getting Started' href='auth/signUp'/>
            <Text style={className`text-gray-700 text-center mt-5 text-lg`}>
                Already have an Account! <Link href='/auth/signIn' style={className`font-semibold text-green-500`}> Login</Link></Text>
        </View>
    </View>
  )
}

export default index