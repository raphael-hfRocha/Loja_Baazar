import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from '../../Components/Header';
import Body from '../../Components/Body';

class Home extends Component {
    render() {
        return(

            <View>
                
                <Header></Header>

                <Body></Body>
            
            </View>
            )
    }
}

export default Home;