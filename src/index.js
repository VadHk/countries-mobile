import React from "react";
import { SafeAreaView, StyleSheet} from "react-native";
import Dashboard from "./pages/dashboard";

export default class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return (<SafeAreaView style={styles.container}>
            <Dashboard/>
        </SafeAreaView>);
    }
}

const styles = StyleSheet.create({})