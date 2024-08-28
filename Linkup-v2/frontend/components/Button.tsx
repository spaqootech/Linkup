import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import className from 'twrnc'

const Button = ({title , href}) => {
  return (
    <Link href={href} style={className`bg-green-500 p-4 w-88 rounded-2xl text-2xl font-semibold text-white text-center`}>
    {title}
    </Link>
  )
}

export default Button