import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, FlatList} from 'react-native';
// import du component home qui contient les boutons
import Home from './components/Home';


class App extends React.Component{
    render(){ 
    return(
        <View style={styles.ecran}>
             <View style={styles.entete}>
                    <Text style={styles.titre}>PROJET SJP5 </Text>
             </View>
             <View style={styles.container}>
                    <View style={styles.gauche}>
                        <View style={[styles.contenu, {borderColor: "black",backgroundColor:"aliceblue"}]}>
                        </View>
                        <View>
                           <Home/>
                        </View>
                    </View> 
                    <View style={styles.centre}>
                        <View style={styles.buttoncenter}>
                            <TouchableOpacity onPress={()=>alert('faire passer le texte de gauche à droite')}>
                                <Text style={{fontSize: 30, color: 'dimgray'}}>{">>"}</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.buttoncenter1}>
                            <TouchableOpacity onPress={()=>alert('faire passer le texte de droite à gauche')}>
                                <Text style={{fontSize: 30, color: 'dimgray'}}>{"<<"}</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.droite}>
                        <View style={[styles.contenu, {borderColor: "black",backgroundColor:"aliceblue"}]}>
                        </View>
                        <View>
                           <Home/>
                        </View>
                    </View> 
                </View>
        </View>
    )}
}
const styles = StyleSheet.create({
    ecran:{
        flex: 1,
    paddingTop: 30,
    backgroundColor: 'whitesmoke',
    flexDirection: "column",
    },
    entete:{
        flex: 1,
    justifyContent: "center",
    alignItems: "center",
    },
    titre:{
        fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    borderWidth: 3,
    paddingLeft: 20,
    paddingRight: 20,
    },
    container:{
        flex: 8,
    flexDirection: "row",
    },
    gauche:{
        flex: 5,
        marginLeft:10,
        justifyContent:'space-around',
    },
    centre:{
        flex: 1.5,
    },
    buttoncenter:{
        borderWidth: 1,
    margin: 1,
    marginTop: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
    },
    buttoncenter1:{
        borderWidth: 1,
    margin: 1,
    marginTop: 5,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: -10,
    },
    droite:{
        flex: 5,
        marginRight:10,
    },
    contenu:{
        flex:5,
        borderWidth:2,
    },
})
export default App;
