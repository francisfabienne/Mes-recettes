import React, {useEffect,} from "react";
import { View, StyleSheet, Button, FlatList } from "react-native";
import {recipes} from '../../../api/recipes'
import {useSelector, useDispatch} from "react-redux"
import {selectRecipesFromStore} from "../../../redux/selectors";
import RecipeItem from "./RecipeItem"

const RecipesListScreen = ( props ) => {
  const actionDispatch = useDispatch();

  //@recupères le state dans le store
  const recettes = useSelector(selectRecipesFromStore);

  //@ valider le composant quand il sera monté
  useEffect(() => {
     recipes(actionDispatch)
  }, []);



  return (
    <View style={styles.container}>
      <FlatList
        data= {recettes}
        renderItem = {({item}) => {
          return <RecipeItem item={item} navigation={props.navigation}/>
           }}
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

export default RecipesListScreen;
