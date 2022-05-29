import React, { Component } from 'react';
import { View, Text, Image, ScrollView, Button } from 'react-native';
import Header from '../../Components/Header.js';


class Sobre extends Component {
    render() {

        let localLoja = require('../../Images/interiorBaazar.jpg');

        return (
            <View>
                <ScrollView>
                    
                    <Header></Header>

                    <Text style={{ fontSize: 35, marginTop: 30, marginLeft: 10, marginBottom: 40, textAlign: "left", fontWeight: "bold" }}>Sobre nós</Text>
                    
                    <Image
                        style={{ width: 400, height: 330, marginHorizontal: 22, marginBottom: 40 }}
                        source={localLoja}
                    />



                    <Text style={{ fontSize: 20, marginHorizontal: 30, marginBottom: 15, alignText: 'center' }}>A loja Baazar foi inaugurada no Shopping Ibirapuera, em São Paulo, no dia 31 de agosto de 1976. Foi também a primeira loja da rede a ser inaugurada na América Latina.
                    Atualmente a empresa tem 290 lojas em 101 cidades, atendidas por mais de 22 mil associados e que recebem cerca de um milhão de clientes por dia. Em 2013, contratou cerca de 2500 funcionários e conta com 60% do seu staff com menos de 25 anos.</Text>
 
                </ScrollView>

            </View>
        )
    }
}
//
export default Sobre;