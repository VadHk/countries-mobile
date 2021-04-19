import React from "react";
import { View, SafeAreaView, FlatList, Text } from "react-native";
import styles from "./style";

export default class CountryDetail extends React.Component{
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        const {country} = this.props.route.params;
        console.log(this.props.route.params);

        return(
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.container}>
                    <Text style={styles.title}>{country.name} Official Languages</Text>
                    <FlatList
                        data={country.languages}
                        renderItem={({item}) => {
                            return(
                                <View style={styles.listItem}>
                                    <Text style={styles.listItemTitle}>{item.name}</Text>
                                </View>
                            );
                        }}
                        keyExtractor={item => item.id.toString()}
                    />
                </View>
            </SafeAreaView>
        );
    }
}