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
                <Routes.Screen name="Main" component={Main} />
                <Routes.Screen name="Profile" component={Profile} />
            </Routes.Navigator>
        </NavigationContainer>
    );
}

export default AppRoutes;