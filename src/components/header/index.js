import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

export default Header = ({ title }) => {
    return(<View style={styles.container}>
        <Text style={styles.text}>{title}</Text>
    </View>);
}