import { VStack, Image, Center, Text, Heading } from 'native-base';
import BackgroundImg from '@assets/background.png';
import LogoSvg from '@assets/logo.svg';
import { Input } from '@components/Input';
import { Button } from '@components/Button';

export function SignIn() {
	return (
		<VStack
			flex={1}
			bg='gray.700'
			px={10}
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

				<Input
					placeholder='E-mail'
					keyboardType='email-address'
					autoCapitalize='none'
				/>
				<Input
					placeholder='Senha'
					secureTextEntry
				/>

				<Button title='Acessar' />

				<Button
					title='Criar conta'
					variant='outline'
				/>
			</Center>
		</VStack>
	);
}
