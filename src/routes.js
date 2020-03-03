import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'

import Main from './pages/Main';
import Profile from './pages/Profile';

const Routes = createStackNavigator();

function AppRoutes() {
    return ( 
        <NavigationContainer>
            <Routes.Navigator>
                <Routes.Screen name="Dev360" component={Main} options={{
                    headerStyle: {backgroundColor: '#7D40E7'},
                    headerTintColor: '#FFF'
                }} />
                <Routes.Screen name="Perfil Github" component={Profile} />
            </Routes.Navigator>
        </NavigationContainer>
    );
}

export default AppRoutes;