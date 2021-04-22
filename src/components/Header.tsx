import React,{ useEffect,useState}  from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';
import colors from '../styles/colors';

import userImage from '../assets/perfil.png';
import fonts from '../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function Header(){
    const [name, setName] = useState<string>();

    useEffect(()=>{
       async function loadName() {
           const user = await AsyncStorage.getItem("@plantManager:nome");
           setName(user || '')
       } 
       loadName();
    },[])

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>Olá,</Text>
                <Text style={styles.name}>{name}</Text>
            </View>
            <Image source={userImage} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        flexDirection:'row',
        justifyContent: 'space-between',
        marginTop:20,
        paddingVertical:20
        
    },
    image:{
        borderRadius:40,
        width:80,
        height:80
    },
    title:{
        fontFamily:fonts.text,
        color:colors.heading,
        fontSize: 32
    },
    name:{
        fontFamily:fonts.heading,
        color:colors.heading,
        fontSize: 32,
        lineHeight:35
    }
})