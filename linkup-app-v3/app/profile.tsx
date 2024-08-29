import { View, Text, Image, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ArrowBack from '@/components/ArrowBack'
import Logout from '@/assets/icons/logout'
import Edit from '@/assets/icons/Edit'
import Mail from '@/assets/icons/Mail'
import Call from '@/assets/icons/Call'
import Post from '@/components/Post'

const profile = () => {
  return (
    <View style={className`flex-1 gap-5 p-5`}>
      <View style={className`flex-row justify-between items-center pb-2`}>
        <ArrowBack/>
        <Text style={className`text-2xl font-bold`}>Profile</Text>
        <View style={className`bg-red-300 p-2 rounded-xl w-10`}>
        <Logout/>
        </View>
      </View>


      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={className`gap-2`}>

      <View style={className`flrex-col justify-center items-center mt-2 gap-2`}>
          <View style={className`flrex-col justify-center items-center`}>
            <Image source={require('../assets/creator-3.jpg')} style={className`h-30 w-30 rounded-xl`}/>
             <View style={className`p-2 w-10 bg-white shadow-lg absolute bottom-0 right-0 rounded-lg`}>
              <Edit/>
             </View>
          </View>
          <Text style={className`font-semibold text-2xl`}>Spaqoo Tech</Text>
          <Text style={className`font-bold text-gray-700`}>Spaqoo Tech</Text>
      </View>

      <View style={className`flex-row justify-start items-center gap-2`}>
        <Mail/>
        <Text style={className`text-lg font-semibold text-gray-500`}>spaqootech@gmail.com</Text>
      </View>


      <View style={className`flex-row justify-start items-center gap-2`}>
        <Call/>
        <Text style={className`text-lg font-semibold text-gray-500`}>1234567890</Text>
      </View>


        <Text style={className`text-lg font-semibold text-gray-500`}>He codes</Text>

        {/* Posts */}
          <Post name='Sapqoo' date='21 Jan 2023' title='my clicks' image={require('../assets/creator-3.jpg')} postImage={require('../assets/image-1.jpg')}/>
        
          <Post name='Sapqoo' date='21 Jan 2023' title='my clicks' image={require('../assets/creator-3.jpg')} postImage={require('../assets/image-2.jpg')}/>
        
          <Post name='Sapqoo' date='21 Jan 2023' title='my clicks' image={require('../assets/creator-3.jpg')} postImage={require('../assets/image-3.jpg')}/>
        
          <Post name='Sapqoo' date='21 Jan 2023' title='my clicks' image={require('../assets/creator-3.jpg')} postImage={require('../assets/image-4.jpg')}/>
        
        
        {/* Posts */}
        </ScrollView>

    </View>
  )
}

export default profile