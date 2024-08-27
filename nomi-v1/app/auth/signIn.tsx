import { View, Text, Pressable } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ArrowLeft from '@/assets/icons/ArrowLeft'
import InputUser from '@/components/InputUser'
import InputEmail from '@/components/InputEmail'
import InputLock from '@/components/InputLock'
import Button from '@/components/Button'
import { Link, useRouter } from 'expo-router'

const signIn = () => {
    const router = useRouter();
  return (
    <View style={className`flex-1 gap-5 p-5`}>
      <Pressable onPress={()=>router.back()} style={className`bg-gray-300 p-2 rounded-xl w-10`}>
      <ArrowLeft/>
      </Pressable>

      <Text style={className`text-4xl font-bold text-gray-700 my-5`}>Hey, <br />welcome Back</Text>

      <Text style={className`font-semibold`}>
        Please Login to continue
      </Text>

      <InputEmail/>
      <InputLock/>
      <View style={className`items-end`}>
        <Text style={className`font-bold text-end my-2 text-md`}>
            Forget Password?
        </Text>
      </View>

      <Button title='Sign In' href='/home'/>

      <Text style={className`text-center text-lg text-gray-700 my-5`}>
        Don't have an Account! 
        <Link href='/auth/signUp' style={className`text-green-500 font-semibold`}> Sign Up</Link>
      </Text>

    </View>
  )
}

export default signIn