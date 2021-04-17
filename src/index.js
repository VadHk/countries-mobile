import { Component } from "react"

export default class App extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount(){}
    
    renderItem = ({ item }) => (
        <Item title={item.title} />
    );

    render(){
        return <View>
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </View>;
    }
}