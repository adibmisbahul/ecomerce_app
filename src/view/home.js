import { StyleSheet, Text, View, Image } from "react-native";

import SepatuImage from "../image/shoes.png";

export default function Home() {
  return (
    <View style={styles.container2}>
      <View style={styles.diskonWrap}>
        <View></View>
        <Image source={SepatuImage} style={styles.shoes}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container2: {
    width: '100%', 
    height: 'auto', 
    flexDirection: 'row',
    justifyContent: 'center'
  }, 

  diskonWrap : {
    width: '85%', 
    height: 100, 
    borderRadius:10,
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#81CAE1'
  }, 

  shoes: {
    width:120,
    height: 120,
  }
});
