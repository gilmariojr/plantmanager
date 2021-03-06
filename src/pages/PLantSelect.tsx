import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList
} from 'react-native';
import { EnvironmentButton } from '../components/EnvironmentButton';
import { Header } from '../components/Header';
import { PlantCardPrimary } from '../components/PlantCardPrimary';
import api from '../services/api';
import colors from '../styles/colors';
import fonts from '../styles/fonts';


interface EnvironmentProps {
    key: string;
    title: string;
}

interface PlantProps {
    id: string;
    name: string;
    about: string;
    water_tips: string;
    photo: string;
    environments: [string];
    frequency: {
        times: number,
        repeat_every: string;
    }
}

export function PlantSelect() {
    const [enviremonts, setEnviremonts] = useState<EnvironmentProps[]>([]);
    const [plants, setPlants] = useState<PlantProps[]>([]);
    const [filtrarPlants, setFiltrarPlants] = useState<PlantProps[]>([]);
    const [selectEnviremonts, setSelectEnviremonts] = useState('all');

    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState('all');

    function clicar(enviremonts: string) {
        setSelectEnviremonts(enviremonts);

        if (selectEnviremonts === 'all')
            return setFiltrarPlants(plants)

        const filtered = plants.filter(plant =>
            plant.environments.includes(enviremonts)
        )

        setFiltrarPlants(filtered)
    }



    useEffect(() => {
        async function fetchEnvironment() {
            const { data } = await api.get('plants_environments');
            setEnviremonts([{
                key: 'all',
                title: 'Todos'
            }, ...data]);
        }
        fetchEnvironment();
    }, [])

    useEffect(() => {
        async function fetchPlants() {
            const { data } = await api.get(`plants?_sort=name&_order=asc&_page=${page}&_limit=5`);
            setPlants(data);
            setFiltrarPlants(data);
        }
        fetchPlants();
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Header />

                <Text style={styles.title}>
                    Em qual ambiente
            </Text>
                <Text style={styles.subtitle}>
                    Voc?? quer colocar sua planta!
            </Text>
            </View>
            <View>
                <FlatList
                    data={enviremonts}
                    renderItem={({ item }) => (
                        <EnvironmentButton
                            title={item.title}
                            active={item.key === selectEnviremonts}
                            onPress={() => clicar(item.key)}
                        />
                    )} horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={styles.environmentList} />
            </View>
            <View style={styles.plants}>
                <FlatList
                    data={filtrarPlants}
                    renderItem={({ item }) => (
                        <PlantCardPrimary
                            data={item}
                        />
                    )}
                    showsVerticalScrollIndicator={false}
                    numColumns={2} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    header: {
        paddingHorizontal: 30,

    },
    title: {
        fontSize: 17,
        fontFamily: fonts.heading,
        color: colors.heading,
        lineHeight: 20,
        marginTop: 15

    },
    subtitle: {
        fontSize: 17,
        fontFamily: fonts.text,
        color: colors.heading,
        lineHeight: 20,
    },
    environmentList: {
        height: 40,
        justifyContent: 'center',
        paddingBottom: 5,
        marginLeft: 32,
        marginVertical: 32
    },
    plants: {
        flex: 1,
        paddingHorizontal: 32,
        justifyContent: 'center'
    },
})