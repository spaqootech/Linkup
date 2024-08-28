import { View, Text, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import className from 'twrnc';
import ArrowBack from '@/components/ArrowBack';
import InputEmail from '@/components/InputEmail';
import InputName from '@/components/InputName';
import InputPassword from '@/components/InputPassword';
import Button from '@/components/Button';
import { Link } from 'expo-router';

const signUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
      

      if (response.ok) {
        const data = await response.json();
        Alert.alert('Success', 'Account created successfully!');
        // Optionally navigate to the sign-in page or home
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.message || 'Failed to create account');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={className`flex-1 p-5 gap-5`}>
      <ArrowBack />
      <Text style={className`my-5 text-4xl font-bold text-gray-700`}>
        Let's <br />Get Started
      </Text>
      <Text style={className`text-md font-bold`}>
        Please fill the details to create an Account
      </Text>

      <InputName value={name} onChangeText={setName} />
      <InputEmail value={email} onChangeText={setEmail} />
      <InputPassword value={password} onChangeText={setPassword} />

      <Pressable onPress={handleSignUp}>
        <Button title="Sign Up" href='/auth/signUp'/>
      </Pressable>

      <Text style={className`text-lg text-gray-700 text-center mt-5`}>
        Already have an Account! 
        <Link style={className`text-green-500 font-semibold`} href='/auth/signIn'> Login</Link>
      </Text>
    </View>
  );
};

export default signUp;
