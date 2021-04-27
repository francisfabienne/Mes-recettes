import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
// import {URL_IMAGE} from "../../../config/keys"

const RecipeItem = ({item, navigation}) => {
    return (
        <TouchableOpacity onPress={() => {
            navigation.push('RecipesDetails', {
                id: item.id
            })
          }} >
           <View style = {styles.container}>
               <View style = {{backgroundColor: '#000', paddingLeft: 10}}>
                 <Image source={{uri: item.image}} style={{ height: 65, width: 65, resizeMode: 'contain', paddingLeft: 10, borderRadius: 15 }}/>
               </View>
               <View style = {{backgroundColor: '#000', width: '100%'}}>
                 <Text style = {styles.title}>{item.title}</Text>
               </View>
           </View>
        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
  container: {
     flexDirection: 'row',
     backgroundColor: 'white',
     border: '1 solid black',
     paddingLeft: 15,
     paddingBottom: 15
  },
    thumbnail: {
      width: 90,
      height: 90
  },

  title: {
      fontSize: 15,
      fontWeight: '200',
      paddingLeft: 20,
      paddingTop: 20,
      color: "yellow"
  }
  
})


export default RecipeItem;