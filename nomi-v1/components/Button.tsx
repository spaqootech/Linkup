import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'

const Button = ({title , href}) => {
  return (
    <Link href={href} style={className`text-2xl font-semibold text-white p-4 w-87 bg-green-500 rounded-xl text-center`}>
    {title}
    </Link>
  )
}

export default Button