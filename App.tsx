import { Text, View, StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
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
		<NativeBaseProvider>
			<StatusBar
				barStyle='light-content'
				backgroundColor='transparent'
				translucent
			/>
			<Text style={{ color: 'white' }}>Hello World!</Text>
		</NativeBaseProvider>
	);
}
