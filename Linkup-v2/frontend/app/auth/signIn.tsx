import { View, Text, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import className from 'twrnc';
import ArrowBack from '@/components/ArrowBack';
import InputEmail from '@/components/InputEmail';
import InputPassword from '@/components/InputPassword';
import Button from '@/components/Button';
import { Link } from 'expo-router';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        Alert.alert('Success', 'You are logged in successfully!');
        // Optionally navigate to the home page or dashboard
      } else {
        const errorData = await response.json();
        Alert.alert('Error', errorData.message || 'Failed to log in');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong. Please try again later.');
    }
  };

  return (
    <View style={className`flex-1 p-5 gap-5`}>
      <ArrowBack />
      <Text style={className`my-5 text-4xl font-bold text-gray-700`}>
        Hey, <br />Welcome Back
      </Text>
      <Text style={className`text-md font-bold`}>
        Please login to continue
      </Text>

      <InputEmail value={email} onChangeText={setEmail} />
      <InputPassword value={password} onChangeText={setPassword} />

      <View style={className`items-end`}>
        <Text style={className`text-md font-bold`}>Forget Password?</Text>
      </View>

      <Pressable onPress={handleSignIn}>
        <Button title="Sign In" href='/auth/signIn' />
      </Pressable>

      <Text style={className`text-lg text-gray-700 text-center mt-5`}>
        Don't have an Account!
        <Link style={className`text-green-500 font-semibold`} href='/auth/signUp'> Sign Up</Link>
      </Text>
    </View>
  );
};

export default SignIn;
