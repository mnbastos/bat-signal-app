import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    logoContainer:{
        flexDirection:'column',
        borderColor:'#ffffff',
        borderWidth: 2,
        justifyContent:'center',
        alignSelf: 'center',
        marginBottom: 60,
        paddingTop:20,
        paddingBottom: 10,
        backgroundColor: '#4D4D4D'
      },
      buttonContainer:{
        width:'80%',
        alignItems:'center',
        flexDirection:'column',
        justifyContent:'center',
        alignSelf:'center',
        borderColor:'black',
        borderRadius:5,
        backgroundColor:"gray"
      },
      appContainer: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        padding:20
      }
});