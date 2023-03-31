import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const User = ({navigation}) => { 
  const userName = 'Keisha Spencer';
  const user2Name = 'Joel Briggs';
  const userProfileImage = require('../assets/images/user-profile.jpg');
  const userImage = require('../assets/images/user-image.jpg');
  const friendsImages = [
    require('../assets/images/friend1.jpeg'),
    require('../assets/images/friend2.jpg'),
    require('../assets/images/friend3.jpg'),
    require('../assets/images/friend4.jpg'),
    require('../assets/images/friend5.jpg'),
    require('../assets/images/friend6.jpg')


  ];

  
  const pinnedTime = '10:30 AM';
  const user1 = {
    name: 'Elijah West',
    image: require('../assets/images/friend4.jpg'),
    lastMessage: 'Did you see the new movie?',
    lastMessageTime: '8:45 AM',
    unreadMessages: 2,
    hasVoiceNote: false
  };


  const user3 = {
    name: 'Jane Smith',
    image: require('../assets/images/friend2.jpg'),
    lastMessage: 'What time is the meeting today?',
    lastMessageTime: 'Yesterday',
    unreadMessages: 1,
    hasVoiceNote: true
  };
  const user4 = {
    name: 'Michael Johnson',
    image: require('../assets/images/friend3.jpg'),
    lastMessage: 'I need your help with something',
    lastMessageTime: 'Monday',
    unreadMessages: 0,
    hasVoiceNote: false
  };
  const user5 = {
    name: 'Bryan Williams',
    image: require('../assets/images/friend1.jpeg'),
    lastMessage: 'Thanks for the dinner last night',
    lastMessageTime: 'Sunday',
    unreadMessages: 6,
    hasVoiceNote: true
  };

  const users = [user1, user3, user4, user5];


  return (
    <View style={styles.container}>

      <View style={styles.top}>
          <View style={styles.welcomeMessage}>
  
        <Text style={styles.userName}>Welcome back!</Text>
        <Text style={styles.userName2}>{userName}!</Text>

      </View>
      <Image source={userImage} style={styles.userImage} />
    
      </View>

      <View style={styles.bar}>
  <View style={styles.iconContainer}>
    <Icon name="search" size={24} color="gray" />
  </View>

  <TextInput
    style={styles.input}
    placeholder="Search message..."
    placeholderTextColor="gray"
    fontSize="14"

  />
</View>

      <View style={styles.friendsActivities}>
        <Text style={styles.heading}>Friends Activities</Text>
        <ScrollView horizontal={true} style={styles.scrollContainer}>
          {friendsImages.map((img, index) => (
            <Image source={img} style={styles.friendImage} key={index} />
          ))}
        </ScrollView>
      </View>

      <View style={styles.all}>
      <Icon name="lock" type="material" color="red" size={24} />
      <View style={styles.titleContainer}>
      <Text style={styles.pinnedTime}>Pinned message</Text>
      </View>
    </View>
      <View style={styles.pinnedMessage}>

        <Image source={userProfileImage} style={styles.userProfileImage} />
        <View style={styles.pinnedMessageContent}>
          <Text style={styles.userName}>{user2Name}</Text>
          <Text style={styles.pinned}>Joel Briggs is typing... · {pinnedTime}</Text>

        </View>

      </View>
      
    
      <View style={styles.all}>
      <Icon name="chat" type="material" color="#333" size={24} />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>All Messages</Text>
      </View>
    </View>

      <ScrollView>
        {users.map((user, index) => (
          <View style={styles.userContainer} key={index}>
            <View style={styles.userImageContainer}>
<Image source={user.image} style={styles.userImage} />
{user.unreadMessages > 0 && (
<View style={styles.unreadMessageContainer}>
<Text style={styles.unreadMessageText}>
{user.unreadMessages}
</Text>
</View>
)}
</View>
<View style={styles.userInfoContainer}>
<Text style={styles.userName}>{user.name}</Text>
<Text style={styles.lastMessage}>{user.lastMessage}</Text>
</View>
<View style={styles.messageInfoContainer}>
<Text style={styles.messageTime}>{user.lastMessageTime}</Text>
{user.hasVoiceNote && (
<Icon
               name="keyboard-voice"
               size={20}
               color="#888"
               style={styles.voiceNoteIcon}
             />
)}
</View>
</View>
))}
</ScrollView>


<View style={styles.bottom}>
      <TouchableOpacity onPress={() => navigation.navigate('Convo')} style={styles.btContainer}>

        <Icon name="chat" type="material" color="#b3b3b3" size={24} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Dial')} style={styles.iconContainer}>
        <Icon name="call" type="material" color="#b3b3b3" size={24} />
      </TouchableOpacity>
      <View style={styles.circleContainer}>
        <TouchableOpacity style={styles.circle}>
          <Icon name="add" type="material" color="#fff" size={24} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="notifications" type="material" color="#b3b3b3" size={24} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Icon name="settings" type="material" color="#b3b3b3" size={24}  />
      </TouchableOpacity>
    </View>

</View>


  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10
  },

  top: {

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10

  },

  welcomeMessage: {
    flexDirection: 'column',
    alignItems: 'start',
    alignContent: 'start',
    // backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10
  },
  userImage: {
    borderRadius: 50,
    marginRight: 10,
    width: 50,
    height: 50
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16
    
  },

  userName2: {
    fontWeight: 'regular',
    fontSize: 12,
    color: 'gray'
    
  },

  bar: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EBECF0",
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 12,
    marginHorizontal: 16,
    marginVertical: 8,
  },
  iconContainer: {
    marginRight: 12,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: "black",
  },

  searchMessage: {
    marginTop: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10
  },
  friendsActivities: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f9f9f9'
    },
    heading: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10
    },

    input: {
        fontSize: 18,
        color: 'black',
      },

      icon: {
        marginHorizontal: 10,
      },
    scrollContainer: {
    marginTop: 10,
    maxHeight: 70,

    },
    friendImage: {
    width: 50,
    height: 50,
    marginRight: 15,
    borderRadius: 25,
    },

    pinnedMessage: {
    marginTop: 20,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'start',
    marginBottom: 20
    },
    userProfileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      borderWidth: 2,
      borderColor: '#3B60E4',
      marginRight: 10,
    },
    pinnedMessageContent: {
    flex: 0,
    flexDirection: 'column',
    justifyContent: 'center',
   


    },
    pinnedTime: {
    color: '#888',
    fontSize: 12,
    },

    pinned: {
      color: '#3B60E4',
      fontSize: 12,
      },
  
    userContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
      marginLeft: 12
      },
      userImageContainer: {
      position: 'relative',
      },
      userImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      },
      unreadMessageContainer: {
      backgroundColor: 'red',
      position: 'absolute',
      top: -5,
      right: -5,
      borderRadius: 20,
      width: 20,
      height: 20,
      justifyContent: 'center',
      alignItems: 'center',
      },
      unreadMessageText: {
      color: '#fff',
      fontWeight: 'bold',
      },
      userInfoContainer: {
      flex: 1,
      marginLeft: 10,
      },
      userName: {
      fontSize: 16,
      fontWeight: 'regular',
      },
      lastMessage: {
      color: '#888',
      },
      messageInfoContainer: {
      alignItems: 'flex-end',
      },
      messageTime: {
      color: '#888',
      fontSize: 12,
      marginBottom: 5,
      },
      voiceNoteIcon: {
      marginTop: 5,
      color: '#3B60E4'
      },

      bottom: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 80,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        elevation: 2,
      },
      btContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
      },
      circleContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
      },
      circle: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: "#3B60E4",
        alignItems: 'center',
        justifyContent: 'center',
      },

      all: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 50,
        paddingHorizontal: 10,
      },
      titleContainer: {
        flex: 0,
        marginLeft: 10,
      },
      title: {
        fontSize: 16,
        color: '#333',
        fontWeight: 'regular',
      },
    });
    

    export default User;
