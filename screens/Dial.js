
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import FeatherIcon from 'react-native-vector-icons/Feather';



const Dial = ({navigation}) => { 


  return (
    
    <View style={styles.container}>
     <ImageBackground  source={require('../assets/images/2.jpg')}   borderBottomRightRadius={35} borderBottomLeftRadius={35}
        overflow="hidden"  style={styles.caller}>
     <View style={styles.icons}>
        <View style={styles.circle1}>
        <Icon
          name='chevron-left'
          type='font-awesome'
          onPress={this.handleBackPress}
          containerStyle={styles.iconContain}
          iconStyle={styles.icon}
          size={25}
          color={'blue'}
        /></View>
                <View style={styles.circle1}>

        <Icon
          name='person'
          type='font-awesome'
          onPress={this.handleUserPress}
          containerStyle={styles.iconContain}
          iconStyle={styles.icon}
          size={25}
          color={'blue'}


        /></View>
      </View>
    </ImageBackground>

    <View style={{ backgroundColor: '#fff', borderWidth: 1, borderColor: '#ccc', padding: 5,  borderRadius: 10, zIndex: 1 , marginTop: -260, marginBottom: 70, marginLeft: 250}}>
        <Image source={require('../assets/images/friend2.jpg')} style={{ width: 100, height: 150, borderRadius: 10 }} />
      </View>

    <View style={styles.contain}>
        <View style={styles.iconWrapper}>
          <Icon
            name='mic-none'
            type='font-awesome'
            containerStyle={styles.iconContain}
            iconStyle={styles.icon}
            size={30}
            color={'gray'}

          />
        </View>
        <View style={[styles.iconWrapper, styles.redBackground]}>
          <FeatherIcon
            name='phone-off'
            type='font-awesome'
            containerStyle={styles.iconContain}
            iconStyle={styles.icon}
            size={30}
            color={'#fff'}
          />
        </View>
        <View style={styles.iconWrapper}>
          <FeatherIcon
            name='video'
            type='font-awesome'
            containerStyle={styles.iconContain}
            iconStyle={styles.icon}
            size={30}
            color={'gray'}


          />
        </View>
       
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  

  },

  caller: {
    width: '100%',
    height: '90%',
    marginTop: 90
  },


    iconContain: {
        borderWidth: 1,
        borderColor: 'blue',
        borderRadius: 20,
        backgroundColor: 'white',
      },
      icon: {
        color: 'blue',
        
      },

      icons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        marginLeft: 25,
        width: 380,
        marginTop: 70
      },

      circle1: {
        width: 40,
        height: 40, 
        borderRadius: 50, 
        backgroundColor: '#fff',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center'

      },

      contain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '70%',
        height: 100,
        marginBottom: 160
      },
      iconWrapper: {
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      },
      iconContainer: {
        borderWidth: 0,
        borderRadius: 0,
        padding: 0,
        backgroundColor: 'transparent',
      },
      icon: {
        color: 'black',
      },
      redBackground: {
        backgroundColor: 'red',
      },
});

export default Dial
