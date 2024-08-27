import { View, Text, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ArrowLeft from '@/assets/icons/ArrowLeft'
import InputUser from '@/components/InputUser'
import InputEmail from '@/components/InputEmail'
import InputLock from '@/components/InputLock'
import Button from '@/components/Button'
import { Link, useRouter } from 'expo-router'

const signUp = () => {
    const router = useRouter();
  return (
    <View style={className`flex-1 gap-5 p-5`}>
      <Pressable onPress={()=>router.back()} style={className`bg-gray-300 p-2 rounded-xl w-10`}>
      <ArrowLeft />
      </Pressable>

      <Text style={className`text-4xl font-bold text-gray-700 my-5`}>Let's <br />Get Started</Text>

      <Text style={className`font-semibold`}>
        Please fill the to create an account
      </Text>

      <InputUser/>
      <InputEmail/>
      <InputLock/>

      <Button title='Sign Up' href='/auth/signIn'/>

      <Text style={className`text-center text-lg text-gray-700 my-5`}>
        Already have an Account! 
        <Link href='/auth/signIn' style={className`text-green-500 font-semibold`}> Login</Link>
      </Text>

    </View>
  )
}

export default signUp