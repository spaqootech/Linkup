import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ArrowBack from '@/components/ArrowBack'
import Logout from '@/assets/icons/logout'
import Edit from '@/assets/icons/Edit'
import Mail from '@/assets/icons/Mail'
import Call from '@/assets/icons/Call'
import Post from '@/components/Post'
import { Link } from 'expo-router'

const profile = () => {
  return (
    <View style={className`p-5 flex-1`}>
      <View style={className`flex-row justify-between items-center pb-5`}>
        <ArrowBack/>
        <Text style={className`text-3xl font-bold`}>Profile</Text>
        <View style={className`bg-red-400 p-1 rounded-lg`}>
          <Logout/>
        </View>
      </View>

<ScrollView showsVerticalScrollIndicator={false}>

      {/* profile details */}
      <View style={className`flex-col justify-center items-center gap-1 pb-5`}>
        <View>
        <Image source={require('../assets/creator-3.jpg')} style={className`h-30 w-30 rounded-2xl`}/>
        <Link href='/editeProfile' style={className`shadow-xl p-1 absolute z-10 bg-white bottom-0 right-0 rounded-lg`}><Edit/></Link>
        </View>
        <Text style={className`font-semibold text-2xl`}>Spaqoo Tech</Text>
        <Text style={className`font-semibold text-gray-700 text-lg`}>Spaqoo Tech</Text>
      </View>

      <View style={className`flex-row items-center gap-2 my-1`}>
        <Mail/>
        <Text style={className`text-gray-700 font-semibold text-lg`}>spaqoo@gmail.com</Text>
      </View>

      <View style={className`flex-row items-center gap-2 my-1`}>
        <Call/>
        <Text style={className`text-gray-700 font-semibold text-lg`}>21313123</Text>
      </View>

        <Text style={className`text-gray-700 font-semibold text-lg mb-3`}>He codes</Text>
      {/* profile details */}


      {/* posts */}
      <Post name='Spaqoo' date='Dec 12 2024' title='Dec post' image={require('../assets/creator-3.jpg')} postImage={require('../assets/image-3.jpg')}/>
      
      <Post name='Spaqoo' date='Jan 12 2124' title='Jan post' image={require('../assets/creator-3.jpg')} postImage={require('../assets/image-2.jpg')}/>
      
      <Post name='Spaqoo' date='Feb 12 3024' title='Feb post' image={require('../assets/creator-3.jpg')} postImage={require('../assets/image-4.jpg')}/>
      {/* posts */}


      </ScrollView>

    </View>
  )
}

export default profile