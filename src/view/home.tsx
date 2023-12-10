
import { StyleSheet, Text, View } from 'react-native';

export default function Home() {
	return(
		<View style={styles.container2}>
			<View style={styles.diskon}></View>
		</View>
	)
}


const styles = StyleSheet.create({
	container2: {
		width:300, 
		height:100, 
		borderRadius: 5,
		justifyContent: "center",
		backgroundColor: '#81CAE1'
	},

	diskon:{
		width: 70,
		height: 80, 
		opacity:0.6,
		borderRadius: 5,
		backgroundColor: '#D9D9D9',
	},
  });
  