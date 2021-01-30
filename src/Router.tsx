import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import CategoryScreen from './container/Category';
import ProductDetailsScreen from './container/ProductDetails';
import ProductScreen from './container/Product';

const Stack = createStackNavigator();

interface AppNavigationProps {}

const AppNavigation: React.FC<AppNavigationProps> = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={'Category'} headerMode="none">
                <Stack.Screen name='Category' component={CategoryScreen} />
                <Stack.Screen name='Product' component={ProductScreen} />
                <Stack.Screen name='ProductDetails' component={ProductDetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation;