import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';
import { checkForUpdateAsync } from 'expo/build/Updates/Updates';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';


export default function App() {
  // const [outputText, setOutputText] = useState('your app!');
  const [courseGoals, setCourseGoals] = useState([]);

  //btn add
  const addGoalHandler = goalTitle => {
    setCourseGoals( (courseGoals)=> [...courseGoals, { id: Math.random().toString(),  value:  goalTitle} ]);
  }//add
  //remove
  const removeGoalHandler = goalId =>{
    setCourseGoals( (courseGoals)=>{
      return courseGoals.filter( g => g.id !== goalId);
    });
  }//remove

  return (
    //style prop always wait for JS obj inside it
    //inside style JS obj js layout codes  as like as css but in realty JS codes as similar asCSS
    //not writing px   -->write just numbers
    //react Native uses flexbox
    <View style={styles.screen}>

      <GoalInput onAddGoal={addGoalHandler} />
      <ScrollView>
        <GoalItem onDelete={removeGoalHandler} title={courseGoals}/>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },



  // container: {
  //   flex: 1,
  //   backgroundColor: '#fff',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
});
