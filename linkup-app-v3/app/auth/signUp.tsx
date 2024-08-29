import { View, Text, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ArrowLeft from '@/assets/icons/ArrowLeft'
import ArrowBack from '@/components/ArrowBack'
import InputName from '@/components/InputName'
import InputEmail from '@/components/InputEmail'
import InputPassword from '@/components/InputPassword'
import Button from '@/components/Button'
import { Link } from 'expo-router'

const signUp = () => {
  return (
    <View style={className`p-5 flex-1 gap-5`}>
        <ArrowBack/>

      <Text style={className`text-4xl font-bold my-5 text-gray-900`}>
        Let's <br />Get Started</Text>

        <Text style={className`text-md font-bold`}>
            Please fill the details to create an Account
        </Text>

        <InputName/>
        <InputEmail/>
        <InputPassword/>
        
        
        <View>
            <Button title='Sign Up' href='auth/signIn'/>
            <Text style={className`text-gray-700 text-center mt-5 text-lg`}>
                Already have an Account! <Link href='/auth/signIn' style={className`font-semibold text-green-500`}> Login</Link></Text>
        </View>
    </View>
  )
}

export default signUp