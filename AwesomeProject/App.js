import React from 'react';
import {View,Text} from 'react-native';
import RealApp from './components/StackDemo'


const App = () => {
    return (
        <View style={{flex:1}}>
            <Text style={{textAlign:'center',fontSize:40}}>CA1 Initial Version of the Project</Text>
            <RealApp/>
        </View>

    )
}
export default App
