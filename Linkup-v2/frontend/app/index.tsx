import { View, Text, Image } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'
import Button from '@/components/Button'

const index = () => {
  return (
    <View style={className`flex-1 justify-evenly items-center p-5`}>
      <Image source={require('../assets/images/welcome.png')} style={className`h-76 w-70`}/>
      
      <View>
        <Text style={className`text-center text-4xl font-bold text-gray-700`}>LinkUp!</Text>
        <Text style={className`mt-5 text-center text-lg`}>Where every thought finds a home and every image tells a story</Text>
      </View>

      <View>
        <Button href='/auth/signUp' title='Getting Started'/>
      <Text style={className`mt-5 text-center text-lg`}>Already have an Account! <Link href='/auth/signIn' style={className`text-green-500 font-semibold mt-5`}> Login</Link></Text>
      </View>

    </View>
  )
}

export default index