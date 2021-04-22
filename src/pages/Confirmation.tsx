import { useNavigation } from '@react-navigation/core';
import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    Text,
    View
} from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

export function Confirmation() {
    const navigation = useNavigation();
    function clicar() {
        navigation.navigate('PlantSelect');
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.emoji}>
                    😁
                </Text>

                <Text style={styles.title}>
                    Prontinho
                </Text>

                <Text style={styles.subtitle}>
                    Agora vamos começar a cuidar das suas plantinhas com muito cuidado
                </Text>

                <View style={styles.btnFooter}>
                    <Button title="Continuar"
                        onPress={clicar} />
                </View>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.heading,
        lineHeight: 38,
        marginTop: 15,
        fontFamily: fonts.heading
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 17,
        fontFamily: fonts.text,
        paddingHorizontal: 20,
        color: colors.heading,
        marginTop: 15
    },
    emoji: {
        fontSize: 80,
    },
    btnFooter: {
        height: 56,
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 50
    }
})