import { StyleSheet, Text, View, Image } from "react-native";

export default function Category () {
	return(
		<>
		<View style={styles.containerCate}>
			<View style={styles.wrapCate}></View>
		</View>
		</>
	)
}

const styles = StyleSheet.create({
	containerCate: {
		width:'100%', 
		height: 70,
		alignItems: 'center', 
		marginTop: 15,
		backgroundColor: 'black' 
	}, 

	wrapCate: {
		width: '85%', 
		height: 70,
		backgroundColor: 'red' 
	}, 
})