import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, FlatList, Image, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ChatListScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');


const chatList = [
  {
    name: 'Alice',
    lastMessage: 'Hi, how are you?',
    time: '2 hours ago',
    unreadCount: 2,
    image: require('../assets/images/friend1.jpeg')
  },
  {
    name: 'Bob',
    lastMessage: 'Can we meet tomorrow?',
    time: '1 day ago',
    unreadCount: 0,
    image: require('../assets/images/friend2.jpg')
  },
  {
    name: 'Charlie',
    lastMessage: 'I shant be coming home tonight',
    time: '3 days ago',
    unreadCount: 1,
    image: require('../assets/images/friend3.jpg')
  },
  {
    name: 'Steve Patt',
    lastMessage: 'Mom is sick, she needs her medication',
    time: '3 days ago',
    unreadCount: 1,
    image: require('../assets/images/2.jpg')
  },
  {
    name: 'Ade Bello-Smith',
    lastMessage: 'Please, order me a Pizza!',
    time: '3 days ago',
    unreadCount: 1,
    image: require('../assets/images/user2.jpeg')
  },
  {
    name: 'Raja Baubahali',
    lastMessage: 'Please check your email',
    time: '3 days ago',
    unreadCount: 1,
    image: require('../assets/images/friend5.jpg')
  },
  {
    name: 'Michelle Johnson',
    lastMessage: 'What do you think of this idea?',
    time: '2 days ago',
    unreadCount: 1,
    image: require('../assets/images/friend3.jpg')
  },
  {
    name: 'Elijah West',
    lastMessage: 'Partying tonight? Holla back!',
    time: '3 days ago',
    unreadCount: 1,
    image: require('../assets/images/friend4.jpg')
  },
  {
    name: 'Palmer King xoxo',
    lastMessage: 'What do you think of this idea?',
    time: '3 days ago',
    unreadCount: 1,
    image: require('../assets/images/friend6.jpg')
  },
];
  const renderItem = ({ item }) => (
    <TouchableHighlight
      style={styles.chatItem}
      underlayColor="#e8e8e8"
      activeOpacity={0.7}
      onPress={() => console.log('Chat item pressed!')}
    >
      <View style={styles.chat}>
        <Image source={item.image} style={styles.image} />
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.lastMessage}>{item.lastMessage}</Text>
        </View>
        <View style={styles.rightContent}>
          <Text style={styles.time}>{item.time}</Text>
          {item.unreadCount > 0 && <View style={styles.unreadIndicator} />}
        </View>
      </View>
    </TouchableHighlight>
  );

  return (
    <View style={styles.container}>
      {/* Search bar code here... */}
      <FlatList
        data={chatList}
        keyExtractor={(item) => item.name}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />
<View style={styles.bottom}>
<View style={styles.circleContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Convo')} style={styles.circle}>

        <Icon name="chat" type="material" color="#fff" size={24} />
      </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Dial')} style={styles.Container}>
        <Icon name="call" type="material" color="#b3b3b3" size={24} />
      </TouchableOpacity>
      
        <TouchableOpacity style={styles.circle2}>
          <Icon name="add" type="material" color="gray" size={24} />
        </TouchableOpacity>
  
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
  },
  listContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  chatItem: {
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 8,
    elevation: 2,
  },
  chat: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 16,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    color: '#666',
    fontSize: 14,
  },
  rightContent: {
    flex: 1,
    alignItems: 'flex-end',
  },
  time: {
    color: '#666',
    fontSize: 12,
    textAlign: 'right',
  },
  unreadIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#007aff',
    marginLeft: 8,
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

export default ChatListScreen;
