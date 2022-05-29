import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Alert, Button } from 'react-native';
import Header from '../../Components/Header';

class Categorias extends Component {
    render() {

        let localBlazerCinza = require('../../Images/blazerCinza.jpg');
        let localJaquetaJeans = require('../../Images/jaquetaJeansMasculina.jpg');
        let localJaquetaCamuflada = require('../../Images/jaquetaCamuflada.jpg');
        let localCalcaJeans = require('../../Images/calcaJeans.jpg');
        let localCalcaPantalona = require('../../Images/calcaPantalona.jpg');
        let localSuetermarrom = require('../../Images/SweaterFeminino.jpg');
        let localBolsaPreta = require('../../Images/bolsaPreta.jpg');
        let localCalcaJeansFeminina = require('../../Images/calcaJeansFeminina.jpg');
        let localCamisaBolinha = require('../../Images/camisaBolinha.jpg');
        let localBlazerLilas = require('../../Images/blazerLilas.jpg');
        let localJaquetaFlores = require('../../Images/JaquetaFlores.jpg');
        let localTenisMarrom = require('../../Images/tennisMarrom.png');

        const blazerCinza =()=>{
            Alert.alert('Blazer Cinza', 'Possui uma composição de 95% Algodão e 5% Linho');
        }
        const jaquetaJeans =()=>{
            Alert.alert('Jaqueta Jeans Masculina', 'Soneca Intermediário Terraplenagem moda masculina jaqueta t shirt branca');
        }
        const jaquetaCamuflada =()=>{
            Alert.alert('Jaqueta Camuflada Masculina', 'Jaqueta confeccionada em jeans com estampa camuflada e forro macio, possui bolsos frontais com ajustes e mangas longas com punho');
        }
        const calcaJeans =()=>{
            Alert.alert('Calça Jeans', 'Calça Jeans Rasgada Masculina Estilo Casual Moda Verão');
        }
        const calcaPantalona =()=>{
            Alert.alert('Calça Pantalona', 'A Calça Pantalona é peça-chave para um guarda-roupa elegante e poderoso! Sempre em tecidos mais leves ou alfaiataria é uma peça de impacto no guarda-roupa profissional e também em versões mais modernas para looks casuais. TIPOS FÍSICOS Por ter modelagem mais ampla desde a coxa até os pés, ela alonga a silhueta e equilibra coxas');
        }
        const sueterMarrom =()=>{
            Alert.alert('Suéter Marrom', 'Suéter feminino desenvolvido em tricô macio. O caimento é soltinho. O acabamento da peça é feito com pontos canelados. O decote é redondo. Possui pequenas fendas nos punhos.');
        }
        const bolsaPreta =()=>{
            Alert.alert('Bolsa Preta', 'Nosso modelo traz o diferencial para o seu look contando com o melhor material em sintético e acabamento inovador, a peça possuí fechamento em zíper para melhor proteger seus pertences, além de contar com um bolso interno também com fechamento em zíper, esbanje diversidade com nosso modelo garanta já o seu!');
        }
        const calcaJeansFeminina =()=>{
            Alert.alert('Calca Jeans', 'Calça feminina confeccionada em jeans com elasticidade. A modelagem é super skinny com cintura alta. A parte frontal tem dois três bolsos enquanto a posterior tem dois aplicados. O cós tem passantes e fechamento por botão e zíper. A barra é simples.');
        }
        const camisaBolinha =()=>{
            Alert.alert('Camisa de Bolinhas', 'Tamanhos pmg 1 2 3 Tecido algodão');
        }
        const blazarLilas =()=>{
            Alert.alert('Blazer Lilás','Modelo que deixará seu menino lindo e estilo naquelas ocasiões especiais ou no dia-a-dia.');
        }
        const jaquetaFlores =()=>{
            Alert.alert('Jaqueta Azul com flores', 'Perfeita para vestir as crianças com muito estilo e criatividade!')
        }
        const tenisBege =()=>{
            Alert.alert('Tenis Bege', ' Um visual estiloso para garantir atitude nos looks da criançada, conta com tira de contato ajustável e alça no calcanhar, que facilitam o calce.')
        }

        return (

            <View>

                <ScrollView>

                    <Header></Header>

                    <Text style={{ fontSize: 50, marginTop: 30, marginBottom: 17, textAlign: "center", fontWeight: "italic" }}>Categorias</Text>
                    
                    <Text style={{ fontSize: 35, marginTop: 30, marginLeft: 8, marginBottom: 17, textAlign: "left", fontWeight: "bold" }}>Masculino</Text>

                    <Image
                        style={categorias.Image2}
                        source={localBlazerCinza}
                    />
                    <Text style={categorias.description}>Blazer Cinza</Text>
                    <Text style={categorias.price}>R$285,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 10 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={blazerCinza}
                        />
                    </View>
                    <Image
                        style={categorias.Image2}
                        source={localJaquetaJeans}
                    />
                    <Text style={categorias.description}>Jaqueta Jeans</Text>
                    <Text style={categorias.price}>R$258,73</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={jaquetaJeans}
                        />
                    </View>
                    <Image
                        style={categorias.Image2}
                        source={localJaquetaCamuflada}
                    />
                    <Text style={categorias.description}>Jaqueta Camuflada</Text>
                    <Text style={categorias.price}>R$ 159,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={jaquetaCamuflada}
                        />
                    </View>
                    <Image
                        style={categorias.Image2}
                        source={localCalcaJeans}
                    />
                    <Text style={categorias.description}>Calça Jeans Rasgada</Text>
                    <Text style={categorias.price}>R$89,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 6 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={calcaJeans}
                        />
                    </View>

                    <Text style={{ fontSize: 35, marginTop: 30, marginLeft: 10, marginBottom: 17, textAlign: "left", fontWeight: "bold" }}>Feminino</Text>
                    
                    <Image 
                        style={categorias.Image1}
                        source={localCalcaPantalona}
                    />
                    <Text style={categorias.description}>Calça Pantalona</Text>
                    <Text style={categorias.price}>RS169,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 8 }}>
                    <Button
                        title="Mais Informações"
                        color="#3C4142"
                        onPress={calcaPantalona}
                    />                    
                    </View>
                    <Image
                        style={categorias.Image1}
                        source={localSuetermarrom}
                    />
                    <Text style={categorias.description}>Suéter Marrom</Text>
                    <Text style={categorias.price}>129,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 8 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={sueterMarrom}
                        />
                    </View>
                    <Image
                        style={categorias.Image1}
                        source={localBolsaPreta}
                    />
                    <Text style={categorias.description}>Bolsa Preta</Text>
                    <Text style={categorias.price}>R$85,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 8 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={bolsaPreta}
                        />
                    </View>
                    <Image
                        style={categorias.Image1}
                        source={localCalcaJeansFeminina }
                    />
                    <Text style={categorias.description}>Calça Jeans</Text>
                    <Text style={categorias.price}>R$99,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 8 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={calcaJeansFeminina}
                        />
                    </View>

                    <Text style={{ fontSize: 35, marginTop: 30, marginLeft: 10, marginBottom: 17, textAlign: "left", fontWeight: "bold" }}>Infantil</Text>

                    <Image
                        style={categorias.Image1}
                        source={localCamisaBolinha}
                    />
                    <Text style={categorias.description}>Camisa Com Bolinhas</Text>
                    <Text style={categorias.price}>R$69,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 8 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={camisaBolinha}
                        />
                    </View>
                    <Image
                        style={categorias.Image1}
                        source={localBlazerLilas}
                    />
                    <Text style={categorias.description}>Blazer Lilás</Text>
                    <Text style={categorias.price}>R$89,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 8 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={blazarLilas}
                        />
                    </View>
                    <Image
                        style={categorias.Image1}
                        source={localJaquetaFlores}
                    />
                    <Text style={categorias.description}>Jaqueta Azul com Flores</Text>
                    <Text style={categorias.price}>R$89,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 8 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={jaquetaFlores}
                        />
                    </View>
                    <Image
                        style={categorias.Image1}
                        source={localTenisMarrom}
                    />
                    <Text style={categorias.description}>Tenis Bege</Text>
                    <Text style={categorias.price}>R$99,90</Text>
                    <View style={{ alignItems: "center", marginBottom: 5, marginLeft: 8 }}>
                        <Button
                            title="Mais Informações"
                            color="#3C4142"
                            onPress={tenisBege}
                        />
                    </View>
                </ScrollView>


            </View>
        )
    }
}

const categorias = StyleSheet.create({
    Image2: {
        width: 340,
        height: 465,
        marginHorizontal: 55,
        marginBottom: 5,
        marginTop: 40
    },
    Image1: {
        width: 340,
        height: 490,
        marginHorizontal: 55,
        marginBottom: 5,
        marginTop: 40
    },
    description: {
        textAlign: "center",
        fontSize: 20,
        marginTop: 17,
        fontWeight: "bold"
    },
    price: {
        textAlign: "center",
        fontSize: 20,
        marginBottom: 12,
        fontWeight: "bold"
    }
})



export default Categorias;