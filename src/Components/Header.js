import React, { Component } from 'react';
import { View } from 'react-native';
import header from '../Styles/index.js';
import Icon from 'react-native-vector-icons/MaterialIcons'
Icon.loadFont();

class Header extends Component {
    render() {
        return(
            <View style={header.barra}>
                <Icon name="menu" style={{ top: 8 }} size={ 47 } color="#fff" />
            </View>
        );
    }
}

export default Header;
