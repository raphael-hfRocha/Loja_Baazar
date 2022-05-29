import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons'

import Home from './src/pages/Home/Home'
import Sobre from './src/pages/Sobre/index';
import Cartoes from './src/pages/Cartoes/cartoes';
import Categorias from './src/pages/Categorias/categorias';


const Tab = createBottomTabNavigator();

const icons = {
    Home: {
      name: 'ios-home'
    },
    Categorias: {
      name: 'ios-list'
    },
    Sobre: {
      name: 'ios-people'
    },
    Cartoes: {
      name: 'ios-card'
    }
  };


function App() {
  
    return (
      <NavigationContainer>
        <Tab.Navigator 
          screenOptions={ ({route}) => ({
            tabBarIcon: ({ color, size }) => {
              const { name } = icons[route.name];
              return <Icon name={name} color={color} size={size} />
            }
          })  }
          tabBarOptions={{
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Categorias" component={Categorias} />
          <Tab.Screen name="Sobre" component={Sobre} />
          <Tab.Screen name="Cartoes" component={Cartoes} />
        </Tab.Navigator>
      </NavigationContainer>



    
    );
}

export default App;