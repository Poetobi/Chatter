import React, { useState, useEffect } from 'react';
import { Button, Image, StyleSheet, Text, View, SafeAreaView, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';

const Home = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    loadFonts();
  }, []);

  const loadFonts = async () => {
    await useFonts({
      'roc': require('../assets/fonts/roc.otf'),
      'rocbold': require('../assets/fonts/rocbold.otf'),
      'rocsem': require('../assets/fonts/rocsem.otf'),
      'Sora': require('../assets/fonts/Sora.ttf'),
      'Unbounded': require('../assets/fonts/Unbounded.ttf'),
      // add more fonts as needed
    });
    setFontsLoaded(true);
    setIsLoading(false);
  };

  const handlePress = () => {
    navigation.navigate('Login');
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="gray" />
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
      {/* <Image
          source={require('../assets/images/converse.png')}
          style={{ width: 300, height: 500, marginTop: 300}}
          resizeMode='contain'
        /> */}
        <Image
          source={require('../assets/images/chatter.png')}
          style={{ width: 100, height: 100, marginTop: 300}}
          resizeMode='contain'
        />
        <Text style={styles.name}>Chatter</Text>
      </View>

      <Text style={styles.join}> Happy people from all over the world are joining the conversation</Text>

      <Button title="Get Started" onPress={handlePress} />
      
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    fontSize: 30,
    fontFamily: 'Sora',
    color: 'gray',
    marginBottom: 200
  },
  join: {
    fontSize: 14,
    fontWeight: 'medium',
    marginBottom: 15,
    color: 'gray',
    width: '70%',
    marginTop: 5,
    fontFamily: 'Sora',
    textAlign: 'center'
  },
});

export default Home;
