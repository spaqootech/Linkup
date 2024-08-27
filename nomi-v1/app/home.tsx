import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import Heart from '@/assets/icons/Heart'
import Plus from '@/assets/icons/Plus'
import Post from '@/components/Post'
import { Link } from 'expo-router'

const home = () => {
  return (
    <View style={className`p-5 flex-1 gap-5`}>
      <View style={className`flex-row justify-between items-center`}>
        <Link href='/' style={className`text-3xl font-bold`}>LinkUp</Link>
          <View style={className`flex-row justify-between items-center gap-3`}>
            <Heart/>
            <Plus/>
            <Link href='/profile'>
            <Image source={require('../assets/images/defaultUser.png')} style={className`h-8 w-8 border rounded-lg`}/>
            </Link>
          </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>

      <Post creator={require('../assets/creator-1.jpg')}
        name='spaqoo' date='12 Jun 2025' title='Party day'
        postImage={require('../assets/image-1.jpg')}
        />

        <Post creator={require('../assets/creator-2.jpg')}
        name='spaqoo' date='12 Jan 2023' title='Party day'
        postImage={require('../assets/image-2.jpg')}
        />

        <Post creator={require('../assets/creator-3.jpg')}
        name='spaqoo' date='12 Jun 2025' title='Party day'
        postImage={require('../assets/image-3.jpg')}
        />

        <Post creator={require('../assets/creator-4.jpg')}
        name='spaqoo' date='12 Jun 2025' title='Party day'
        postImage={require('../assets/image-4.jpg')}
        />

      </ScrollView>
    </View>
  )
}

export default home