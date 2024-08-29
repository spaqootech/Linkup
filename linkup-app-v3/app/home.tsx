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
        {/* header */}
        <View style={className`flex-row justify-between items-center`}>
        <Text style={className`text-3xl font-bold`}>LinkUp</Text>
            <View style={className`flex-row gap-3 items-center`}>
        <Link href='/notification'><Heart/></Link>
        <Link href='/create'><Plus/></Link>
        <Link href='/profile'><Image source={require('../assets/images/defaultUser.png')} style={className`h-8 w-8 rounded-xl`}/></Link>
            </View>
        </View>
      {/* header */}

      {/* Posts */}
      <ScrollView showsVerticalScrollIndicator={false}>
      <Post image={require('../assets/creator-1.jpg')}
      name='Spaqoo'  date='12 Jun 2021' title='At party'
      postImage={require('../assets/image-3.jpg')}
      />
      <Post image={require('../assets/creator-2.jpg')}
      name='mrBeast'  date='12 Jun 2022' title='At home'
      postImage={require('../assets/image-2.jpg')}
      />
      <Post image={require('../assets/creator-3.jpg')}
      name='Elon Musk'  date='12 Jun 2023' title='At shop'
      postImage={require('../assets/image-4.jpg')}
      />
      <Post image={require('../assets/creator-4.jpg')}
      name='Shapater'  date='12 Jun 2024' title='new ways'
      postImage={require('../assets/image-1.jpg')}
      />
      </ScrollView>
      {/* Posts */}

    </View>
  )
}

export default home