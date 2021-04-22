import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    TextInput,
    KeyboardAvoidingView,
    Platform,
    Alert
}
    from 'react-native';
import { Button } from '../components/Button';
import colors from '../styles/colors';
import { useNavigation } from '@react-navigation/core';
import AssyncStorage from '@react-native-async-storage/async-storage';
import fonts from '../styles/fonts';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function UserIdentification() {

    const [isFocused, setIsFocused] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [name, setName] = useState<string>();

    const navigation = useNavigation();

    function handleInputBlur() {
        setIsFocused(false);
    }
    function handleInputFocus() {
        setIsFocused(true);
    }

    function handleInputChange(value: string) {
        setIsFilled(!!value);
        setName(value);
    }

    async function clicar() {
        if(!name)
        return Alert.alert("Informar seu nome! ")

        await AsyncStorage.setItem("@plantManager:nome",name);
        
        navigation.navigate('Confirmation');
    }

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.content}>
                    <View style={styles.form}>
                        <View style={styles.head}>

                            <Text style={styles.emoji}>
                                😁
                        </Text>

                            <Text style={styles.title}>
                                Como podemos {'\n'}
                            chamar você
                        </Text>

                            <TextInput
                                style={[styles.input,
                                (isFocused || isFilled) && { borderColor: colors.green }]}
                                placeholder='Digite seu nome'
                                onBlur={handleInputBlur}
                                onFocus={handleInputFocus}
                                onChangeText={handleInputChange}
                            />
                        </View>
                        <View style={styles.btnFooter}>
                            <Button
                                title='Confirmar'
                                onPress={clicar}
                            />
                        </View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    content: {
        flex: 1,
        width: '100%'
    },
    form: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 54
    },
    head: {
        width: '100%',
        alignItems: 'center'
    },
    emoji: {
        fontSize: 44,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: colors.gray,
        color: colors.heading,
        width: '100%',
        fontSize: 18,
        marginTop: 50,
        padding: 10,
        textAlign: 'center'
    },
    title: {
        fontSize: 24,
        textAlign: 'center',
        color: colors.heading,
        fontFamily: fonts.heading,
        lineHeight: 36
    },
    btnFooter: {
        height: 56,
        width: '100%',
        paddingHorizontal: 20,
        marginTop: 20
    }
})