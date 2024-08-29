import { View, Text } from 'react-native'
import React from 'react'
import className from 'twrnc'
import { Link } from 'expo-router'

const Button = ({title , href}) => {
  return (
    <Link href={href} style={className`bg-green-500 text-white text-2xl font-semibold p-4 w-86 text-center rounded-2xl`}>
      {title}
    </Link>
  )
}

export default Button