import { StyleSheet, Text, View, Image } from "react-native";

import menuIcon from "../image/Group.png";
import Avatar from "../image/avatar.jpeg";

export default function Navbar() {
  return (
    <View>
      <View style={styles.navbar}>
        <View style={styles.navbar123}>
          <Image source={menuIcon} style={styles.MenuIcon} />
          <Text style={styles.home}>Home</Text>
          <Image source={Avatar} style={styles.avatarIcon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    height: 80,
    marginTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  navbar123: {
    width: "85%",
    height: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  MenuIcon: {
    width: 30,
    height: 30,
  },

  home: {
    fontWeight: "bold",
  },

  avatarIcon: {
    borderRadius: 100,
    width: 50,
    height: 50,
  },
});
