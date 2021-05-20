import React, { useState } from "react";
import { View, Text, Button, Image, StyleSheet, StatusBar, FlatList, TouchableOpacity, Pressable,
ScrollView } from 'react-native';
import { useTheme, useNavigation } from '@react-navigation/native';

import Book from './Components/Book'


const bookDetails = () => {
  // navigation.push('Details', { props });
  navigation.navigate("Details")
};

const Home = ({navigation}) => {
  const [selectedId, setSelectedId] = useState(null);
  const { colors } = useTheme();
  const theme = useTheme();
  
  
const getGreeting = () => {
  const hours = (new Date()).getHours();
  if (hours < 12) {
    return 'Good Morning';
  }
  if (hours >= 12 && hours <= 17) {
    return 'Good Afternoon 1';
  }
  return 'Good Evening';
};

    return (
      <View style={styles.container}>
        <StatusBar barStyle= { theme.dark ? "light-content" : "dark-content" }/>
        <Text style={{color: colors.text}}>Home Screen</Text>

      <ScrollView scrollEventThrottle={16}>
      <View>
        <Text> Reading </Text>
      </View>
      <View style={{height: 180, marginTop: 20, marginLeft: 5, backgroundColor: 'white'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>

          <Book navigation={navigation} imageuri={'https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png'} bookName='Book 1'/>
          <Book navigation={navigation} imageuri={'https://reactnative.dev/img/tiny_logo.png'} bookName='Book 2'/>
          <Book navigation={navigation} imageuri={'https://reactnative.dev/img/tiny_logo.png'} bookName='Book 3'/>
          <Book navigation={navigation} imageuri={'https://reactnative.dev/img/tiny_logo.png'} bookName='Book 4'/>
          <Book navigation={navigation} imageuri={'https://reactnative.dev/img/tiny_logo.png'} bookName='Book 5'/>


        </ScrollView>
      </View>

      <View>
        <Text> Completed</Text>
      </View>

      <View style={{height: 180, marginTop: 20, marginLeft: 5, backgroundColor: 'white'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>

        <Book navigation={navigation} imageuri={'https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png'} bookName='Book 1'/>
          <Book navigation={navigation} imageuri={'https://reactnative.dev/img/tiny_logo.png'} bookName='Book 2'/>
          <Book navigation={navigation} imageuri={'https://reactnative.dev/img/tiny_logo.png'} bookName='Book 3'/>
          <Book navigation={navigation} imageuri={'https://reactnative.dev/img/tiny_logo.png'} bookName='Book 4'/>
          <Book navigation={navigation} imageuri={'https://reactnative.dev/img/tiny_logo.png'} bookName='Book 5'/>


        </ScrollView>
      </View>

      <View>
        <Text> Whishlist</Text>
      </View>

      <View style={{height: 180, marginTop: 20, marginLeft: 5, backgroundColor: 'white'}}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>

        <Book navigation={navigation} imageuri={'https://www.asme.org/getmedia/c2c8ea5a-b690-4ba7-92bb-34bd1432862b/book_guide_hero_books.png?width=300&height=315&ext=.png'} bookName='Book 1'/>
          <Book navigation={navigation} imageuri={'https://reactnative.dev/img/tiny_logo.png'} bookName='Book 2'/>
          <Book navigation={navigation} imageuri={'https://reactnative.dev/img/tiny_logo.png'} bookName='Book 3'/>
          <Book navigation={navigation} imageuri={'https://reactnative.dev/img/tiny_logo.png'} bookName='Book 4'/>
          <Book navigation={navigation} imageuri={'https://reactnative.dev/img/tiny_logo.png'} bookName='Book 5'/>


        </ScrollView>
      </View>
      </ScrollView>
      
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  imgBox: {
    marginRight: 4,
    borderRadius: 10,
    shadowRadius: 3,
    shadowOpacity: 0.3,
    shadowOffset: { width: 3, height: 3 },
    flex: 2,
    paddingTop: 5,
    paddingLeft: 5,
    paddingRight: 5,
  },
  bookImg: {
    width: 130,
    height: 140,
    borderRadius: 10,
    flex: 1,
  },
  bookText: {
    marginRight: 4,
    paddingLeft: 5,
    marginTop: 4 / 2,
    alignContent: 'center',
  },
});


export default Home;





