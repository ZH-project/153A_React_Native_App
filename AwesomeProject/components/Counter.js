import React, {useState} from 'react';
import {Text, TextInput, SafeAreaView, Button} from 'react-native';
import Custom from './CustomComponent';

const Counter = () => {
    const [text, setText] = useState('');
    const [number, setNumber] = useState(0);
    return (
        <SafeAreaView style={{padding: 10, fontSize: 30}}>
            <TextInput
                style={{height: 60, fontSize:30}}
                placeholder="Placeholder for TextInput"
                onChangeText={newText => {setText(newText)}}
                defaultValue={text}
            />
            <Text style={{padding: 10, fontSize: 30}}>
                Your input is: {text}              
            </Text>
            <Custom  text={text} />
            <Text>Total Number is: {number}
            </Text>
            <Button title='Add' onPress = {() => {setNumber(number+1)}}/>
            <Button title='Delete' onPress = {() => {setNumber(number-1)}}/>
        </SafeAreaView>
  );
};

export default Counter;