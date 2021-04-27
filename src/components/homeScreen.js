import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const HomeScreen = ( props ) => {
  return (
    <View style={styles.container}>
      <Text>Home recipes</Text>
      <Button 
        onPress={() => {
          props.navigation.push('Root')
        }} 
        title ="Liste de recettes" 
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
})

export default HomeScreen;
