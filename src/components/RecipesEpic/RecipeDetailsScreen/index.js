import React, {useEffect} from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {selectSignleRecipeInfoFromStore} from '../../../redux/selectors'
import {singleRecipeDetail} from '../../../api/recipes'
import {useDispatch, useSelector} from 'react-redux'

const RecipesDetailsScreen = ( {navigation, route} ) => {

  const id = route.params.id
  const actionDispatch = useDispatch()
  const RecetteInfo = useSelector(selectSignleRecipeInfoFromStore)
  useEffect(() => {
    singleRecipeDetail(actionDispatch, id)
  }, [])

  return (
    <View style={{backgroundColor: '#000', height: 300}}>
      <View style={{height: 300, padding: 10, backgroundColor: 'black'}}>
         <Image source = {{uri: RecetteInfo.image}} style = {{ height: 315, width: '100%'}} resizeMode="contain"/>
         <Text style={{fontWeight: 700, marginBottom: 25, color: 'black', textAlign: 'center', fontSize: 24}}>{RecetteInfo.title}</Text>
      </View>
      {/* <View style={{paddingTop: 25}}>
        {RecetteInfo.extendedIngredients.map((item) => {
          return <Text>{item.name}</Text>
        })}
      </View> */}
    </View>
  );
};









export default RecipesDetailsScreen;
