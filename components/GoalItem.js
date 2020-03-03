import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const GoalItem = props => {
    return (

        props.title.map(g =>
            <TouchableOpacity onPress={props.onDelete.bind(this, g.id)}>
                <View key={g.id} style={styles.listStyle}><Text>{g.value}</Text></View>
            </TouchableOpacity>
        )

    );
};

const styles = StyleSheet.create({
    listStyle: {
        padding: 10,
        backgroundColor: 'lightblue',
        borderColor: 'cyan',
        borderWidth: 1,
        marginVertical: 10
    }
});
export default GoalItem;