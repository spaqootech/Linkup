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
            <View style={className`flex-row gap-5 items-center`}>
                
                <Link href='/notification'><Heart/></Link>
                <Link href='/createPost'><Plus/></Link>
                <Link href='/profile'>
                <Image source={require('../assets/images/defaultUser.png')} style={className`h-8 w-8`}/></Link>
            </View>
      </View>
      {/* header */}

      {/* Posts */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={className`gap-5`}>
      <Post image={require('../assets/creator-1.jpg')}
      name='Spaqoo Tech' date='12 Jun 2024' title='Post Title'
      postImage={require('../assets/image-1.jpg')}
      />
      <Post image={require('../assets/creator-2.jpg')}
      name='Spaqoo Tech' date='12 Jun 2024' title='Post Title'
      postImage={require('../assets/image-2.jpg')}
      />
      <Post image={require('../assets/creator-3.jpg')}
      name='Spaqoo Tech' date='12 Jun 2024' title='Post Title'
      postImage={require('../assets/image-3.jpg')}
      />
      <Post image={require('../assets/creator-4.jpg')}
      name='Spaqoo Tech' date='12 Jun 2024' title='Post Title'
      postImage={require('../assets/image-4.jpg')}
      />
      </ScrollView>
      {/* Posts */}

    </View>
  )
}

export default home