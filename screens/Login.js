import React from 'react'
import { View, Button, Text, TextInput, Image, StyleSheet, SafeAreaView, TouchableHighlight, ImageBackground} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import { useFonts } from 'expo-font';





const Login = ({navigation}) => {


const [fontsLoaded] = useFonts({
    'roc': require('../assets/fonts/roc.otf'),
    'rocbold': require('../assets/fonts/rocbold.otf'),
    'rocsem': require('../assets/fonts/rocsem.otf'),
    'Sora': require('../assets/fonts/Sora.ttf'),
    'Unbounded': require('../assets/fonts/Unbounded.ttf'),
    // add more fonts as needed
  });



    return (

        
        <View style={styles.container}>

             <Image
          source={require('../assets/images/message.png')}
          style={styles.message}
        />
     
             
<View>
<View style={styles.inputContainer}>
        <Text style={styles.label}>Username</Text>
        <TextInput placeholder="Enter Username" style={styles.input} placeholderTextColor={'#999'}       keyboardType="default"
/>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label} >Password</Text>
        <TextInput placeholder="Password" style={styles.input} placeholderTextColor={'#999'}  keyboardType="default"
/>
      </View>
      
    </View>

            <View style={styles.btnContainer}>
                    
         <Button onPress = {()=> navigation.navigate('User')} title="Login" color="white" Size='6' style={styles.btn}></Button></View>
      
         <Text style={styles.account}>Don't have an account?</Text>    

      
        <Button onPress = {()=> navigation.navigate('Sign')} title="Create Account" color="#2B59C3" >        <Icon name="arrow" size={30} color="lightgray" />

</Button>
     
        </View>

        

  )
}


const styles = StyleSheet.create({

    container: { 
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#fff',
    },

    bottom: {

        flex: 0,
        flexDirection:  'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
        width: '80%',
        marginLeft: 20
    }, 

    message: {
      width: 250,
      height: 250,
      marginTop: -100,

    },
 

    btn: {

        color: 'gray',
        fontSize: 10,

    }, 


    inputContainer: {
      marginBottom: 20,
      width: 300,
    },

    input: {
      borderWidth: 1,
      borderColor: 'blue',
      color: '#ffffff',
      borderRadius: 10,
      padding: 15,
      fontSize: 16,
      placeholderTextColor:'#999'

    },


    label: {

      color: '#2B59C3',
      fontSize: 18,
      marginBottom: 10
      },
      
      btn: {
        marginTop: 20,
        width: '100%',
        color: '#fff',
        
      },

      btnContainer: {
        width: '70%',
        marginTop: 5,
        marginBottom: 20,
        paddingVertical: 6,
        borderRadius: 12,
        backgroundColor: '#2B59C3',
      },


      account: {

        color: 'gray',
        fontSize: 18
  
      }


  });
  


export default Login
