import React from 'react';
import { View, TextInput, Text } from 'react-native';

import { styles } from './formScreenStyle';

export function FormScreen() {
  return (
    <View>
        <Text>Nome</Text>
        <TextInput style = {styles.input}></TextInput>
        <Text>Endereço</Text>
        <TextInput style = {styles.input}></TextInput>
        <Text>Ocorrência</Text>
        <TextInput style = {styles.input}></TextInput>
    </View>
  );
}