import React from "react";
import { View, SafeAreaView, FlatList, Text, TouchableOpacity } from "react-native";
import Header from "../../components/header";

export default class CountryDetail extends React.Component{
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        const {country} = this.props;

        return(<SafeAreaView>
            <Header title = {country.name} />
            <View>
                <Text>Official Languages</Text>
                <FlatList
                    data={country.languages}
                    renderItem={({item}) => {
                        return(<View>
                            <Text>item.name</Text>
                        </View>);
                    }}
                    keyExtractor={item => item.id.toString()}
                />
            </View>
        </SafeAreaView>);
    }
}