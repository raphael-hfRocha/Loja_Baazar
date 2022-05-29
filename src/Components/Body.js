import React, { Component } from 'react';
import { View, Image, Text, ScrollView, StatusBar, Button, Alert } from 'react-native';
import body from '../Styles/corpo.js';

class Body extends Component {
    render() {

        let localLogo = require('../Images/BAAZAR.png');
        let localBlusaInverno = require('../Images/blusaInverno.jpg')
        let localCasacoInverno = require('../Images/casacoInverno.jpg');
        let localCamisaFlorida = require('../Images/camisaFlorida.jpg');
        let localCasacoMarrom = require('../Images/casacoMarrom.jpg');
        let localCalcaAlfaiataria = require('../Images/calcaAlfaiatariaVerde.jpg');
        let localBlazzerAzulMarinho = require('../Images/blazzerAzulMarinho.jpg');

        const blusaInverno =()=>{
            Alert.alert('Blusa de inverno', 'O tecido é maravilhoso, um tricô bem macio e quente para esquentar as noites mais geladas desta estação sem nenhum esforço.')
        }
        const camisaFlorida =()=>{
            Alert.alert('Camisa Florida', 'Camisa masculina confeccionada em tecido plano leve. Possui caimento soltinho. Sua estampa moderna em floral. Sua manga é curta e a gola esporte. Seu fechamento é frontal com botões.')
        }
        const casacoMarromFeminino =()=>{
            Alert.alert('Casaco Marrom Feminino', 'Casaco feminino com bolsos laterais e fechamento frontal por botões.')
        }
        const casacoInverno =()=>{
            Alert.alert('Casaco de Inverno', 'Elegante casaco sobretudo masculino. Modelo indicado meia estação outono/inverno')
        }
        const calcaAlfaiataria =()=>{
            Alert.alert('Calça Alfaiataria Verde', 'Calça Feminina modelo Alfaiataria, possui Zíper Na Parte Da Frente com Fechamento De Botão')
        }
        const blazzerAzulMarinho =()=>{
            Alert.alert('Blazer Azul Marinho', 'Blazer com 2 Botões e 1 Abertura, na cor Azul Marinho. O blazer masculino é aquela peça coringa da moda. Ele deixa seu look muito mais elegante, uma peça versátil, que traz um equilíbrio entre o rústico e o sofisticado. Ela permite criar looks que servem tanto para o trabalho ou passeio, sempre com uma pegada despojada e cool')
        }

return (

	<View>
                <StatusBar
                    backgroundColor="black"
                    barStyle="default"
                    hidden={false}
                    animated={true} 
                />
                <ScrollView style={{ marginBottom: 145 }}>
                    <Image
                        style={{ width: 325, height: 62, marginHorizontal: 55, marginBottom: 30, marginTop: 40 }}
                        source={localLogo} />
                    <Text style={body.categoria}>Novidades</Text>
                    <Image
                        style={{ width: 340, height: 405, marginHorizontal: 55, marginLeft: 60, marginTop: 20 }}
                        source={localBlusaInverno} />
                    <Text style={body.descricao}>Blusa de Inverno</Text>
                    <Text style={body.preco}>R$291,02</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={blusaInverno} />
                    </View>
                    <Image
                        style={{ width: 340, height: 405, marginHorizontal: 55, marginLeft: 60, marginTop: 20 }}
                        source={localCamisaFlorida} />
                    <Text style={body.descricao}>Camisa Florida</Text>
                    <Text style={body.preco}>R$278,25</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={camisaFlorida} />
                    </View>
                    <Image
                        style={{ width: 340, height: 485, marginHorizontal: 55, marginLeft: 60, marginTop: 20 }}
                        source={localCasacoMarrom} />
                    <Text style={body.descricao}>Casaco Marrom Feminino</Text>
                    <Text style={body.preco}>R$107,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={casacoMarromFeminino} />
                    </View>
                    <Image
                        style={{ width: 340, height: 405, marginHorizontal: 55, marginLeft: 60, marginTop: 20 }}
                        source={localCasacoInverno} />
                    <Text style={body.descricao}>Casaco de inverno</Text>
                    <Text style={body.preco}>R$150,00</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={casacoInverno} />
                    </View>
                    <Image
                        style={{ width: 340, height: 405, marginHorizontal: 55, marginLeft: 60, marginTop: 20 }}
                        source={localCalcaAlfaiataria} />
                    <Text style={body.descricao}>Calça Alfaiataria Verde</Text>
                    <Text style={body.preco}>R$219,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={calcaAlfaiataria} />
                    </View>
                    <Image
                        style={{ width: 340, height: 425, marginHorizontal: 55, marginLeft: 60, marginTop: 20 }}
                        source={localBlazzerAzulMarinho} />
                    <Text style={body.descricao}>Blazer Azul Marinho</Text>
                    <Text style={body.preco}>R$147,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={blazzerAzulMarinho} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default Body;