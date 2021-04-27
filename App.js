//@Bases

import React from "react";
import { StyleSheet, View } from "react-native";

//redux

import { Provider } from "react-redux";

//@components

import store from "./src/redux/store";
import RecipesListScreen from "./src/components/RecipesEpic/RecipesListScreen";
import RecipesDetailsScreen from "./src/components/RecipesEpic/RecipeDetailsScreen";

//@navigation

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
// import HomeScreen from "./src/components/homeScreen";

const {Navigator, Screen} = createStackNavigator();

// const Root = () => (
  // <Navigator>
     {/* <Screen name="RecipesList" component={RecipesListScreen} /> */}
     {/* <Screen name="RecipesDetails" component={RecipesDetailsScreen} /> */}
  {/* </Navigator> */}
// )

export default function App() {
  return (
    <Provider store={store}>
      {/* <View style={styles.container}> */}
        <NavigationContainer>
          <Navigator>
            {/* <Screen name="Home" component={HomeScreen} /> */}
            {/* <Screen name="Root" component={Root} /> */}
            <Screen name="RecipesList" component={RecipesListScreen} />
            <Screen name="RecipesDetails" component={RecipesDetailsScreen} />
          </Navigator>
        </NavigationContainer>
      {/* </View> */}
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 20,
  },
});
