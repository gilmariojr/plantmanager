import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native'
import colors from '../styles/colors';

interface ButtonProps extends TouchableOpacityProps {
    title: String;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.button}
            {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.green,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 16,
        marginBottom: 10,
        height: 56,
        paddingHorizontal: 10

    },
    buttonText: {
        color: colors.white,
        fontSize: 26
    }
})