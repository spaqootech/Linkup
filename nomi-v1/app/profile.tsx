import { View, Text, Pressable, Image, ScrollView } from 'react-native'
import React from 'react'
import ArrowLeft from '@/assets/icons/ArrowLeft'
import className from 'twrnc'
import Logout from '@/assets/icons/logout'
import { Link, useRouter } from 'expo-router'
import Edit from '@/assets/icons/Edit'
import Mail from '@/assets/icons/Mail'
import Call from '@/assets/icons/Call'
import Post from '@/components/Post'

const profile = () => {
    const router = useRouter()
  return (
    <View style={className`p-5 gap-5 flex-1`}>
        
        <View style={className`flex-row  justify-between items-center`}>
            <Pressable style={className`bg-gray-300 rounded-xl p-2`} onPress={()=>router.back()}>
                <ArrowLeft/>
            </Pressable>
            <Text style={className`text-2xl font-bold`}>Profile</Text>
            <View style={className`bg-red-400 rounded-xl p-2`}>
            <Logout/>
            </View>
        </View>

<ScrollView showsVerticalScrollIndicator={false}>
<View style={className`gap-2 flex-1`}>

<View style={className`gap-1 justify-center items-center`}>
            <Image source={require('../assets/creator-1.jpg')} style={className`h-30 w-30 rounded-2xl`}/>
            <Link href='/editProfile' style={className`absolute shadow-xl rounded-lg p-1 right-27 top-22 z-10 bg-white`}>
                <Edit/>
            </Link>
            <Text style={className`text-2xl font-semibold`}>Spaqoo Tech</Text>
            <Text style={className`text-lg text-gray-700 font-semibold`}>Spaqoo</Text>
        </View>

        <View style={className`flex-row  items-center gap-2`}>
        <Mail/>
        <Text style={className`text-md text-gray-700 font-bold`}>Spaqoo@gmail.com</Text>
        </View>

        <View style={className`flex-row  items-center gap-2`}>
        <Call/>
        <Text style={className`text-md text-gray-700 font-bold`}> +92340293402</Text>
        </View>

        
        <Text style={className`text-md text-gray-700 font-bold`}> He codes</Text>



<Post name='Spaqoo' date='20 Sep 2024' title='New Post' creator={require('../assets/creator-1.jpg')} postImage={require('../assets/image-1.jpg')}/>

<Post name='Spaqoo' date='20 Sep 2024' title='New Post' creator={require('../assets/creator-1.jpg')} postImage={require('../assets/image-2.jpg')}/>

<Post name='Spaqoo' date='20 Sep 2024' title='New Post' creator={require('../assets/creator-1.jpg')} postImage={require('../assets/image-3.jpg')}/>

<Post name='Spaqoo' date='20 Sep 2024' title='New Post' creator={require('../assets/creator-1.jpg')} postImage={require('../assets/image-4.jpg')}/>

</View>
</ScrollView>

    </View>
  )
}

export default profile