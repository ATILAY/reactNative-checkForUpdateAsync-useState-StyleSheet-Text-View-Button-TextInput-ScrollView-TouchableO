import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';


const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    function goalInputHandler(enteredText) {
        setEnteredGoal(enteredText);
    }//goal
    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder="Your Goals" style={styles.text_input} onChangeText={goalInputHandler}
                value={enteredGoal}
            />

            <Button title="ADD" onPress={() => { props.onAddGoal(enteredGoal) }} />
            {/* OR WE CAN EASILY SAY : { props.onAddGoal.bind(this,enteredGoal) } */}
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row', justifyContent: "space-between", alignItems: "center"
    },
    text_input: {
        width: 200, borderColor: 'blue', borderWidth: 1, padding: 10
    },
});

export default GoalInput;