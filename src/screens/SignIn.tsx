import { VStack, Image, Center, Text, Heading } from 'native-base';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';

export function SignIn() {
	return (
		<VStack
			flex={1}
			bg='gray.700'
		>
			<Image
				source={BackgroundImg}
				alt='Pessoas treinando'
				resizeMode='contain'
				position='absolute'
			/>

			<Center my={24}>
				<LogoSvg />
				<Text color='gray.100'>Treine sua mente e seu corpo</Text>
			</Center>

			<Center>
				<Heading
					color='gray.100'
					mb={6}
					fontSize='xl'
				>
					Acesse sua conta
				</Heading>

				<Input placeholder='E-mail' />
				<Input placeholder='Senha' />
			</Center>
		</VStack>
	);
}
