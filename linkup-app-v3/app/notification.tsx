import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import className from 'twrnc'
import ArrowBack from '@/components/ArrowBack'
import Message from '@/components/Message'

const notification = () => {
  return (
    <View style={className`flex-1 gap-5 p-5 bg-gray-200`}>
      <View style={className`flex-row justify-between items-center`}>
      <ArrowBack/>
      <Text style={className`text-2xl font-bold`}>Notifications</Text>
      <View></View>
      </View>

      {/* Notifications */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
      </ScrollView>
      {/* Notifications */}
    </View>
  )
}

export default notification