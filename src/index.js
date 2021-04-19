import React from "react";

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from "./pages/dashboard";
import CountryDetail from "./pages/countryDetail";

const Stack = createStackNavigator();
const MainTheme = {
  ...DefaultTheme,
  dark: false,
  colors: {
    ...DefaultTheme.colors,
    primary: '#ffffff',
    background: '#ffffff',
  },
};
export default class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
          <NavigationContainer theme={MainTheme}>
            <Stack.Navigator>
              <Stack.Screen 
                name='Dashboard' 
                component={Dashboard} 
                options={{ headerShown: true, title: 'Countries' }}
              />
              <Stack.Screen 
                name='CountryDetail' 
                component={CountryDetail} 
                options={{ headerShown: true, title: 'Country Detail' }}
              />
            </Stack.Navigator>
          </NavigationContainer>
        );
    }
}