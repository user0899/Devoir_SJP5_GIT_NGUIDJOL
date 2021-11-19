import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity} from 'react-native';
//bouton de la partie gauche et droite
class Home extends React.Component{
    render(){
        return(
          <View Style={styles.buttonpart}>
              <View style={styles.button}><TouchableOpacity onPress={()=>alert('ajouter un element')}>
                  <Text style={styles.buttontittle}>+</Text>
                  </TouchableOpacity>
              </View>
                <View style={styles.button}><TouchableOpacity onPress={()=>alert('modifier un element')}>
                  <Text style={styles.buttontittle}>m</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.button}><TouchableOpacity onPress={()=>alert('retirer un element')}>
                  <Text style={styles.buttontittle}>-</Text>
                  </TouchableOpacity>
                </View>
              
            </View>  
        )
    }
}

const styles = StyleSheet.create({
    buttonpart: {
        flex: 1,
    marginTop: 10,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    },
    Button:{
        flex: 1,
    borderWidth: 1,
    margin: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
    },
    buttontittle:{
        borderWidth:1,
        fontSize: 50, 
        color: 'dimgray' 
    },
})

export default Home;