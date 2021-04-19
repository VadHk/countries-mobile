import React from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
import Header from "../../components/header";
import styles from "./style";

export default class CountryDetail extends React.Component{
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        const {country} = this.props;

        return(<SafeAreaView style={styles.wrapper}>
            <Header title = {country.name} />
            <View style={styles.container}>
                <Text style={styles.title}>Official Languages</Text>
                <FlatList
                    data={country.languages}
                    renderItem={({item}) => {
                        return(<View style={styles.listItem}>
                            <Text style={styles.listItemTitle}>{item.name}</Text>
                        </View>);
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </SafeAreaView>);
    }
}