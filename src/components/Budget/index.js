import React, { useState } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Modal,
    Button
} from 'react-native';

import styles from './styles'

export default (props) => {

    const [isOpen, setIsOPen] = useState(false)

    const onPress = () => {
        setIsOPen(true)
    }

    const closeModal = () => {
        setIsOPen(false)
    }

    return (
        <TouchableOpacity onPress={onPress} style={styles.main}>
            <Text style={styles.title}>Código de identificação nº 1</Text>
            <View style={styles.body}>
                <Text style={styles.field}>Vendedor: {props.seller}</Text>
                <Text style={styles.field}>Consumidor: {props.customer}</Text>
                <Text style={styles.field}>Valor: {props.value}</Text>
            </View>
            <Modal
                visible={isOpen}
                transparent={true}>
                <View style={styles.modal}>
                    <View style={styles.modalContent}>
                        <Text style={[styles.field, { marginBottom: 10 }]}>Descrição: {props.description}</Text>
                        <Button onPress={closeModal} title='Fechar' />
                    </View>
                </View>
            </Modal>
        </TouchableOpacity>
    )
}