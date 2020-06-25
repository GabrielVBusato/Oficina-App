import React from 'react';
import {
    View,
    Text,
} from 'react-native';

import styles from './styles'

export default (props) => {
    return (
        <View style={styles.main}>
            <Text style={styles.title}>{props.title}</Text>
        </View>
    )
}