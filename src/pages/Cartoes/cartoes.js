import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Header from '../../Components/Header';

class Cartoes extends Component {
    render() {


        let localCartoes = require('../../Images/bandeira-dos-cartoes-de-credito.png');
        
        return(

            <View>
                
                <Header></Header>

                <Text style={{ fontSize: 35, marginTop: 30, marginBottom: 120, textAlign: "center", fontWeight: "bold" }}>Formas de pagamento</Text>

                <Image 
                    style={{ widht: 120, height: 140, marginLeft: 50}}
                    source={localCartoes}
                />

                

            </View>
            )
    }
}

export default Cartoes;