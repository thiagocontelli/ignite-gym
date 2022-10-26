import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base';

type Props = IButtonProps & {
	title: string;
};

export function Button({ title, variant, ...props }: Props) {
	return (
		<NativeBaseButton
			bg={variant === 'outline' ? 'transparent' : 'green.700'}
			borderWidth={variant === 'outline' ? 1 : 0}
			borderColor='green.700'
			w='full'
			h={14}
			rounded='sm'
			_pressed={{
				bg: variant === 'outline' ? 'gray.500' : 'green.500',
			}}
			{...props}
		>
			<Text
				fontFamily='heading'
				color={variant === 'outline' ? 'green.700' : 'white'}
				fontSize='sm'
			>
				{title}
			</Text>
		</NativeBaseButton>
	);
}
