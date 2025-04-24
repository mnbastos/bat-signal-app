import React from 'react';
import { View, Text, Image } from 'react-native';

import bat from '../../../assets/bat.png'
import { styles } from './homeStyle';
//import { styles } from './styles';

export default function HomeScreen() {
  return (
    <View style={styles.appContainer}>
        <Image source={bat} style = {styles.logoContainer}></Image>
        <View style={styles.buttonContainer}>
            <Text>Clique para gerar BAT-SINAL</Text>
        </View>
    </View>
  )
}