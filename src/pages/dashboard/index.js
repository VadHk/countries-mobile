import React from "react";
import { View, SafeAreaView, FlatList, Text, TouchableOpacity } from "react-native";
import CountryService from "../../services/countries_service";
import Country from "../../models/country_model";
import styles from "./style";

export default class Dashboard extends React.Component{
    constructor(props){
        super(props);

        this.state = {};
    }

    render(){
        return (
            <SafeAreaView style={styles.wrapper}>
                <View style={styles.container}>
                    <CountryService>
                        {({ data, error, loading }) => {
                            const countryList = data && data.Country;
                            const countries = [];

                            countryList && countryList.forEach(element => {
                                let languages = [];

                                element.officialLanguages.forEach(element => {
                                    languages.push({id: element._id, name: element.name});
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

                            if(loading) {
                                return (<Text>Loading...</Text>);
                            }
                        
                            if(error) {
                                return (<Text>Something went wrong:( Try again later...</Text>);
                            }

                            // Fake data
                            // countries.push(
                            //     new Country(
                            //         1,
                            //         'Ukrane',
                            //         'Kiev',
                            //         [{id: 1, name: 'Ukrainian'}]
                            //     )
                            // );

                            // console.log(countries);
                        
                            return (
                                <View>
                                    <FlatList
                                        data={countries}
                                        renderItem={({item}) => {
                                            return(this.listItem(item));
                                        }}
                                        keyExtractor={item => item.id.toString()}
                                    />
                                </View>
                            );
                        }}
                    </CountryService>
                </View>
            </SafeAreaView>
        );
    }

    listItem = (item) => {
        return (
            <TouchableOpacity onPress={()=> {
                
                this.props.navigation.navigate('CountryDetail', { country: item });
            }}>
                <View style={styles.listItem}>
                    <Text style={styles.listItemTitle}>{item.name}</Text>
                    {item.capital != '' ? <Text style={styles.listItemSubtitle}>{item.capital}</Text> : null}
                </View>
            </TouchableOpacity>
        );
    }
}