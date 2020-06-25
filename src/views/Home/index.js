import React, { useState, useEffect } from 'react';
import {
    View,
    FlatList,
    StatusBar,
    Alert,
} from 'react-native';

import styles from './styles'

import api from '../../services/api'

import { Budget, Header } from '../../components'

export default () => {

    const [budgets, setBudgets] = useState([])

    useEffect(() => {
        const fetchBudgets = async () => {
            try {
                const response = await api.get('/codificar/oficina/proposals')
                setBudgets(response.data)
            } catch (err) {
                if (err.response) {
                    Alert.alert('Erro',
                        err.response.data.message)
                    return
                } else {
                    Alert.alert('Erro',
                        'Você não possui conexão com a internet!')
                    return
                }
            }
        }
        fetchBudgets()
    }, [])

    return (
        <View style={styles.main}>
            <StatusBar barStyle="dark-content" backgroundColor="white" />
            <Header title='Orçamentos' />
            <FlatList
                contentContainerStyle={{ flexGrow: 1, padding: 20, backgroundColor: '#ffff' }}
                data={budgets}
                renderItem={({ item }) => <Budget {...item} />}
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            />
        </View>
    )
}