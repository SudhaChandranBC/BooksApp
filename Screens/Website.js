import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Website = ({navigation}) => {
    return (
      <View style={styles.container}>
        <Text>Website Screen</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
        <Button
        title="Go to details screen"
        onPress={() => navigation.navigate("Details")}
      />
      </View>
    );
};

export default Website;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
