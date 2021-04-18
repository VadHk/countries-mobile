import React, { Component } from "react";
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import CountriesService from "./services/countries_service";
import { gql, useQuery } from '@apollo/client';

// export default class App extends Component{
//     constructor(props){
//         super(props);

//         this.state = {
//             data: [], 
//         };
//     }

//     componentDidMount(){
//         // CountriesService.getCountries()
//         const { loading, data } = useQuery(this.GET_COUNTRIES, {fetchPolicy: "network-only"});
//         print(data);
//     }

//     DATA = [
//         {
//             id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//             title: 'First Item',
//         },
//         {
//             id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//             title: 'Second Item',
//         },
//         {
//             id: '58694a0f-3da1-471f-bd96-145571e29d72',
//             title: 'Third Item',
//         },
//     ];

//     GET_COUNTRIES = gql`
//         query {
//             Country {
//             _id
//             name
//             capital
//             officialLanguages {_id, name}
//             }
//         }
//     `;

//     render(){
//         // const [getDog, { loading, data }] = useQuery(this.GET_COUNTRIES);
//         // print(data);
//         return(<View>
//             <SafeAreaView>
//                 <FlatList
//                     data={this.DATA}
//                     renderItem={({item}) => {
//                         return(<View>
//                             <Text>{item.title}</Text>
//                           </View>)
//                     }}
//                     keyExtractor={item => item.id}
//                 />
//             </SafeAreaView>
//         </View>);
//     }
// }


export default App = () => {
    // const [] = useState([]);

    const GET_COUNTRIES = gql`
        query {
            Country {
            _id
            name
            capital
            officialLanguages {_id, name}
            }
        }
    `;

    const { data } = useQuery(GET_COUNTRIES);
    console.log(data);

    return(<View>
        <SafeAreaView>
            <FlatList
                data={this.DATA}
                renderItem={({item}) => {
                    return(<View>
                        <Text>{item.title}</Text>
                      </View>)
                }}
                keyExtractor={item => item.id}
            />
        </SafeAreaView>
    </View>);
}