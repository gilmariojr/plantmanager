import React from 'react';
import {
    Text,
    StyleSheet,
    View,
    Image
} from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import colors from '../styles/colors';
import fonts from '../styles/fonts';

interface PlantProps extends RectButtonProps {
    data: {
        name: string;
        photo: string;
    }
}

export const PlantCardPrimary = ({ data, ...rest }: PlantProps) => {
    return (
        <RectButton
            style={ styles.container}>
            <Text style={ styles.text}>
                {data.name}
            </Text>
        </RectButton>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: '45%',
        backgroundColor:colors.background,
        borderRadius:20,
        paddingVertical: 20,
        alignItems:'center',
        margin: 20        

    },
    text: {
        fontFamily: fonts.text,
        color: colors.green_dark,
        fontSize: 20
    }
})