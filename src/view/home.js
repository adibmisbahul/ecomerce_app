import { StyleSheet, Text, View, Image } from "react-native";

import SepatuImage from "../image/shoes.png";
import Category from "../component/category";
const Product = [{}];

export default function Home() {
  return (
    <>
      <View style={styles.container2}>
        <View style={styles.diskonWrap}>
          <View style={styles.wrapdis}>
            <Text>50%</Text>
            <Text>OFF</Text>
          </View>
          <Image source={SepatuImage} style={styles.shoes} />
        </View>
      </View>
      <Category/>
      <View style={styles.containerProduk}>
        <View style={styles.wrapProduk}>
          <View style={styles.produkUp}></View>
          <View style={styles.produkUp}></View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container2: {
    width: "100%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "center",
  },

  diskonWrap: {
    width: "85%",
    height: 100,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#81CAE1",
  },

  wrapdis: {
    width: 80,
    height: 80,
    borderRadius: 10,
    // backgroundColor: "red",
  },

  shoes: {
    width: 120,
    height: 120,
  },

  containerProduk: {
    width: "100%",
    height: "auto",
    alignItems: "center",
  },

  wrapProduk: {
    width: "85%",
    height: 150,
    flexWrap: "wrap",
    marginTop: 10,
    gap: 10,
  },

  produkUp: {
    width: "48%",
    height: 150,
    borderRadius: 10,
    backgroundColor: "white",
    shadowOpacity: 0.17,
    shadowRadius: 3.05,
    elevation: 4,
  },
});
