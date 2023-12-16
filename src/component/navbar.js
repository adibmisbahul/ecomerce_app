import { StyleSheet, Text, View, Image } from "react-native";

import menuIcon from "../image/Group.png"; 
import Avatar from "../image/avatar.jpeg";

export default function Navbar () {
	return(
		<View>
			<View style={styles.navbar}>
				<Image source={menuIcon} style={styles.MenuIcon}/>
				<Text style={styles.home}>Home</Text>
				<Image source={Avatar} style={styles.avatarIcon}/>
			</View>
		</View>
	)
}



const styles = StyleSheet.create({
	navbar:{
		width: '100%', 
		height:80, 
		flexDirection: 'row',
		marginTop: 20,
		justifyContent:"space-between", 
		alignItems: 'center'
	}, 

	MenuIcon: {
		width:30, 
		height:30,
	}, 

	home: {
		fontWeight: 'bold'
	}, 

	avatarIcon: {
		borderRadius: 100, 
		width: 50, 
		height: 50,
	}

});