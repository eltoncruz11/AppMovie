import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import Tarjeta from "./components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Image style={styles.imageMenu} source={require("./assets/menu.png")} />

        <Text style={styles.title1}>Better</Text>

        <View style={styles.box}>
          <Text style={styles.title2}>Movies</Text>
        </View>
        <Image
          style={styles.imageStyle}
          source={require("./assets/User.png")}
        />
      </View>

      <View style={styles.content}>
      <ScrollView> 
        <View style={styles.conteSearch}>
          <TextInput
            placeholder="Buscar"
            placeholderTextColor="#f0f8ff"
            style={styles.search}
          />
          <Image
            style={styles.imageStyle}
            source={require("./assets/find.png")}
          />
        </View>
        <View style={styles.Catconten}>
          
       
            <Text style={styles.catText}>Actrices</Text>
            <ScrollView horizontal>
              <Tarjeta
                texto="Scarlett Ingrid Johansson es una actriz, cantante, directora, productora, modelo y empresaria estadounidense."
                urlimag={require("./assets/Scarlett.jpeg")}
              />
              <Tarjeta
                texto="Margot Elise Robbie es una actriz y productora de cine australiana. Criada en una granja, Robbie debió trabajar."
                urlimag={require("./assets/Margot-Robbie.jpg")}
              />
              <Tarjeta
                texto="Jennifer Shrader Lawrence es una actriz estadounidense. También ha incursionado en la producción."
                urlimag={require("./assets/Jennifer.jpeg")}
              />
              <Tarjeta
                texto="Emilia Isobel Euphemia Rose Clarke, conocida como Emilia Clarke, es una actriz, modelo y autora británica."
                urlimag={require("./assets/Emilia.webp")}
              />
              <Tarjeta
                texto="Sarah Joe Chamoun, es una actriz pornográfica retirada, modelo y celebridad de internet."
                urlimag={require("./assets/Mia.jpeg")}
              />
              <Tarjeta
                texto="Emily Jean Stone, más conocida profesionalmente como Emma Stone, es una actriz y productora."
                urlimag={require("./assets/Emma.jpeg")}
              />
            </ScrollView>
        </View>
        <View style={styles.Catconten}>
          <Text style={styles.catText}>Categorias</Text>
          <ScrollView horizontal>
            <Tarjeta
              texto="Ciencia ficción es la denominación de uno de los géneros derivados de la literatura de ficción."
              urlimag={require("./assets/cienciaF.jpg")}
            />
            <Tarjeta
              texto="El cine de terror es un género cinematográfico provoca en el espectador sensaciones miedo y disgusto."
              urlimag={require("./assets/Terror.jpg")}
            />
            <Tarjeta
              texto="El llamado cine de acción es un género cinematográfico con efectos especiales de estilo clásico."
              urlimag={require("./assets/Accion.jpg")}
            />
              <Tarjeta
              texto="La comedia está relacionado casi siempre con historias con final feliz."
              urlimag={require("./assets/Comedia.jpg")}
            />
            
          </ScrollView>
        </View>
        </ScrollView>
    </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    backgroundColor: "#0E0E0E",
    paddingTop: 35,
    paddingBottom: 10,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
    backgroundColor: "#000000",
    paddingTop: 18,
  },
  title1: {
    color: "#f0f8ff",
    fontSize: 20,
    fontWeight: "bold",
    padding: 5,
    marginLeft: 70,
    marginRight: 0,
  },
  title2: {
    color: "#000000",
    fontSize: 20,
    fontWeight: "bold",
  },
  box: {
    backgroundColor: "#FF9900",
    marginRight: 70,
    marginLeft: 0,
    borderRadius: 5,
    padding: 5,
  },
  imageStyle: {
    width: 30,
    height: 30,
    marginRight: 10,
    resizeMode: "stretch",
    alignItems: "center",
    marginLeft: 5,
  },
  imageMenu: {
    width: 30,
    height: 30,
    marginLeft: 10,
  },
  search: {
    borderWidth: 1,
    borderColor: "#f0f8ff",
    borderRadius: 20,
    height: 40,
    color: "#f0f8ff",
    padding: 10,
    width: 300,
  },
  conteSearch: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  Catconten: {
    marginTop: 20,
    padding: 10,
  },
  catText: {
    borderTopColor: "#f0f8ff",
    borderTopWidth: 1,
    paddingTop: 10,
    color: "#f0f8ff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
