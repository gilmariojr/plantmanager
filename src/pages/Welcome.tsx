import React from "react";
import {
    SafeAreaView,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    View
} from 'react-native';
import { Entypo } from '@expo/vector-icons';
import wateringImg from '../assets/watering.png'
import colors from "../styles/colors";
import { useNavigation } from "@react-navigation/core";
import fonts from '../styles/fonts'

export function Welcome() {

    const navigation = useNavigation();

    function clicar() {
        navigation.navigate('User');
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>
                    Gerencie {'\n'}
                suas plantas de {'\n'}
                forma fácil
                </Text>

                <Image source={wateringImg}
                    style={styles.image}
                    resizeMode="contain" />

                <Text style={styles.subtitle}>
                    Não esqueça mais de regar suas plantas.
                    Nós cuidamos de lembrar você sempre que precisar.
                </Text>

                <TouchableOpacity style={styles.button}
                    onPress={clicar}>
                    <Entypo name="chevron-right" style={styles.buttonIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        marginTop: 38,
        lineHeight: 38
    },
    image: {
        height: Dimensions.get('window').width * 0.7
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center'
    },
    button: {
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        width: 56,
        paddingHorizontal: 10

    },
    buttonIcon: {
        color: colors.white,
        fontSize: 26
    }
})