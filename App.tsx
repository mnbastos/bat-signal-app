import React, {useState} from 'react';
import { View, Pressable, Text } from 'react-native';
import HomeScreen from './src/Screens/Home/homeScreen'
import { FormScreen } from './src/Screens/formScreen/formScreen';
import { styles } from './src/Screens/Home/homeStyle';

export default function App() {
  
  const [isActive, setIsActive] = useState(false) //const [variável, função] = useState(valor inicial)
  
  function changeIsActive(){
    setIsActive((oldValue:boolean)=>{return !oldValue})
  
  }


  if (!isActive){
    return (
      <View style= {styles.appContainer}>
        <HomeScreen></HomeScreen>
        <View style={styles.buttonContainer}>
          <Pressable style = {styles.buttonContainer} onPress={ changeIsActive }>
            <Text>Clique para gerar BAT-SINAL</Text>
          </Pressable>
        </View>
      </View>  
    )
  } else{
    return(
      <View style= {styles.appContainer}>
        <FormScreen></FormScreen>
        <View style={styles.buttonContainer}>
          <Pressable style = {styles.buttonContainer} onPress={ changeIsActive }>
            <Text>Clique para gerar BAT-SINAL</Text>
          </Pressable>
        </View>
      </View>
    )
  }
}

