import { StyleSheet, Text, View, Image } from "react-native";

const Tarjeta = (props) => {
    
    return(
    <View style={styles.card}> 
       <Image style={styles.imageStyle} source={props.urlimag} />
       <Text style={styles.titleDescip}>Descripcion: </Text>
       <Text style={styles.title}> {props.texto} </Text>
    </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#0E0E0E",
        width: 150,
        height: 273,
        borderWidth: 3,
        borderColor: "#252525",
        borderRadius: 9,
  
    },
    title: {
        fontSize: 10,
        color: "#fff",
        textAlign: "justify",
        margin: 5,
    },
    imageStyle:{
        width: 144,
        height: 188,
        borderTopLeftRadius: 9,
        borderTopRightRadius: 9,
    },
    titleDescip:{
        fontSize: 10,
        color: "#fff",
        fontWeight: "bold",
        marginLeft: 5,
        marginTop: 5
    }
});

export default Tarjeta;