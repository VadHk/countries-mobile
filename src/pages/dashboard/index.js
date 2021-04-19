import React from "react";
import { View, SafeAreaView, FlatList, Text, TouchableOpacity } from "react-native";
import CountryService from "../../services/countries_service";
import Country from "../../models/country_model";
import styles from "./style";
import { push } from "../../services/navigation_service";

export default class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return (<View >
            <Header title='Countries' />
            <View style={styles.container}>
                <CountryService>
                    {({ data, error, loading }) => {
                        const countryList = data && data.Country;
                        const countries = [];

                        countryList && countryList.forEach(element => {
                            let languages = [];

                            element.officialLanguages.forEach(element => {
                                languages.push(element.name);
                            });

                            countries.push(
                                new Country(
                                    element._id,
                                    element.name,
                                    element.capital,
                                    languages
                                )
                            );
                        });

                        console.log(countries);

                        if(loading) {
                            return (<Text>Loading...</Text>);
                        }
                    
                        if(error) {
                            return (<Text>Error!</Text>);
                        }
                    
                        return (<SafeAreaView>
                            <FlatList
                                data={countries}
                                renderItem={({item}) => {
                                    return(this.listItem(item));
                                }}
                                keyExtractor={item => item.id.toString()}
                            />
                        </SafeAreaView>);
                    }}
                </CountryService>
            </View>
        </View>);
    }

    listItem = (item) => {
        return (<TouchableOpacity onPress={()=> {
            // push();
        }}>
            <View style={styles.listItem}>
                <Text style={styles.listItemTitle}>{item.name}</Text>
                {item.capital != '' ? <Text style={styles.listItemSubtitle}>{item.capital}</Text> : null}
            </View>
        </TouchableOpacity>);
    }
}