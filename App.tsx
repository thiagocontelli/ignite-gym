import { Text, View, StatusBar } from 'react-native';
import {
	useFonts,
	Roboto_400Regular,
	Roboto_700Bold,
} from '@expo-google-fonts/roboto';

export default function App() {
	const [fontsLoaded] = useFonts({
		Roboto_400Regular,
		Roboto_700Bold,
	});

	if (!fontsLoaded) {
		return null;
	}

	return (
		<View
			style={{
				backgroundColor: '#202024',
				alignItems: 'center',
				justifyContent: 'center',
				flex: 1,
			}}
		>
			<StatusBar
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
			<Text style={{ color: 'white' }}>Hello World!</Text>
		</View>
	);
}
