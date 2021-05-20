import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';



const Book = (props) => {
    return (
        <View style={styles.imgBox}>
        <Image style={styles.bookImg} source={{ uri: props.imageuri }} />
        <Text size={13} numberOfLines={1} center style={styles.bookText}>
          {props.bookName}
        </Text>
      </View>
    );
};

export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
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
